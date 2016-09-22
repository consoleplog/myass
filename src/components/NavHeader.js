import React from 'react';

  export default class NavHeader extends React.Component {
    handleBack(){
     this.context.router.goBack();
   }
    render () {
      return(
        <div className="nav-header">
            <span className="glyphicon glyphicon-chevron-left" onClick={this.handleBack.bind(this)}>Back</span>
          <h3>someOne@{this.props.title}</h3>
            <span className="glyphicon glyphicon-tree-conifer"></span>
        </div>
      )
    }
  }
  NavHeader.contextTypes = {
     router: React.PropTypes.object.isRequired
  }
