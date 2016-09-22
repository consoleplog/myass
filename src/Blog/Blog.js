import React from 'react';

import { getJson } from '../utils/helpers'
import Card from '../components/Card'
let data=[
   {index:1,title:'如何成为高手',desc:'天天学天天学天天学天天学天天学天天学天天学天天学',url:'a'},
   {index:2,title:'如何成为高手',desc:'天天学天天学天天学天天学天天学天天学天天学天天学',url:'b'},
   {index:3,title:'如何成为高手',desc:'天天学天天学天天学天天学天天学天天学天天学天天学',url:'c'},
   {index:4,title:'如何成为高手',desc:'天天学天天学天天学天天学天天学天天学天天学天天学',url:'d'}
 ]

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
          {this.state.data.map ( (item,i) => <Card {...item} key={i} />)}
        </div>
      )
    }
  }
