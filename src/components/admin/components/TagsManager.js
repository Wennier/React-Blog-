
import React from 'react';
import {Layout,  Menu, Icon} from 'antd';

const { Header, Content, Footer, Sider } = Layout;

class TagManager extends React.Component{
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
                                <h2>标签管理</h2>
                            </Menu.Item>
                        </Menu>
                    </Header>
                    <Content>
                        <h3>to do something~!!!</h3>
                    </Content>
                </Layout>
            </div>
        ) 
    }
}

export default TagManager