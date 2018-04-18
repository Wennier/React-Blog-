
import React from 'react';
import {Select, Input, Layout, Menu, Icon, Button } from 'antd';
import './pubArticle.css';
const { Header, Content, Footer, Sider } = Layout;
const { TextArea } = Input;
const Option = Select.Option;

class PubArticle extends React.Component{
    handleChange(value) {
        console.log(`selected ${value}`);
    }
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
                                <h2>发文</h2>
                            </Menu.Item>
                        </Menu>
                    </Header>
                    <Content className='pub_article'>
                        <div className='pub_title'>
                            <h3>标题</h3>
                            <Input />
                        </div>
                        <div className='pub_title'>
                            <h3>正文</h3>
                            <TextArea rows={10} />
                        </div>
                        <div className='pub_title'>
                            <h3>分类</h3>
                            <Select
                                mode="multiple"
                                style={{ width: '100%' }}
                                placeholder="Please select"
                                // defaultValue={}
                                onChange={this.handleChange.bind(this)}
                            >
                                <Option key='1'>HTML </Option>
                                <Option key='2'>CSS </Option>
                                <Option key='3'>HTML+CSS </Option>
                                <Option key='4'>JAVA </Option>
                            </Select>
                        </div>
                        <div className='pub_btn'>
                            <Button type="primary"> 发布 </Button>
                            <Button type="primary"> 保存 </Button>
                            <Button type="primary"> 预览 </Button>
                        </div>
                        
                    </Content>

                </Layout>
            </div>
        ) 
    }
}

export default PubArticle