import React, { Component } from 'react'
import { getArticleList } from "../../api"
import { Table ,Popover,Button,Popconfirm, Form,Input} from "antd"
import AddArticle from "./addArticle"

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
    title:"创建时间",
    dataIndex:"create_time",
  },
  {
    title:"修改时间",
    dataIndex:"update_time",
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
  state={ 
    loading : true,
    visible:false
  }
  async componentDidMount(){
    const {data} = await getArticleList()
    this.setState({data:data.data, loading : false})
  }
  add=()=>{
    this.setState({visible:true})
  }
  render() {
    return (
      <div>
        <div className='page-header'>
          <Form   
            name="basic-from"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}>
                  <Form.Item label="ID" > <Input /> </Form.Item>
                  <Form.Item label="内容" > <Input /> </Form.Item>
                  <Form.Item label="发布人" > <Input /> </Form.Item>
                  <Form.Item label="创建时间" > <Input /> </Form.Item>
                  <Form.Item label="修改时间" > <Input /> </Form.Item>
          </Form>
        </div>
        <div className='page-action'>
          <Button onClick={this.add}>添加文章</Button>
        </div>
        <Table loading={this.state.loading} rowKey="id" dataSource={this.state?.data} columns={columns}/>
        <AddArticle visible={this.state.visible}/>
      </div>
    )
  }
}
