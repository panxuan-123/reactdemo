// import styles from"./App.css";
import styled from 'styled-components';
const Flex = styled.div`
-moz-box-align: stretch;/* 子容器的垂直对齐方式拉伸到与父容器等高 */
-moz-box-direction: normal;
-moz-box-orient: vertical;/*//子容器的排列方式是垂直*/
align-items: stretch;/*//子元素不设置高度,拉伸到与父容器等高*/
border: 0px solid black;
box-sizing: border-box;/*//修改border和padding数值盒子大小不变 */
display: flex;
flex-basis: auto;/*//width自适应*/
flex-direction: column;/* //子控件纵向排列*/
flex-shrink: 0; /*//子元素超父元素宽度，子元素不会减少*/
margin: 0px;
min-height: 0px;
min-width: 0px;
padding: 0px;
position: relative;
z-index: 0;
`

function App() {
  return (
    <Flex>
      <div className="flex box">
        <div className="flex">
          <div className="flex zindex bg">
          <div className="flex container">
          <div className="flex row">
            <div className="flex row center w50">
              <div className="layout">
                <a href="/">首页</a> <a href="/">社区</a>
                <a href="/">企业购</a>
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
    </Flex>
  );

}

export default App;
