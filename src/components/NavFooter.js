import React from 'react';
import { Link } from 'react-router'

  export default class NavFooter extends React.Component {
    render () {
      return(
        <div className ="nav-footer">
          <Link to='/' activeStyle={{color:'#7C4DFF'}} onlyActiveOnIndex={true}><span className="glyphicon glyphicon-usd"></span><br/>Home</Link>
          <Link to='/blog' activeStyle={{color:'#7C4DFF'}} ><span className="glyphicon glyphicon-usd"></span><br/>Blog</Link>
          <Link to='/work' activeStyle={{color:'#7C4DFF'}} ><span className="glyphicon glyphicon-usd"></span><br/>Work</Link>
          <Link to='/about' activeStyle={{color:'#7C4DFF'}} ><span className="glyphicon glyphicon-usd"></span><br/>About</Link>
        </div>
      )
    }
  }
