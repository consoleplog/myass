import React from 'react';

  export default class NavHeader extends React.Component {
    render () {
      return(
        <div className="nav-header">
            <span className="glyphicon glyphicon-chevron-left"
            >Back</span>
          <h3>someOne@{this.props.title}</h3>
            <span className="glyphicon glyphicon-tree-conifer"></span>
        </div>
      )
    }
  }
