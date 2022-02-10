import { Component } from "react";
import E from "wangeditor"

export default class Editor extends Component{
  
   componentDidMount(){
    const edit = new E('#editor')
    edit.create()
   }
  render(){
    return(
      <div id="editor"></div>
    )
  }
  
}
 