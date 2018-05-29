import React from 'react';
import api from '../../api.js';
import './style.css';
import { Icon } from 'antd';


const getArticleDetail = api.getArticleDetail;


class ArticleDetail extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            articleContent:{}
        };
    }


    componentDidMount(){
        console.log('detail-------------------');
        let url = window.location.hash;
        let id = url.slice(url.lastIndexOf('/') + 1, url.indexOf('?'));
        console.log(id);
        let getArticleDetailURL = getArticleDetail + '/'+ id;
        fetch(getArticleDetailURL,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            mode: 'cors'
        }).then((res) => {
            return res.json();
        }).then((data) => {
            if(data.status == 0){
                let result = data.result_data;
                this.setState({articleContent: result});
            }
            console.log(data);
            // this.setState({articleLists: articleList});
        });
    }

    render(){
        let {title, author, comment, pubTime, readNum, content} = this.state.articleContent;
        return(
            <div className='article_box'>
                <h1 className="title_info">{title}</h1>
                <div className="info_detail">
                    <div ><Icon type="user" /><span>{author}</span></div>
                    <div ><Icon type="calendar" /><span>{pubTime}</span></div>
                    <div ><Icon type="eye-o" /><span>{readNum}</span></div>
                </div>
                <p className="info_content">{content}</p>
            </div>
        );
    }
}

export default ArticleDetail