import React from 'react';

  export default class NavHeader extends React.Component {
    render () {

      return(
        <div className="nav-header">
            <span className="glyphicon glyphicon-chevron-left"
            >Back</span>
            <h3>我的YuTobe</h3>
            <span className="glyphicon glyphicon-tree-conifer"></span>
        </div>
      )
    }
  }
