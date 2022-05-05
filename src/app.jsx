import { Component } from "react";
import "./index.css"
import { NavLink,Route,Routes } from "react-router-dom"
import User from "./view/user"
import Article from './view/article'
import Role from './view/role'
import Hole from './view/hole'
import Home from "./view/home"
import Files from "./view/files"
import Demos from "./view/demo";
class Fhome extends Component {

  render() {
    return (
      <div id="home">
        <div id="header">后台管理</div>
        <div id="center">
            <div className="navi">
                <NavLink to ='/'>首页</NavLink>
                <NavLink to ='/user'>用户管理</NavLink>
                <NavLink to ='/role'>角色管理</NavLink>
                <NavLink to ='/article'>文章管理</NavLink>
                <NavLink to ='/hole'>树洞管理</NavLink>
                <NavLink to ='/files'>文件管理</NavLink>
                <NavLink to ='/demos'>示例</NavLink>
            </div>
              <div className="content">
                  <Routes>
                    <Route exact path="/" element={<Home />}/>
                    <Route path="/user" element={<User />}/>
                    <Route path="/role" element={<Role/>}/>
                    <Route path="/article" element={ <Article/>}/>
                    <Route path="/hole" element={ <Hole/>}/>
                    <Route path="/files" element={ <Files/>}/>
                    <Route path="/demos" element={ <Demos />}/>
                  </Routes>
              </div>
        </div>
       {/* <div id="footer">footer</div> */}
      </div>
    );
  }
}

export default Fhome;
