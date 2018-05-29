import React from 'react';
import {Form, Icon, Input, Button, Checkbox, notification} from 'antd';
import './style.css';
import api from '../../../api.js'

const FormItem = Form.Item;

const getUserInfoURL = api.getUserInfo;

class LogInArea extends React.Component{
    constructor (props) {
        super(props);
        this.state = {
            
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            console.log(values);
            let argsObj = {name: values.userName, password: values.password}
            if (!err) {
                console.log('Received values of form: ', values);
                fetch(getUserInfoURL,{
                    method: 'POST',
                    body: `data=${JSON.stringify(argsObj)}`,
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Accept': 'application/json'
                    },
                    mode: 'cors'
                })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    let type = data.status == 0 ? 'success' : 'error';
                    notification[type]({
                        message: data.msg,
                        description: '不管你是开心还是想吐槽或者发泄,这里可能会是一个不错的地方💕'
                    });
                    if (data.status == 0 && data.result_data.permission == 1) {
                        setTimeout(() => {
                            window.location.hash = '/admin';
                        }, 4500);
                    } else if (data.status == 0 && data.result_data.permission == 0) {
                        let uname = data.result_data.name;
                        setTimeout(() => {
                            this.props.handleIsLogIn(true, uname);
                        }, 4500);
                    }
                    // this.setState({tagsLists: data.result_data});
                });
            }
        });
      }
    render(){
        const { getFieldDecorator } = this.props.form;
        let { isLogIn } = this.state;
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
                    initialValue: false,
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