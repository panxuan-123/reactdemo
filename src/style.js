import styled from "styled-components";

const Flex =  styled.div`
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
.container{width: 1200px;margin:auto}
.App-logo{width: 235px;height: 150px;}
.box{flex: 1 1 0%;
  -moz-box-flex: 1;}
.toolbar{font-size: 12px;position: relative;z-index: 411;}
.top-head{background-color: rgb(0, 0, 0);display: flex;}
.w50{width: 50%;}
.center{align-items: center;
    -moz-box-align: center;}
.start{-moz-box-align: start;
      align-items: flex-start;}
.end{-moz-box-pack: end;
  justify-content: flex-end;}
  
.row{flex-direction: row;}
a{text-decoration: none;}
.zindex{z-index:10}
.layout { position: relative; }
.bg {
  background-color: rgb(0, 0, 0);
}
.layout a{float: left;text-decoration: none; line-height: 36px;pointer-events: auto;list-style: none;padding: 0 8px; padding-left: 8px; position: relative; color: rgba(255,255,255,0.6);}
.header a::before{content: "";
    width: 1px;
    height: 10px;
    display: block;
    position: absolute;
    top: 13px;
    right: 0;
    background: #414141;}
.header a:last-child:before{display:none}
.login{height: 36px;-moz-box-flex: 1;
    flex: auto;-moz-box-direction: normal;
    -moz-box-orient: horizontal;
    flex-direction: row;-moz-box-align: center;
    align-items: center;-moz-box-pack: end;
    justify-content: flex-end;}
.cart{-moz-box-direction: normal;
    -moz-box-orient: horizontal;border: 0px solid red;
    flex-direction: row;-moz-box-align: center;
    align-items: center;-moz-box-pack: center;
    justify-content: center;padding-right: 8px;
    padding-left: 8px;}
.cart a{color: rgba(255, 255, 255, 0.6);}
.login a{-moz-box-flex: 0;flex-grow:0;padding:0px 10px;color: rgba(255, 255, 255, 0.6);}
.naviBarLayout{background-color: rgb(255, 255, 255);}
.navibar{flex-direction:row;align-items: center;}
.logo{ width: 100px;height: 74px;}
.logo img{inset: 0px;
    height: 100%;
    opacity:1;
    position: absolute;
    width: 100%;
    z-index: -1;}
.navibar .text{-moz-box-flex: 1;
    flex: 1 1 0%;}
.navibar .text .zi{margin-left: 40px;} 
`


export default Flex;