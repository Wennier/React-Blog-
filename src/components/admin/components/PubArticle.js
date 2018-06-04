
import React from 'react';
import {Select, Input, Layout, Menu, Icon, Button, notification } from 'antd';
import './pubArticle.css';
import api from '../../../api'

const getTagsURL = api.getTagsList;
const addArticleURL = api.addArticle;

const { Header, Content, Footer, Sider } = Layout;
const { TextArea } = Input;
const Option = Select.Option;

class PubArticle extends React.Component{
    constructor (props) {
        super(props);
        this.state = {
            pubTitle: '',
            pubContent: '',
            tags: [],
            tagsLists: [],
            key: 4
        }
    }
    componentDidMount(){
        fetch(getTagsURL,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            mode: 'cors'
        })
        .then((res) => res.json())
        .then((data) => {
            this.setState({tagsLists: data.result_data});
        });
    }
    handleChange(value) {
        this.setState({tags: value});
    }
    handleTitle (e) {
        this.setState({
            pubTitle: e.target.value
        });
    }
    handleText (e) {
        this.setState({
            pubContent: e.target.value
        });
    }
    tagsGroups (arr) {
        return arr.map(item => {
            return (
                <Option key={item.name}>{item.name} </Option>
            );
        })
    }
    getPubTime () {
        let date = new Date();
        return date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate()
    }
    handlePublish () {
        let {pubTitle, pubContent, tags, key} = this.state;
        let imgURL = "http://h.hiphotos.baidu.com/image/pic/item/11385343fbf2b211ec2f692ac68065380cd78e55.jpg";
        let publishTime = this.getPubTime();
        let index = key++;
        let argsObj = {
            title: pubTitle,
            content: pubContent,
            readNum: "10",
            comment: "5",
            author: "Velvet Zhang",
            type: tags,
            pubTime: publishTime,
            id: index.toString(),
            src: imgURL,
            
        };
        console.log(argsObj);
        fetch(addArticleURL,{
            method: 'POST',
            body: `data=${JSON.stringify(argsObj)}`,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json'
            },
            mode: 'cors'
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            let type = data.status == 0 ? 'success' : 'error';
            notification[type]({
                message: data.msg,
                description: '不管你是开心还是想吐槽或者发泄,这里可能会是一个不错的地方💕'
            }); 
            // this.setState({tagsLists: data.result_data});
        });

    }
    render(){
        let { tagsLists } = this.state;
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
                            <Input onBlur = {this.handleTitle.bind(this)} />
                        </div>
                        <div className='pub_title'>
                            <h3>正文</h3>
                            <TextArea rows={10} onBlur = {this.handleText.bind(this)}/>
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
                            {this.tagsGroups(tagsLists)}
                                {/* <Option key='1'>HTML </Option>
                                <Option key='2'>CSS </Option>
                                <Option key='3'>HTML+CSS </Option>
                                <Option key='4'>JAVA </Option> */}
                            </Select>
                        </div>
                        <div className='pub_btn'>
                            <Button type="primary" onClick={this.handlePublish.bind(this)}> 发布 </Button>
                            {/* <Button type="primary"> 保存 </Button> */}
                            {/* <Button type="primary"> 预览 </Button> */}
                        </div>                       
                    </Content>
                </Layout>
            </div>
        ) 
    }
}

export default PubArticle