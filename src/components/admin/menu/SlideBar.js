import React from 'react';
import {Layout, Menu, Icon } from 'antd';
import './style.css';
import NavLink from '../../navLink/NavLink';
import { Link, Router, Route, hashHistory } from 'react-router';

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class SlideBar extends React.Component{
    state = {
        collapsed: false,
        selectKey: '',
    };
    onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
    }
    componentDidMount(){
        console.log('did');
        let path = window.location.hash;
        let str = path.split('?')[0].split('/')[2];
        console.log(path);
        console.log(str);
        let key = str ? str : 'admin';
        this.setState({
            selectKey: key
        });
    }
    componentWillMount(){
        console.log('will');
    }
    handleClick({ item, key, keyPath }){
        this.setState({
            selectKey: key
        });
    }

    render(){
        return(
                <Sider
                collapsible
                collapsed={this.state.collapsed}
                onCollapse={this.onCollapse}
                >
                    <Menu theme="dark" 
                          defaultSelectedKeys={['admin']} 
                          mode="inline"
                          onClick = {this.handleClick.bind(this)}
                          selectedKeys = {[this.state.selectKey]}
                          >
                        <Menu.Item key="admin">
                            <Icon type="home" />
                            <NavLink style={{display: 'inline-block'}} to='/admin'>首页</NavLink>
                        </Menu.Item>
                        <Menu.Item key="publishArticle">
                            <Icon type="edit" />
                            <NavLink style={{display: 'inline-block'}} to='/admin/publishArticle'>发文</NavLink>
                        </Menu.Item>
                        <Menu.Item key="usersManager">
                            <Icon type="team" />
                            <NavLink style={{display: 'inline-block'}} to='/admin/usersManager'>用户管理</NavLink>
                        </Menu.Item>
                        <Menu.Item key="tagsManager">
                            <Icon type="tags-o" />
                            <NavLink style={{display: 'inline-block'}} to='/admin/tagsManager'>标签管理</NavLink>
                        </Menu.Item>
                        <Menu.Item key="articleManager">
                            <Icon type="file" />
                            <NavLink style={{display: 'inline-block'}} to='/admin/articleManager'>文章管理</NavLink>
                        </Menu.Item>
                    </Menu>
                </Sider>
        );
    }
}

export default SlideBar