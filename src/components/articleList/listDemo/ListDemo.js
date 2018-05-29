import React from 'react';
import './style.css';
import listData from './data';
import api from '../../../api.js';

const imgSrc = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523674163961&di=8f845dd0b4eaf5896f774d070c0f3ad6&imgtype=0&src=http%3A%2F%2Fup.enterdesk.com%2Fedpic_source%2Fca%2F6b%2F5f%2Fca6b5f366b3ea52aab975235096594e8.jpg';


const getArticleListUrl = api.getArticleList;
class ListDemo extends React.Component{
   constructor(props){
       super(props);
       this.state = {
           articleLists:{}
       };
   }

    componentDidMount(){
        let articleList = {};
        fetch(getArticleListUrl,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            mode: 'cors'
        }).then((res) => {
            console.log(res); 
            return res.json();
        }).then((data) => {
            console.log(data);
            articleList['all'] = data.result_data
            data.result_data.map(item => {
                item.type.map(key => {
                    if(articleList.hasOwnProperty(key)){
                        articleList[key].push(item);
                    }else{
                        articleList[key] = [];
                        articleList[key].push(item);
                    }
                })
            })
            this.setState({articleLists: articleList});
        });
    }


    listFormat(articleData, tagName){
        let _this = this;
        if(articleData.length == 0){
            return(
                <div>
                    no  data!
                </div>
            );
        }
        // _this.toDetail();
        return articleData.map(item => {
            return (
                <div key={item.id} className='list_demo_content' onClick={_this.toDetail.bind(_this, item.id, item)}>
                    <img className='img' src={item.src} alt='error' />
                    
                    <div className='content'>
                        <h2>{item.title}</h2>
                        <p>{item.content}</p>
                    </div>
                    <div className='content_info'>
                        <span className='content_info_span'>阅读量：{item.readNum}</span>
                        <span className='content_info_span'>发表时间：{item.pubTime}</span>
                        <span className='content_info_span'><a href=''>查看全文></a></span>
                    </div>
                    
                </div>
            );
        });
    }
    toDetail(id, item){
        console.log('detail----', id, item);
        window.location.hash="/toDetail/"+id;
        
    }
    render(){
        let { tagType } = this.props;
        let { articleLists } = this.state;
        let listContent = [];
        let tagname = tagType.tagName;
        console.log(articleLists);
        console.log(tagname);

        if(!tagType.hasOwnProperty('tagName')){
            if(articleLists.hasOwnProperty('all')){
                listContent = articleLists.all;
            }
        } else {
                listContent = articleLists[tagname];
                console.log(listContent);
                if(!listContent){
                    return null
                }
        }
        console.log(listContent);
        return(
            <div className='list_demo'>
                {this.listFormat(listContent)}
            </div>
        );
    }
}
export default ListDemo