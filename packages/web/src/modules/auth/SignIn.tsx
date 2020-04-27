import React from 'react';

import AuthForm from './AuthForm';
import { MailOutlined, LockOutlined } from '@ant-design/icons';

const SignIn: React.FC = () => {
  const fields = [
    {
      name: 'email',
      placeholder: 'Email',
      rules: [
        {
          required: true,
          message: 'Please input your email!',
        },
        {
          type: 'email',
          message: 'The input is not valid E-mail!',
        },
      ],
      icon: <MailOutlined />,
    },
    {
      name: 'password',
      placeholder: 'Password',
      type: 'password',
      rules: [
        {
          required: true,
          message: 'Please input your email!',
        },
      ],
      icon: <LockOutlined />,
    },
  ];

  const link = [
    {
      to: '/signup',
      text: 'register now!',
    },
  ];

  return <AuthForm fields={fields} returnLink={link} buttonText="Login" />;
};

export default SignIn;
