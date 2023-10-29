import { Alert, Button, Form, Input, Spin } from 'antd';
import { useState } from 'react';
import { ContainerStyled, FormStyled } from './styles';
import Typography from 'antd/es/typography/Typography';
import { auth, db } from '../../../firebase.config';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
import { useNavigate } from 'react-router';
import useLocalStorage from '../../hooks/useLocalStorage';

export default function LoginPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });
    const [notification, setNotification] = useState({
        on: false,
        message: '',
        type: 'success'
    });
    const [_curUser, setCurUser] = useLocalStorage('current-user', {});
    const navigate = useNavigate();
    const { Title } = Typography;
    const userCollection = collection(db, 'users');
    const handleRegister = async () => {
        if(userData.password.length < 6) {
            setNotification({
                on: true,
                type: 'error',
                message: 'Password should be at least 6 characters',
            });
            return;
        }
        setIsLoading(true);
        try {
            let docId;
            const userQuery = query(userCollection, where('email', '==', userData.email));
            const querySnapshot = await getDocs(userQuery);
            querySnapshot.forEach((doc) => {
                docId = doc.id;
            });
            await signInWithEmailAndPassword(auth, userData.email, userData.password);
            setCurUser({...userData, docId })
            navigate('/home');
            setIsLoading(false);
        } catch(error) {
            if(error.code === 'auth/invalid-login-credentials') {
                await createUserWithEmailAndPassword(auth, userData.email, userData.password);
                const docRef = await addDoc(userCollection, userData);
                setCurUser({...userData, docId: docRef._key.path.segments[1]});
                navigate('/home');
                setIsLoading(false);
            } else {
                setIsLoading(false);
                setNotification({
                    on: true,
                    type: 'error',
                    message: error.code
                })
            }
        }
    }
    if(isLoading) {
        return (
            <ContainerStyled>
                <Spin size="large" />
            </ContainerStyled>
        )
    }
    return (
        <ContainerStyled>
            <FormStyled
                layout='vertical'
            >

                <Title level={4}>Welcome to QuizApp</Title>
                {
                    notification.on && (
                        <Alert message={notification.message} type={notification.type} showIcon closable />
                    )
                }
                <Form.Item label="User name">
                    <Input 
                        placeholder="Enter your username..."
                        value={userData.username}
                        onChange={(e) => setUserData({...userData, username: e.target.value})}
                    />
                </Form.Item>
                <Form.Item label="Email">
                    <Input 
                        placeholder="Enter your email..."
                        value={userData.email}
                        onChange={(e) => setUserData({...userData, email: e.target.value})}
                    />
                </Form.Item>
                <Form.Item label="Password">
                    <Input.Password
                        placeholder="Enter your password..." 
                        value={userData.password}
                        onChange={(e) => setUserData({...userData, password: e.target.value})}
                    />
                </Form.Item>
                <Button type="primary" onClick={handleRegister}>Register</Button>
            </FormStyled>
        </ContainerStyled>
    )
}