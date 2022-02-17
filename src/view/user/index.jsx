import React, { Component } from 'react'
import {getUser } from "../../api"
import { Table,Button, Popconfirm ,Form, Input } from 'antd';
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
  title: '创建时间',
  dataIndex: 'create_time',
  key: 'create_time',
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
  render: (_ , record) =>
      <Popconfirm
      title="Are you sure to delete this task?"
      onConfirm={()=>delUser(record.id)}
      onCancel={cancel}
      okText="Yes"
      cancelText="No"
    > 
          <Button type="danger" >删除</Button>
    </Popconfirm>,
 },
]
function cancel(){
  console.log("cancel")
}
function delUser(id){
  console.log(id);
}

export default class User extends Component {
  state={
    loading : true,
    visible:false
  }
  async componentDidMount(){
    const {data} = await getUser()
    if(data){
      this.setState({data, loading:false})
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
                  <Form.Item label="姓名" > <Input /> </Form.Item>
                  <Form.Item label="密码" > <Input /> </Form.Item>
                  <Form.Item label="创建时间" > <Input /> </Form.Item>
          </Form>
        </div>
        <div className='page-action'>
          <Button onClick={this.showModal}>添加用户</Button>
        </div>
        <Table loading={this.state.loading} rowKey="id" columns={columns} dataSource={this.state.data} /> 
      </div>
    )
  }
}
