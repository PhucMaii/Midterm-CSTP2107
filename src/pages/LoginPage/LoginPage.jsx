import { Input } from 'antd';
import React, { useState } from 'react';

export default function LoginPage() {
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })

    console.log(userData)
    return (
        <div>
            <Input 
                placeholder="Enter your email..."
                value={userData.email}
                onChange={(e) => setUserData({...userData, email: e.target.value})}
            />
        </div>
    )
}