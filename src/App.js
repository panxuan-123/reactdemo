import styles from "./App.css";
import React from 'react';
function App() {
  return (
    <div className="flex">
      <div className="flex box">
        <div className="flex">
          <div className="flex zindex bg">
          <div className="flex container">
          <div className="flex row">
            <div className="flex row center w50">
              <div className="layout">
                <a className="${styles.title}" href="/">首页</a> 
                <a className="${styles.title}" href="/">社区</a>
                <a className="${styles.title}" href="/">企业购</a>
              </div>
            </div>
            <div className="flex end row login">
            <div className="layout">
              <a className="flex" href="/">
                登录
              </a>
              <a className="flex" href="/">
                注册
              </a>
              <a className="flex" href="/">
                消息通知
              </a></div>
              {/* <div className="yetlogin">
                <span className="name"></span>

                <a href="/">注销</a>
              </div> */}
            </div>
            <div className="flex cart">
              <a href="/">购物车（0）</a>
            </div>
          </div>   </div>
        </div>
        <div className="flex naviBarLayout" id="naviBarLayout">
          <div className="flex container navibar">
            <div className="flex logo">
              <img
                alt=""
                draggable="false"
                src="https://res.vmallres.com/portal/1.11.4.301/h5/images/logo_app.png"
                className="css-9pa8cd"
              />
            </div>
            <div className="flex row text">
          
              <div className="zi">商城专区</div>
              <div className="zi">一级专区</div>
              <div className="zi">二级专区</div>
              <div className="zi">专区</div>
             </div>
              <div className="flex row search">
              <div className="row">
            搜索
          </div></div>
          </div>
          </div>
        </div>
      </div>
      <div className="banner">
     
    </div>
    </div>
  );

}

export default App;
