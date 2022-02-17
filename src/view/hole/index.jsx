import React, { Component } from 'react'
import { getHoleList , addHole ,delHole} from "../../api"
import { Table ,Popover,Button,Popconfirm ,Form ,Input,Modal, message} from "antd"
import ReactWEditor from 'wangeditor-for-react';
export default class Hole extends Component {

  state={loading:true,
    visible:false,
    articleData:{}
  }
  columns=()=>[
    {
      title:"ID",
      dataIndex:"id"
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
      title:"时间",
      dataIndex:"create_time",
    },
    
    {
      title:"操作",
      render:(_,record)=>
          <Popconfirm
          title="Are you sure to delete this task?"
          onConfirm={()=>this.delMessage(record.id)}
          okText="Yes"
          cancelText="No"
        > 
              <Button type="danger"  >删除</Button>
        </Popconfirm>
    }
  ]

  delMessage= async (id)=>{
    const {status} = await delHole(id)
    if(status===200){
      message.success("已删除")
      this.getData()
    }
  }

  async componentDidMount(){
    this.getData()
  }

  getData= async ()=>{
    const {data} = await getHoleList()
    if(data.data){
      this.setState({data:data.data, loading : false})
    }
  }
  cttChange=(html)=>{
    const {articleData} = this.state
    articleData.content = html
    this.setState({articleData})
  }
  add = async()=>{
    const data = {
      content:this.state.articleData.content,
      create_time:new Date()
    }
    const {status} = await  addHole(data)
    if(status===200){
      message.success("添加成功")
      this.showModal()
      this.getData()
    }
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
                  <Form.Item label="创建时间" > <Input /> </Form.Item>
          </Form>
        </div>
        <div className='page-action'>
          <Button onClick={this.showModal}>添加留言</Button>
        </div>
        <Table loading={this.state.loading} rowKey="id" dataSource={this.state?.data} columns={this.columns()}/>
        <Modal visible = {this.state.visible} title="添加留言" onOk={this.add} onCancel={this.showModal}>
            <ReactWEditor 
              onChange={(html)=>this.cttChange(html)}
            />
        </Modal>
      </div>
    )
  }
}
