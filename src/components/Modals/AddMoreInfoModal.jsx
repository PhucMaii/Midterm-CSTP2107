import PropTypes from 'prop-types'
import { collection, doc, updateDoc } from 'firebase/firestore'
import { ModalStyled } from './styles'
import { Alert, Button, Form, Input, Spin } from 'antd'
import { db } from '../../../firebase.config'
import { useState } from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';
import { useNavigate } from 'react-router-dom';
import { ContainerStyled } from '../../pages/LoginPage/styles';

export default function AddMoreInfoModal({ open, setOpen }) {
    const [isLoading, setIsLoading] = useState(false);
    const [notification, setNotification] = useState({
        on: false,
        message: '',
        type: 'success'
    });
    const [userInfo, setUserInfo] = useState({
        username: '',
        img: ''
    });
    // eslint-disable-next-line no-unused-vars
    const [curUser, setCurUser] = useLocalStorage('current-user', {});
    const navigate = useNavigate();
    const userCollection = collection(db, 'users');

    const addUserInfo = async () => {
        if(userInfo.username === '') {
            setNotification({
                on: true,
                type: 'error',
                message: 'Username is required',
            });
            return;
        }
        setIsLoading(true);
        try {
            const userData = JSON.parse(localStorage.getItem('current-user'));
            const docReference = doc(userCollection, userData.docId);
            await updateDoc(docReference, {...userInfo});
            setCurUser({...userData, ...userInfo});
            navigate('/home');
            setIsLoading(false);
            setOpen(false);
        } catch(error) {
            console.log(error);
            setIsLoading(false);
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
        <ModalStyled 
            open={open}
            title="Welcome to our quiz app. Let us know more about you" 
            footer={[
                <Button 
                    type="primary" 
                    key="submit" 
                    onClick={addUserInfo}
                >
                    Sign up
                </Button>
            ]}
        >
            <Form
                layout='vertical'
            >
                {
                    notification.on && (
                        <Alert message={notification.message} type={notification.type} showIcon closable />
                    )
                }
                <Form.Item label="User name">
                    <Input
                        required
                        placeholder="Enter your username..."
                        value={userInfo.username}
                        onChange={(e) => setUserInfo({...userInfo, username: e.target.value})}
                    />
                </Form.Item>
                <Form.Item label="Profile Picture">
                    <Input 
                        placeholder="Enter your profile image URL..."
                        value={userInfo.img}
                        onChange={(e) => setUserInfo({...userInfo, img: e.target.value})}
                    />
                </Form.Item>
            </Form>
        </ModalStyled>
  )
}

AddMoreInfoModal.propTypes = {
    open: PropTypes.bool,
    setOpen: PropTypes.func
}  