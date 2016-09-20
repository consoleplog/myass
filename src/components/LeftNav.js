import React, { PropTypes } from 'react'
import { Link } from 'react-router'

class LeftNav extends React.Component {
  render () {
    return(
      <div className="LeftNav">
        <h3>asdasd</h3>
        <Link to='/' activeStyle={{color:'#7C4DFF'}} onlyActiveOnIndex={true}><span className="glyphicon glyphicon-usd">Home</span></Link>
        <Link to='/blog' activeStyle={{color:'#7C4DFF'}}><span className="glyphicon glyphicon-usd">Blog</span></Link>
        <Link to='/work' activeStyle={{color:'#7C4DFF'}}><span className="glyphicon glyphicon-usd">Work</span></Link>
        <Link to='/about' activeStyle={{color:'#7C4DFF'}}><span className="glyphicon glyphicon-usd">About</span></Link>
      </div>
    )
  }
}

export default LeftNav;
