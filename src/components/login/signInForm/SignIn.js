import React from 'react';
import {Form, Input, Button,} from 'antd';
import './style.css';

const FormItem = Form.Item;

class SignIn extends React.Component{

    state= {
        confirmDirty: false
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
    }
    checkPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
            callback('Two passwords that you enter is inconsistent!');
        } else {
            callback();
        }
    }
    checkConfirm = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
          form.validateFields(['confirm'], { force: true });
        }
        callback();
    }
    handleConfirmBlur = (e) => {
        const value = e.target.value;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
      }
    render(){
        const { getFieldDecorator } = this.props.form;
        return(
            <Form onSubmit={this.handleSubmit}>
                <FormItem
                hasFeedback
                >
                {getFieldDecorator('email', {
                    rules: [
                    //     {
                    // type: 'email', message: 'The input is not valid E-mail!',
                    // }, {
                    // required: true, message: 'Please input your E-mail!',
                    // }
                ],
                })(
                    <Input className='username' placeholder="Username"/>
                )}
                </FormItem>
                <FormItem
                hasFeedback
                >
                {getFieldDecorator('password', {
                    rules: [{
                    required: true, message: '',
                    }, {
                    validator: this.checkConfirm,
                    }],
                })(
                    <Input className='password' type="password" placeholder="Password"/>
                )}
                </FormItem>
                <FormItem
                hasFeedback
                >
                {getFieldDecorator('confirm', {
                    rules: [{
                    required: true, message: 'Please confirm your password!',
                    }, {
                    validator: this.checkPassword,
                    }],
                })(
                    <Input className='checkpass' type="password" onBlur={this.handleConfirmBlur} placeholder="Confirm password"/>
                )}
                </FormItem>
                <FormItem >
                    <Button type="primary" htmlType="submit">Register</Button>
                </FormItem>
            </Form>
        );
    }
}
const SignInForm = Form.create()(SignIn);

export default SignInForm
