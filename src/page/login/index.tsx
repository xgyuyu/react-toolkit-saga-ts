import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { loginActions } from './loginSlice';

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const isLogging = useAppSelector((state) => state.login.isLoggedIn);
  const onFinish = (values: any) => {
    dispatch(loginActions.login(values));
  };
  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default App;
