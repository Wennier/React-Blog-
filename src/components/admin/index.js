import React from 'react';
import {Layout, Menu, Breadcrumb, Icon } from 'antd';
import './style.css';
import NavLink from '../navLink/NavLink.js';
import { Link, Router, Route, hashHistory } from 'react-router';
import AdminFront from './AdminFront.js';

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;
console.log(Router);
class Admin extends React.Component{
    // constructor(props){
    //     super(props);
    // }
    state = {
        collapsed: false,
      };
      onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({ collapsed });
      }
      render() {
        return (
          <Layout style={{ minHeight: '100vh' }}>
            <Sider
              collapsible
              collapsed={this.state.collapsed}
              onCollapse={this.onCollapse}
            >
              <div className="logo" />
              <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                <Menu.Item key="1">
                  <Icon type="home" />
                  <NavLink style={{display: 'inline-block'}} to='/admin'>首页</NavLink>
                </Menu.Item>
                <Menu.Item key="2">
                  <Icon type="edit" />
                  <NavLink style={{display: 'inline-block'}} to='/admin/publishArticle'>发文</NavLink>
                </Menu.Item>
                <Menu.Item key="3">
                  <Icon type="team" />
                  <NavLink style={{display: 'inline-block'}} to='/admin/usersManager'>用户管理</NavLink>
                </Menu.Item>
                <Menu.Item key="4">
                  <Icon type="tags-o" />
                  <NavLink style={{display: 'inline-block'}} to='/admin/tagsManager'>标签管理</NavLink>
                </Menu.Item>
                <Menu.Item key="5">
                  <Icon type="file" />
                  <NavLink style={{display: 'inline-block'}} to='/admin/articleManager'>文章管理</NavLink>
                </Menu.Item>
              </Menu>
            </Sider>
            <Layout>
              <Content style={{ margin: '0 16px' }}>
                <h2></h2>
                <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                  <Router history={hashHistory}>
                      <Route path='/admin' component={AdminFront}/>
                      {/* <Route path='/admin/publishArticle' component={PublishArticle}/>
                      <Route path='/admin/usersManager' component={UsersManager}/>
                      <Route path='/admin/tagsManager' component={TagsManager}/>
                      <Route path='/admin/articleManager' component={ArticleManager}/> */}
                  </Router>
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