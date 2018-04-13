
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
                            selectedKeys='front'
                            mode="horizontal"
                        >
                            <Menu.Item key="front">
                                <h2>首页</h2>
                            </Menu.Item>
                        </Menu>
                    </Header>
                    <Content>
                        <p>to do something~!!!</p>
                    </Content>
                </Layout>
            </div>
        ) 
    }
}

export default AdminFront