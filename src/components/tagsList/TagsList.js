import React from 'react';
import {Layout, Menu } from 'antd';
import './style.css';
import NavLink from '../navLink/NavLink';
import api from '../../api';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const { Header, Content, Footer } = Layout;

const getTagsListURL = api.getTagsList;


class TagsList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            current: 'front',
            tagsLists:[],
        }
    }
    componentDidMount(){
        fetch(getTagsListURL,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            mode: 'cors'
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            this.setState({tagsLists: data.result_data});
        });
    }
    handleClick({item, key, keyPath}){
        this.setState({
            current: key
        });
        console.log(item, key, keyPath);
    }

    getMenuItem(tagsName){
        return tagsName.map((item,index) => {
            return (
                <Menu.Item key= {index}>
                    <NavLink style={{display: 'inline-block'}} to={'/' + item.name}>{item.name}</NavLink>
                </Menu.Item>
            );
        })
    }
    render(){
        let {tagsLists} = this.state;
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
                        
                            <Menu.Item key="front">
                                <NavLink style={{display: 'inline-block'}} to='/'>首页</NavLink>
                            </Menu.Item>
                            {this.getMenuItem(tagsLists)}
                            {/* <Menu.Item key="1">
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
                            </Menu.Item> */}
                        </Menu>
                    </div>
                {/* </Header> */}
                {/* <Content>123</Content> */}
            </Layout>
        );
    }
}

export default TagsList