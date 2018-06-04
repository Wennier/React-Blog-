import React from 'react';
import './style.css';
import {Tabs, Icon, } from 'antd';
import LogInForm from './logInForm/index';
import SignInForm from './signInForm/SignIn';

const TabPane = Tabs.TabPane;

class LogIn extends React.Component{

    constructor (props) {
        super(props);
        this.state = {
            isLogIn: false,
            userName: ''

        }
    }

    handleIsLogIn (newState, name) {
        if (newState) {
            this.setState({
                isLogIn: newState,
                userName: name
            })
        }
    }

    render(){
        let { isLogIn, userName } = this.state;
        let ranNum = Math.round(Math.random()*9);
        let picSrc = './assets/' + ranNum + '.jpg';
        const logInFalse = (
            <Tabs className='login_area' defaultActiveKey="1">
                <TabPane  tab='登录' key="1">
                    <LogInForm handleIsLogIn = {this.handleIsLogIn.bind(this)}/>
                </TabPane>
                <TabPane tab='注册' key="2">
                    <SignInForm />
                </TabPane>
            </Tabs>
        );
        const logInTrue = (
            <div className="">
                <span className="info_headerPic"><img src={require('./assets/'+ ranNum +'.jpg')} alt=""/></span>
                <h3 className="info_name">{userName}</h3>
                <p className="info_des">来者都是小仙女~👧</p>
            </div>
            
        );
        return(
            <div id='login'>
                 {isLogIn ? logInTrue : logInFalse}
            </div>
        );

    }

}

export default LogIn