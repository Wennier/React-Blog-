import React from 'react';
import './style.css';
import ListDemo from './listDemo/ListDemo';

class ArticleList extends React.Component{

    render(){
        console.log(this.props.params);
        return(
            <div className='article'>
                <ListDemo tagType={this.props.params}/> 
            </div>
        );

    }
}

export default ArticleList