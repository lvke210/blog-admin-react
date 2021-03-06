import React,{useState,useEffect} from "react"
import { Table ,Popover,Button,Popconfirm, Form, Input, Space} from "antd"
import { getArticleList } from "../../api"
import AddArticle from "./addArticle"

export default  function Article () {
 const columns = ()=>[
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
      render:text=><div className='dangerouslySetInnerHTML' dangerouslySetInnerHTML={{__html:text}}></div>
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
             <Button type="primary" onClick={()=>editBlog(record.id)}>编辑</Button>
          </Space>
            
    }
  ]
  const [tableData,setTableData] = useState([])
  const [visible,setVisible] = useState(false)
  const [editData,setEditData] = useState ({})
  const editBlog = (id)=> {
    setVisible(!visible)
    const data = tableData.find(item=>item.id===id)
    setEditData(data)
  }

  useEffect(()=>{
    getArticleList().then(res=>{
      setTableData(res?.data?.data)
    })
  },[])

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
          <Button >添加文章</Button>
        </div>
        <Table rowKey="id" dataSource={tableData} columns={columns()} />
        <AddArticle  
        visible={visible} 
        editData = {editData}
        onCloseModal={ ()=>{
            setVisible(!visible)
          }}
        
          /> 
      </div>
  )
}

