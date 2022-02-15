import React, { Component } from 'react'
import { getHoleList } from "../../api"
import { Table ,Popover,Button,Popconfirm} from "antd"

const columns =[
  {
    title:"ID",
    dataIndex:"id"
  },
  {
    title:"内容",
    dataIndex:"content",
    render:text=><Popover content={text}>{text}</Popover>
  },
  {
    title:"发布人",
    dataIndex:"create_by",
    render:text=> text??"未记录"
  },
  {
    title:"时间",
    dataIndex:"create_time",
  },
  
  {
    title:"操作",
    render:(_,record)=>
        <Popconfirm
        title="Are you sure to delete this task?"
        onConfirm={()=>delMessage(record.id)}
        onCancel={cancel}
        okText="Yes"
        cancelText="No"
      > 
            <Button type="danger" >删除</Button>
      </Popconfirm>
  }
]
function cancel(){
  console.log("cancel")
}
function delMessage(id){
  console.log(id);
}
export default class Hole extends Component {
  state={}
  async componentDidMount(){
    const {data} = await getHoleList()
    this.setState({data:data.data})
  }
  render() {
    return (
      <div>
        <Table rowKey="id" dataSource={this.state?.data} columns={columns}/>
      </div>
    )
  }
}
