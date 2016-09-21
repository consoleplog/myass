import React, { PropTypes } from 'react'
import { Link } from 'react-router'

class LeftNav extends React.Component {
  render () {
    return(
      <div className="LeftNav">
        <h3>someOne@{this.props.title}</h3>
        <Link to='/' activeStyle={{color:'#7C4DFF'}} onlyActiveOnIndex={true}><p className="glyphicon glyphicon-usd"></p><span>Home</span></Link>
        <Link to='/blog' activeStyle={{color:'#7C4DFF'}}><p className="glyphicon glyphicon-usd"></p><span>Blog</span></Link>
        <Link to='/work' activeStyle={{color:'#7C4DFF'}}><p className="glyphicon glyphicon-usd"></p><span>Work</span></Link>
        <Link to='/about' activeStyle={{color:'#7C4DFF'}}><p className="glyphicon glyphicon-usd"></p><span>About</span></Link>
      </div>
    )
  }
}

export default LeftNav;
