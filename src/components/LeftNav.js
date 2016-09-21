import React, { PropTypes } from 'react'
import { Link } from 'react-router'

class LeftNav extends React.Component {
    constructor(){
     super();
     title:'Home'
   }
   componentWillReceiveProps(){
     this.setTitle();
   }
   componentWillMount(){
     this.setTitle();
   }
   setTitle(){
     this.setState({
       title: this.context.router.isActive('/',true) ? 'Home' :
               this.context.router.isActive('/blog') ? 'Blog' :
               this.context.router.isActive('/work') ? 'Work' :
               this.context.router.isActive('/about') ? 'About' : 'Item'
     })
   }
  render () {
    return(
      <div className="LeftNav">
        <h3>someOne@{this.state.title}</h3>
        <Link to='/' activeStyle={{color:'#7C4DFF'}} onlyActiveOnIndex={true}><p className="glyphicon glyphicon-usd"></p><span>Home</span></Link>
        <Link to='/blog' activeStyle={{color:'#7C4DFF'}}><p className="glyphicon glyphicon-usd"></p><span>Blog</span></Link>
        <Link to='/work' activeStyle={{color:'#7C4DFF'}}><p className="glyphicon glyphicon-usd"></p><span>Work</span></Link>
        <Link to='/about' activeStyle={{color:'#7C4DFF'}}><p className="glyphicon glyphicon-usd"></p><span>About</span></Link>
      </div>
    )
  }
}
  LeftNav.contextTypes = {
   router: React.PropTypes.object.isRequired
 }

export default LeftNav;
