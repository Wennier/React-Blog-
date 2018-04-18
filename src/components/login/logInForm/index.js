import React from 'react';
import {Form, Icon, Input, Button, Checkbox} from 'antd';
import './style.css';

const FormItem = Form.Item;

class LogInArea extends React.Component{


    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
      }
    render(){
        const { getFieldDecorator } = this.props.form;
        return(
            <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem>
                {getFieldDecorator('userName', {
                    rules: [],
                })(
                    <Input className='username' prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
                )}
                </FormItem>
                <FormItem>
                {getFieldDecorator('password', {
                    rules: [],
                })(
                    <Input className='password' prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
                )}
                </FormItem>
                <FormItem>
                {getFieldDecorator('remember', {
                    valuePropName: 'checked',
                    initialValue: true,
                })(
                    <div>
                        <Checkbox>Remember me</Checkbox>
                    </div>
                )}
                {/* <a className="login-form-forgot" href="">Forgot password</a> */}
                <Button type="primary" htmlType="submit" className="login-form-button">
                    登录
                </Button>
                </FormItem>
            </Form>
        );
    }
}

const LogInForm = Form.create()(LogInArea);
export default LogInForm