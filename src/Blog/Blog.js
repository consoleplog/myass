import React from 'react';

import marked from 'marked';
import { getJson } from '../utils/helpers'
import Card from '../components/Card'

  export default class Blog extends React.Component {
    constructor(){
     super();
     this.state={
       data:[],
       wait:true
     }
   }
   componentDidMount(){
     getJson()
       .then( (recData) => {
         this.setState({
           data:recData.getJson,
           wait:false
         })
       });
   }
    render () {
      return(
        <div style={{width:"100%",marginTop:"20px"}}>
          {this.state.wait ? 'please wait' : this.state.data.map ( (item,i) => <Card {...item} key={i} />)}
        </div>
      )
    }
  }
