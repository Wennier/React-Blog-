import React from 'react';
import './style.css';
import {Tabs, Icon, } from 'antd';
import LogInForm from './logInForm/index';
import SignInForm from './signInForm/SignIn';

const TabPane = Tabs.TabPane;

class LogIn extends React.Component{

    render(){
        return(
            <div id='login'>
                 <Tabs className='login_area' defaultActiveKey="1">
                    <TabPane  tab='登录' key="1">
                        <LogInForm />
                    </TabPane>
                    <TabPane tab='注册' key="2">
                        <SignInForm />
                    </TabPane>
                </Tabs>
            </div>
        );

    }
}

export default LogIn