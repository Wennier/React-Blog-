
import React from 'react';
import {Layout,  Menu, Icon} from 'antd';

const { Header, Content, Footer, Sider } = Layout;



class AdminFront extends React.Component{
    render(){
        return(
            <div>
                <Layout>
                    <Header>
                        <Menu
                            selectedKeys={['front']}
                            mode="horizontal"
                        >
                            <Menu.Item key="front">
                                <h2>首页</h2>
                            </Menu.Item>
                        </Menu>
                    </Header>
                    <Content>
                        <h3>欢迎欢迎，balabala ，to do something~!</h3>
                    </Content>
                </Layout>
            </div>
        ) 
    }
}

export default AdminFront