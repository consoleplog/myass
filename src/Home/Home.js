import React from 'react';

  export default class Home extends React.Component {
    render () {
        let styles={
        h3:{
        fontSize:'42px',
        fontWeight:'700',
        marginBottom:'20px'
        }
    }
      return(
        <div className='home-container'>
            <div className='home-over'>
                <div className="home-item">
                  <h3 style={styles.h3}>Hi,ervey</h3>
                  <p style={{marginBottom:'20px'}}>extensions</p>
                  <button>Help me</button>
                </div>
            </div>
        </div>
      )
    }
  }
