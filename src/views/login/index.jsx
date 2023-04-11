import './index.css'
import React from 'react';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Input, message } from 'antd';
export default function Login({setIsLogin}) {
    const [password, setPassword] = React.useState(null);
    const [messageApi, contextHolder] = message.useMessage();
    function pressEnter(e) {
        const date = new Date()
        const year = date.getFullYear()
        const mon = date.getMonth() + 1
        const month = mon > 9 ? mon : `0${mon}`
        const day = date.getDate()
        const rightPassword = `love${year}${month}${day}`
        if (password === rightPassword) {
            setIsLogin(true)
        } else {
            error()
        }
    }
    const error = () => {
        messageApi.open({
            type: 'error',
            content: '密码错误，请重新输入！',
        });
    };
    return (
        <div className='login'>
            {contextHolder}
            <Input.Password
                className='password'
                placeholder="请输入密码"
                iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                onPressEnter={pressEnter}
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />
        </div>
    )
}