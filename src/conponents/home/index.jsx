import { Component } from "react";
import "./index.css"
class Fhome extends Component {
  render() {
    return (
      <div id="home">
        <div id="header">后台管理</div>
        <div id="center">
            <div class="navi">
              <ul>
                <li>用户管理</li>
                <li>角色管理</li>
                <li>文章管理</li>
              </ul>
            </div>
            <div class="content"></div>
        </div>
       <div id="footer">footer</div>
      </div>
    );
  }
}

export default Fhome;
