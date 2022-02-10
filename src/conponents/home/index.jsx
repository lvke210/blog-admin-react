import { Component } from "react";
import "./index.css"
import Editor from "../editor/index";
import { Select ,Input,Button,message} from 'antd';
const { Option } = Select;
function handleChange(value) {
  console.log(`selected ${value}`);
}
function fabu(){
  message.success('发布成功');
}
class Fhome extends Component {
 
  render() {
    return (
      <div id="home">
        <div id="header">后台管理</div>
        <div id="center">
            <div className="navi">
              <ul>
                <li>用户管理</li>
                <li>角色管理</li>
                <li>文章管理</li>
              </ul>
            </div>
            <div className="content">
             <div style={{ display:'flex' }}>
              <div>
                  博客标题:
                  <Input className="ipt"/> 
                </div>
                <div style={{ zIndex:999999,marginBottom:"50px" }}>
                  分类:
                  <Select defaultValue="tec1" style={{ width: 120 }} onChange={handleChange}>
                      <Option value="tec1">技术类</Option>
                      <Option value="tec2">生活类</Option>
                      <Option value="tec3">娱乐类</Option>
                  </Select>
                </div>
             </div>

                <Editor/> 
                <Button onClick={fabu}>发布</Button>
              </div>
        </div>
       <div id="footer">footer</div>
      </div>
    );
  }
}

export default Fhome;
