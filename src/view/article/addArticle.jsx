import React, { Component} from 'react'
import {Modal,Input,Form,Row,Col} from "antd"
import WangEdit from "../../conponents/editor"
export default class AddArticle extends Component {
  constructor(props){
    super(props)
    this.state={
      visible:false,
      articleData:{}
    }
  }
  cancel=()=>{
    this.setState({visible:false})
  }
  UNSAFE_componentWillReceiveProps(nextProps){
    this.setState({visible: nextProps.visible});
  }
  add=()=>{
    console.log("创建文章");
  }
  iptChange=(e)=>{
        const {articleData} = this.state
        articleData.title = e.target.value
        this.setState({articleData})
  }
  render() {
    const {visible,articleData} = this.state
    return (
      <Modal title="添加博客" visible = {visible} width="80%" okText="提交" onOk={this.add} cancelText="取消" onCancel={this.cancel} maskClosable={false}>
        <Form labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
            <Row>
              <Col span={6}>
                <Form.Item label="博客标题" name="username">
                  <Input value={articleData.titles} onChange={this.iptChange} width="200px"/>
                </Form.Item>
             </Col>
            </Row>
        </Form>
        <div>
           <WangEdit ref={"wang"}/>
        </div>
        </Modal>
    )
  }
}
