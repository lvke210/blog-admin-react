import { Component } from "react";
import "./index.css"
import Editor from "../editor/index";
import { Select ,Input,Button,message,Table} from 'antd';
import axios from "axios"
const { Option } = Select;
function handleChange(value) {
  console.log(`selected ${value}`);
}
function fabu(){
  message.success('发布成功');
}
const columns = [
  {
  title: '姓名',
  dataIndex: 'name',
  key: 'name',
 },
  {
  title: '密码',
  dataIndex: 'password',
  key: 'password',
 },
  {
  title: 'ID',
  dataIndex: 'id',
  key: 'id',
 },
  {
  title: '操作',
  dataIndex: '',
  key: 'a',
  render: (_ , record,index) => <a onClick={()=>delUser(record.id)}>删除</a>,
 },
]
function delUser(id){
  console.log(id);
}
class Fhome extends Component {
  state={data:null}
  getUser= ()=>{
    axios.get("http://lvke210.com/api/user").then(res=>{ this.setState({data:res.data})})
    console.log(this.state);
  }
  componentDidMount(){
    this.getUser()
  }
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
                <Button onClick={this.getUser}>获取用户信息</Button>
                <Table rowKey="id" columns={columns} dataSource={this.state.data} />

              </div>
        </div>
       <div id="footer">footer</div>
      </div>
    );
  }
}

export default Fhome;
