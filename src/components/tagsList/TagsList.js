import React from 'react';
import {Layout, Menu } from 'antd';
import './style.css';
import NavLink from '../navLink/NavLink';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const { Header, Content, Footer } = Layout;


class TagsList extends React.Component{
    state = {
        current: '0',
    }
    handleClick({item, key, keyPath}){
        this.setState({
            current: key
        });
        console.log(item, key, keyPath);
    }

    render(){
        return(
            <Layout>
                {/* <Header > */}

                    <div className='tags_menu'>
                        {/* todo */}
                        {/* 从接口获取有哪些标签 */}
                        <Menu
                            onClick={this.handleClick.bind(this)}
                            selectedKeys={[this.state.current]}
                            mode="horizontal"
                        >   
                            <Menu.Item key="0">
                                <NavLink style={{display: 'inline-block'}} to='/'>首页</NavLink>
                            </Menu.Item>
                            <Menu.Item key="1">
                                <NavLink style={{display: 'inline-block'}} to='/HTML'>HTML</NavLink>
                            </Menu.Item>
                            <Menu.Item key="2" >
                                <NavLink style={{display: 'inline-block'}} to='/css'>CSS</NavLink>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <NavLink style={{display: 'inline-block'}} to='/html+css'>HTML + CSS3</NavLink>
                            </Menu.Item>
                            <Menu.Item key="4" >
                                <NavLink style={{display: 'inline-block'}} to='/react'>React</NavLink>
                            </Menu.Item>
                            <Menu.Item key="5" >
                                <NavLink style={{display: 'inline-block'}} to='/vue'>Vue</NavLink>
                            </Menu.Item>
                        </Menu>
                    </div>
                {/* </Header> */}
                {/* <Content>123</Content> */}
            </Layout>
        );
    }
}

export default TagsList