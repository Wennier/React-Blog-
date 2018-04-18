
import React from 'react';
import {Button, Layout, Menu, Icon } from 'antd';
import listData from '../../../components/articleList/listDemo/data';
import './articleManager.css';
const { Header, Content, Footer, Sider } = Layout;

class ArticleManager extends React.Component{

    articleDemo(data){
        if(data){
            return data.map(item => {
                return(
                    <div key={item.key} className='article_demo'>
                        <div className='article_info'>
                            <h2>{item.title}</h2>
                            <span className='article_info_span'>作者：{item.author}</span>
                            <span className='article_info_span'>阅读数：{item.readNum}</span>
                            <span className='article_info_span'>评论数：{item.comment}</span>
                            <span className='article_info_span'>发表时间：{item.pubTime}</span>
                        </div>
                        <div className='article_mana_btn'>
                            <Button type='primary'>修改</Button>
                            <Button type='primary'>删除</Button>
                            <Button type='primary'>查看</Button>
                        </div>
                    </div>
                );
            });
        }
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
                                <h2>文章管理</h2>
                            </Menu.Item>
                        </Menu>
                    </Header>
                    <Content>
                        {this.articleDemo(listData)}
                    </Content>
                </Layout>
            </div>
        ) 
    }
}

export default ArticleManager