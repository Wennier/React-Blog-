import React from 'react';
import './style.css';
import listData from './data';

const imgSrc = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523674163961&di=8f845dd0b4eaf5896f774d070c0f3ad6&imgtype=0&src=http%3A%2F%2Fup.enterdesk.com%2Fedpic_source%2Fca%2F6b%2F5f%2Fca6b5f366b3ea52aab975235096594e8.jpg';

class ListDemo extends React.Component{

    listFormat(articleData){
        return articleData.map(item => {
            return (
                <div key={item.key} className='list_demo_content'>
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
    render(){
        let { tagType } = this.props;
        return(
            <div className='list_demo'>
                {this.listFormat(listData, tagType)}
            </div>
        );
    }
}
export default ListDemo