import React from 'react';
import {Layout, Menu, Breadcrumb, Icon } from 'antd';
import './style.css';
import NavLink from '../navLink/NavLink.js';
import { Link, Router, Route, hashHistory } from 'react-router';

import SlideBar from './menu/SlideBar.js';

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;
class Admin extends React.Component{
    // constructor(props){
    //     super(props);
    // }

    componentWillMount(){
      console.log('index will');
    }
    componentDidMount(){
      console.log('index did');
    }
      render() {
        return (
          <Layout style={{ minHeight: '100vh' }}>
            <SlideBar />
            <Layout>
              <Content style={{ margin: '0 16px' }}>
                <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                  {this.props.children}
                </div>
              </Content>
              <Footer style={{ textAlign: 'center' }}>
                COPYRIGHT @ zhangwenhui
              </Footer>
            </Layout>
          </Layout>
        );
      }
}
export default Admin