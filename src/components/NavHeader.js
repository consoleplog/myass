import React from 'react';

  export default class NavHeader extends React.Component {
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
        <div className="nav-header">
            <span className="glyphicon glyphicon-chevron-left"
            >Back</span>
          <h3>someOne@{this.state.title}</h3>
            <span className="glyphicon glyphicon-tree-conifer"></span>
        </div>
      )
    }
  }
NavHeader.contextTypes = {
   router: React.PropTypes.object.isRequired
 }
