import React from 'react'

const notFound = require('./404.jpg');

class NotFound extends React.Component{
    // constructor(props){
    //     super(props);
    // }

    render(){
        return(
            <div style={{width:'100%',height:'100%'}}><img src={notFound} alt='404'/></div>
        );
    }
}
export default NotFound