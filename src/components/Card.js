import React, { PropTypes } from 'react'
import { Link } from 'react-router'
class Card extends React.Component {
  render () {
    let styles ={
      root:{
        borderRadius:'10px',
        margin:'0 auto',
        boxShadow: '0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24)',
        width:'96%',  marginBottom:'20px',

      },
      index:{
               backgroundColor:'#00bcd4',
               height:'80px',
               textAlign:'center',
               borderRadius: '10px 10px 0 0',
               paddingTop:'10px'
      },
      num:{
        lineHeight:'60px',
        width:'60px',
        height:'60px',
        borderRadius:'50%',
        border: '2px solid #fff',
        display:'block',
        fontSize:'20px',
        margin:'0px auto',
        color:'#fff'
      },
      content:{
        padding:"16px"
      },
      title:{
        fontSize:'18px',
        color:'#727272',
      },
      desc:{
        color:'#727272',
      },
      btn:{
        border:'1px solid red',
        padding:'8px 35px ',
        borderRadius:'5px',
        textDecoration:'none'
      },
      btnOut:{
        padding:'5px 0'
      }
    }
    let address = `item/${this.props.url}`;
    return (
      <div style={styles.root}>
        <p style={styles.index}><span style={styles.num}>{this.props.index}</span></p>
        <div style={styles.content}>
          <p style={styles.title}>{this.props.title}</p>
          <p style={styles.desc}>{this.props.desc}</p>
          <p style={styles.btnOut}><Link to={address}  style={styles.btn} href="#">click</Link></p>
        </div>
      </div>
    )
  }
}
Card.defaultProps={
   index:1,
   title:'这里是标题',
   desc:'这里是介绍'
 }
 Card.propTypes = {
   index: PropTypes.number.isRequired,
   title: PropTypes.string.isRequired,
   desc: PropTypes.string.isRequired
 };

export default Card;
