
import React from 'react';
import {Input, Layout,  Menu, Icon, Tag, Tooltip, notification} from 'antd';
import api from '../../../api'

const { Header, Content, Footer, Sider } = Layout;

const addTagsURL = api.addTagName;
const getTagsURL = api.getTagsList;
const deleteTagURL = api.deleteTagName;

class TagManager extends React.Component{
    state = {
        tags: [],
        inputVisible: false,
        inputValue: '',
    };

    componentDidMount(){
        //获取tags
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
            data.result_data.forEach((item,index) => {
                item['key'] = index;
            });
            this.setState({tags: data.result_data});
        });

        // fetch(userSignInUrl,{
        //     method: 'POST',
        //     body: `data=${JSON.stringify(argsObj)}`,
        //     headers: {
        //         'Content-Type': 'application/x-www-form-urlencoded',
        //         'Accept': 'application/json'
        //     },
        //     mode: 'cors'
        // })
        // .then((res) => res.json())
        // .then((data) => {
        //     console.log(data);
        //     let type = data.status == 0 ? 'success' : 'error';
        //     notification[type]({
        //         message: data.msg,
        //         description: '不管你是开心还是想吐槽或者发泄,这里可能会是一个不错的地方💕'
        //     });
        //     if (data.status == 0 ) {
        //         setTimeout(() => {
                    
        //         }, 4500);
        //     } 
        //     // this.setState({tagsLists: data.result_data});
        // });
    }
    handleClose = (removedTag) => {
        const tags = this.state.tags.filter(tag => tag !== removedTag);
        this.setState({ tags });
        //删除标签，更新数据库
        let argsObj = {name: removedTag}
        fetch(deleteTagURL,{
            method: 'POST',
            body: `data=${JSON.stringify(argsObj)}`,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json'
            },
            mode: 'cors'
        })
        .then(res => res.json())
        .then((data) => {
            let type = data.status == 0 ? 'success' : 'error';
            notification[type]({
                message: data.msg,
                description: '不管你是开心还是想吐槽或者发泄,这里可能会是一个不错的地方💕'
            });
        });
    }
    showInput = () => {
        this.setState({ inputVisible: true }, () => this.input.focus());
    }
    handleInputChange = (e) => {
        this.setState({ inputValue: e.target.value });
    }
    handleInputConfirm = () => {
        const state = this.state;
        const inputValue = state.inputValue;
        let tags = state.tags;
        if (inputValue && tags.indexOf(inputValue) === -1) {
          tags = [...tags, {name: inputValue, key: tags.length}];
        }
        console.log(tags);
        this.setState({
          tags,
          inputVisible: false,
          inputValue: '',
        });

        //增加标签，更新后台数据库
        let argsObj = {name: inputValue}
        fetch(addTagsURL,{
            method: 'POST',
            body: `data=${JSON.stringify(argsObj)}`,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json'
            },
            mode: 'cors'
        })
        .then(res => res.json())
        .then((data) => {
            console.log(data);
            let type = data.status == 0 ? 'success' : 'error';
            notification[type]({
                message: data.msg,
                description: '不管你是开心还是想吐槽或者发泄,这里可能会是一个不错的地方💕'
            });
        });
    
    }
    saveInputRef = input => this.input = input

    render(){
        const { tags, inputVisible, inputValue } = this.state;
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
                        <div>
                            {tags.map((tag, index) => {
                                const isLongTag = tag.name.length > 20;
                                const tagElem = (
                                <Tag key={tag.key} closable afterClose={() => this.handleClose(tag.name)}>
                                    {isLongTag ? `${tag.name.slice(0, 20)}...` : tag.name}
                                </Tag>
                                );
                                return isLongTag ? <Tooltip title={tag.name} key={tag.key}>{tagElem}</Tooltip> : tagElem;
                            })}
                            {inputVisible && (
                                <Input
                                ref={this.saveInputRef}
                                type="text"
                                size="small"
                                style={{ width: 78 }}
                                value={inputValue}
                                onChange={this.handleInputChange}
                                onBlur={this.handleInputConfirm}
                                onPressEnter={this.handleInputConfirm}
                                />
                            )}
                            {!inputVisible && (
                                <Tag
                                onClick={this.showInput}
                                style={{ background: '#fff', borderStyle: 'dashed' }}
                                >
                                <Icon type="plus" /> New Tag
                                </Tag>
                            )}
                        </div>
                    </Content>
                </Layout>
            </div>
        ) 
    }
}

export default TagManager