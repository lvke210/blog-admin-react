import React, { Component } from 'react'
import { getArticleList } from "../../api"
import { Table ,Popover,Button,Popconfirm, Form, Input, Space} from "antd"
import AddArticle from "./addArticle"



export default class Hole extends Component {
  state={ 
    loading : true,
    visible:false
  }

  columns = ()=>[
    {
      title:"ID",
      dataIndex:"id"
    },
    {
      title:"标题",
      dataIndex:"title",
      render:text=><Popover content={text}>{text}</Popover>
    },
    {
      title:"内容",
      dataIndex:"content",
      render:text=><Popover content={text}><div className='dangerouslySetInnerHTML' dangerouslySetInnerHTML={{__html:text}}></div></Popover>
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
          <Space>
              <Popconfirm
                title="Are you sure to delete this task?"
                onConfirm={()=>this.delMessage(record.id)}
              > 
                  <Button type="danger" >删除</Button>
              </Popconfirm>
             <Button type="primary" onClick={()=>this.editBlog(record.id)}>编辑</Button>
          </Space>
            
    }
  ]

   editBlog=(id)=>{
    this.setState({visible:true})
  }
  
   delMessage = (id) => {
    console.log(id);
  }
  
   componentDidMount(){
    this.getData()
  }

  getData=async()=>{
    const {data} = await getArticleList()
    this.setState({data:data.data, loading : false})
  }

  showModal=()=>{
    this.setState({visible:!this.state.visible})
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
          <Button onClick={this.showModal}>添加文章</Button>
        </div>
        <Table loading={this.state.loading} rowKey="id" dataSource={this.state?.data} columns={this.columns()}/>
        <AddArticle visible={this.state.visible} data={this.state.data} showModal = {this.showModal} getData = {this.getData}/>
      </div>
    )
  }
}
