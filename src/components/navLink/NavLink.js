import React from 'react';
import { Link } from 'react-router';
import './style.css';

export default React.createClass({
    render(){
        return <Link {...this.props} activeClassName='active' />
    }
});