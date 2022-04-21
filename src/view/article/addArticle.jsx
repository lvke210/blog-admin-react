import React ,{ useEffect,useState }from 'react'
import { Modal,Input,Form,Row,Col } from "antd"
import ReactWEditor from 'wangeditor-for-react';

export default function AddArticle (props){
    const [form] = Form.useForm();
    const { editData ,visible} = props
    const [updataData,setData] = useState({})

    useEffect(()=>{
      form.setFieldsValue(editData)
    })

    function getUpdateData(){
      console.log("setDatasetData")
      setData(editData)
      debugger
    }

    const titleChanged=(event)=>{
      getUpdateData()
      const title = event.target.value
      setData({title,...updataData})
      console.log(updataData,"updataData")
    }
 

    const contentChanged= (content)=> {
      if(content){
        getUpdateData()
        setData({content,...updataData})
        console.log(updataData,"updataData",content)
      }
    }
  return (
    <Modal title="添加博客" forceRender  visible = {visible} width="80%" okText="提交" onCancel={()=>props.onCloseModal()} cancelText="取消" maskClosable={false} >
          <Form form={form}  labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}  >
              <Row>
                <Col span={6}>
                  <Form.Item label="博客标题" name="title" initialValue={editData.title}>
                    <Input  width="200px"  onChange={titleChanged}/>
                  </Form.Item>
               </Col>
              </Row>
          </Form>
          <div >
           <ReactWEditor 
            height="800px"
            value = {editData.content}
            onChange={(html) => contentChanged(html)}
           />
          </div>
          </Modal>
  )
  // constructor(props){
  //   super(props)
  //   this.state={
  //     visible:false,
  //     loading:false,
  //     articleData:{}
  //   }
  // }
 
  // UNSAFE_componentWillReceiveProps(nextProps){
  //   this.setState({visible: nextProps.visible });
  // }
  // add=async ()=>{
  //   this.setState({loading:true})
  //  const {status} = await addArticle(this.state.articleData)
  //  if(status===200) {
  //    this.props.showModal()
  //    this.props.getData()
  //    this.setState({loading:false})
  //  }
  // }
  // iptChange=(e)=>{
  //       const {articleData} = this.state
  //       articleData.title = e.target.value
  //       this.setState({articleData})
  // }
  // cttChange=(html)=>{
  //   const {articleData} = this.state
  //   articleData.content = html
  //   this.setState({articleData})
  // }
  // render() {
  //   const {articleData,loading} = this.state

  //   return (
  //     <Modal title="添加博客" visible = {this.props.visible} width="80%" okText="提交" onOk={this.add} cancelText="取消" onCancel={()=>this.props.showModal()} maskClosable={false} loading = {loading}>
  //       <Form labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
  //           <Row>
  //             <Col span={6}>
  //               <Form.Item label="博客标题" name="username">
  //                 <Input value={articleData?.title} onChange={this.iptChange} width="200px"/>
  //               </Form.Item>
  //            </Col>
  //           </Row>
  //       </Form>
  //       <div>
  //        <ReactWEditor 
  //          onChange={(html)=>this.cttChange(html)}
  //        />
  //       </div>
  //       </Modal>
  //   )
  // }
}
