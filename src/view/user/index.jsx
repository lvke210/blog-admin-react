import React, { Component } from 'react'
import {getUser } from "../../api"
import { Table,Button, Popconfirm } from 'antd';
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
  state={loading : true}
  async componentDidMount(){
    const {data} = await getUser()
    if(data){
      this.setState({data, loading:false})
    }
  }
  render() {
    return (
      <div>
        <Table loading={this.state.loading} rowKey="id" columns={columns} dataSource={this.state.data} /> 
      </div>
    )
  }
}
