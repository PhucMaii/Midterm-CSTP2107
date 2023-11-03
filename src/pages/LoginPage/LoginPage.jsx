import { Alert, Button, Form, Input, Spin } from 'antd';
import { useState } from 'react';
import { ContainerStyled, FormStyled } from './styles';
import Typography from 'antd/es/typography/Typography';
import { auth, db } from '../../../firebase.config';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
import { useNavigate } from 'react-router';
import useLocalStorage from '../../hooks/useLocalStorage';
import AddMoreInfoModal from '../../components/Modals/AddMoreInfoModal';

const { Title } = Typography;

export default function LoginPage() {
    const [isOpenAddMoreInfo, setIsOpenAddMoreInfo] = useState();
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
    // eslint-disable-next-line no-unused-vars
    const [_curUser, setCurUser] = useLocalStorage('current-user', {});
    const navigate = useNavigate();
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
            let data;
            const userQuery = query(userCollection, where('email', '==', userData.email));
            const querySnapshot = await getDocs(userQuery);
            querySnapshot.forEach((doc) => {
                docId = doc.id;
                data = doc.data();
            });
            await signInWithEmailAndPassword(auth, userData.email, userData.password);
            setCurUser({...data, docId});
            navigate('/home');
            setIsLoading(false);
        } catch(error) {
            setIsLoading(false);
            if(error.code === 'auth/invalid-login-credentials') {
                await createUserWithEmailAndPassword(auth, userData.email, userData.password);
                const docRef = await addDoc(userCollection, userData);
                setCurUser({...userData, docId: docRef._key.path.segments[1]});
                setIsOpenAddMoreInfo(true);
            } else {
                setNotification({
                    on: true,
                    type: 'error',
                    message: error.code
                })
            }
            console.log(error.code);
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
            <AddMoreInfoModal 
                open={isOpenAddMoreInfo}
                setOpen={setIsOpenAddMoreInfo}
            />
            <FormStyled
                layout='vertical'
            >
                <Title level={4}>Welcome to QuizApp</Title>
                {
                    notification.on && (
                        <Alert message={notification.message} type={notification.type} showIcon closable />
                    )
                }
                <Form.Item label="Email">
                    <Input 
                        required
                        placeholder="Enter your email..."
                        value={userData.email}
                        onChange={(e) => setUserData({...userData, email: e.target.value})}
                    />
                </Form.Item>
                <Form.Item label="Password">
                    <Input.Password
                        required
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