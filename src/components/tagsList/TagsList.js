import React from 'react';
import { Menu } from 'antd';
import './style.css';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class TagsList extends React.Component{
    state = {
        current: '1',
    }
    handleClick({item, key, keyPath}){
        console.log(item, key, keyPath);
    }

    render(){
        return(
            <Menu
                onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                mode="horizontal"
            >
                <Menu.Item key="1">HTML</Menu.Item>
                <Menu.Item key="2" >CSS</Menu.Item>
                <Menu.Item key="3">HTML5 + CSS3</Menu.Item>
                <Menu.Item key="4" >React</Menu.Item>
                <Menu.Item key="5" >React-Router</Menu.Item>
            </Menu>
        );
    }
}

export default TagsList