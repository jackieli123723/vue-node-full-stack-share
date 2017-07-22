<template>
    <div class="reveal">
			<div class="slides">

				<section data-background="http://otha2y1bi.bkt.clouddn.com/IMG_2405.PNG">
          <div >NodeJS的全栈式开发</div><br/>
          <div class="fon14">作者: 李立冬 (共享平台部web前端工程师)</div> <br/> 
          <div>
            <a href="https://github.com/jackieli123723" target="_blank" title="github" class="icon-github icon-btn"></a>
            <a href="https://codepen.io/jackieli123723/" target="_blank" title="codepen" class="icon-codepen icon-btn"></a>
            <a href="http://lilidong.cn" title="web" target="_blank" class="icon-web icon-btn"></a>
          </div>
        </section>

        <section>
          <section data-background="http://otha2y1bi.bkt.clouddn.com/IMG_2365.JPG">
            <div><em class="color2 " style="font-size:2em">Node.js</em></div><br/>
            <ul class="fon16" style="font-size:0.8em;line-height:2">
              <li>是一个基于 <em class="color7">Chrome V8</em> 引擎的 <em class="color1">JavaScript</em> 运行环境。</li> 
              <li>使用了一个事件驱动、非阻塞式 <em class="color5">I/O</em> 的模型，使其轻量又高效。 </li> 
              <li>管理器 <em class="color3">npm</em>，是全球最大的开源库生态系统。</li> 
            </ul>
          </section>

          <section style="text-align:left;padding:0 20px;line-height:1.5" data-background="http://otha2y1bi.bkt.clouddn.com/IMG_2406.PNG">
             概括来说,<em class="color2">Node.js</em>是<em class="color7">JavaScript</em>后端开发语言。正是 <em class="color2">Node.js</em> 的兴起，还带动了前端  的热度，从诞生之初就备受关注，到如今<em class="color2">Node.js</em>被各大互联网公司应用到各自的产品中。从此，<em class="color7">JavaScript</em> 程序员不再是被局限于浏览器的前端开发者了。
          </section>

        </section>

        <section>
                <section data-background="http://otha2y1bi.bkt.clouddn.com/bg1.jpg"> 
                  <div style="font-size:1.5em">传统<em class="color2">WEB</em>应用开发的混沌时代</div>
                </section>

                <section style="text-align:left;padding:0 20px;line-height:1.5"  data-background="http://otha2y1bi.bkt.clouddn.com/IMG_2393.JPG">
                  在传统的像<em class="color2">JSP,PHP</em>等开发模式中，前端处在一个混沌的状态，前端负责切图和编写静态页面,后端负责将数据渲染到静态页面，最后页面在通过浏览器渲染展示，这个过程中前端只是写了一些简单的样式和基础<em class="color2">javascript</em>脚本，数据渲染的过程的j脚本甚至是后端程序编写，导致这样的情况就是前后端的运行环境不统一带来的。
                </section>
        </section>

        <section data-transition="fade" data-background="http://otha2y1bi.bkt.clouddn.com/IMG_2361.PNG">
          <div style="font-size:1.8em">传统web开发存在的<em class="color2">缺点</em></div><br/>
          <ul class="fon16" style="font-size:1em;line-height:2">
            <li>代码<em class="color4">耦合</em>性差</li> 
            <li>公共代码抽离<em class="color1">模块</em>化难度大</li> 
            <li><em class="color7">业务逻辑</em>代码的分离界限不明确</li> 
          </ul>
        </section>

        <section data-background="http://otha2y1bi.bkt.clouddn.com/IMG_2389.PNG">
              <div style="font-size:1.5em">如何解决这些<em class="color2">缺点</em>？</div>
        </section>


        <section data-background="http://otha2y1bi.bkt.clouddn.com/IMG_2416.JPG">
              <div style="font-size:1.5em"><em class="color2">Node.js</em>打通前后端的运行环境</div>
        </section>

        <section>
            <section data-background="http://otha2y1bi.bkt.clouddn.com/IMG_2364.JPG">
               <div style="font-size:2em"><em class="color2">路由</em>的概念</div><br/>
            <!--    <div class="fon16" style="font-size:0.8em;line-height:2;text-align:left">  路由是指如何定义应用的端点（URIs）以及如何响应客户端的请求。</div> -->
            </section>

            <section data-background="http://otha2y1bi.bkt.clouddn.com/IMG_2395.JPG">
                <div style="font-size:1.8em">传统后端路由</div><br/>
                <ul class="fon16" style="font-size:1em;line-height:2">
                  <li>每跳转到不同的URL，都是重新访问服务端，然后服务端返回页面，页面也可以是服务端获取数据，然后和模板组合，返回HTML，也可以是直接返回模板HTML，然后由前端js再去请求数据，使用前端模板和数据进行组合，生成想要的HTML。</li>  
                </ul>
            </section>

            <section data-background="http://otha2y1bi.bkt.clouddn.com/IMG_2390.JPG">
                <div style="font-size:1.8em">前端路由(MVC,MVVM框架)</div><br/>
                <ul class="fon16" style="font-size:1em;line-height:1.8;">
                  <li>每跳转到不同的URL都是使用<em class="color2">hash/history</em>模式的路由分发控制页面之间的跳转，实际上只是JS根据URL来操作DOM元素，根据每个页面需要的去服务端请求数据，返回数据后和模板进行组合，当然模板有可能是请求服务端返回的，这就是 <em class="color2">SPA </em>单页程序。</li>  
                </ul>
            </section>

        </section>

        <section data-background="http://otha2y1bi.bkt.clouddn.com/IMG_2413.PNG">
           <div style="font-size:1.5em">如何利用<em class="color2">NODE</em>来实现后端的路由</div>
        </section>

        <section>
              <section data-background="http://otha2y1bi.bkt.clouddn.com/IMG_2403%281%29.JPG">
                   <div style="font-size:1.8em"><em class="color2">Express</em></div><br/>
                    <ul class="fon16" style="font-size:1em;line-height:1.5">
                      <li>Express 是一个基于 Node.js 平台的极简、灵活的 web 应用开发框架，它提供一系列强大的特性，帮助你创建各种 Web 和移动设备应用。</li> 
                      <li>丰富的 HTTP 快捷方法和任意排列组合的 Connect 中间件</li> 
                      <li>express生态扩展了 Web 应用所需的基本功能轮子。</li> 
                    </ul>
              </section>
              <section data-background="http://otha2y1bi.bkt.clouddn.com/IMG_2399%281%29.PNG">
                 <pre><code style="background:#9d9696">$ npm install express --save</code></pre>
                <img src="http://otha2y1bi.bkt.clouddn.com/express.png"/>
              </section>

              <section data-background="http://otha2y1bi.bkt.clouddn.com/IMG_2399%281%29.PNG">
                 <pre><code style="background:#9d9696">$ server.js</code></pre>
                <img src="http://otha2y1bi.bkt.clouddn.com/QQ%E6%88%AA%E5%9B%BE20170722184634.png"/>
              </section>

              <section data-background="http://otha2y1bi.bkt.clouddn.com/IMG_2399%281%29.PNG">
                 <pre><code style="background:#9d9696">$ route/index.js</code></pre>
                <img src="http://otha2y1bi.bkt.clouddn.com/QQ%E6%88%AA%E5%9B%BE20170722184940.png"/>
              </section>

        </section>

        <section data-background="http://otha2y1bi.bkt.clouddn.com/IMG_2362.PNG">
           <div style="font-size:1.5em">前后端都采用<em class="color2">JavaScript</em>来编写业务逻辑代码</div>
        </section>


        <section>
          <section data-background="http://otha2y1bi.bkt.clouddn.com/IMG_2360.JPG"> 
            <div style="font-size:1.5em">前后端分离的<em class="color2">Node</em>时代</div>
          </section>
          <section data-background="http://otha2y1bi.bkt.clouddn.com/IMG_2366.JPG">
            <ul class="fon16" style="font-size:1em;line-height:2">
              <li>无需切换语言环境，<i class="color3">JavaScript</i>可以做到后端语言能做的绝大部分事情</li> 
              <li>数据可以很好的实现跨前后端使用（使用<i class="color3">json</i>） </li> 
              <li>一些业务(如模板渲染)不需要纠结在前端还是后端处理</li> 
            </ul>
          </section>
          
        </section>


        <section data-background="http://otha2y1bi.bkt.clouddn.com/IMG_2418.JPG">
                <div style="font-size:1.5em">前端工程师不再是<em class="color2">“切图仔”</em>，也可以玩NODE全栈开发</div>
        </section>

        
         <section data-background="http://otha2y1bi.bkt.clouddn.com/IMG_2357.PNG">
            <hgroup>
  
             <h2 class="color5"><em class="color2">Node</em>的全栈技术栈清单</h2>
            </hgroup>
            <article>
            <ul>
              <li><i class="color10">前端：</i>Vue2全家桶 + Webpack + ES6</li>
              <li><i class="color2">mockServer：</i>Nodemon + Json-server/Mock</li>
              <li><i class="color7">后端：</i>Node + Express/Koa/Egg + Mysql/Mongodb</li>
              <li><i class="color5">服务端：</i>Nginx + Pm2/Forever/Supervisor</li>
            </ul>
            </article>
        </section>

        
        <section data-transition="fade" data-background="http://otha2y1bi.bkt.clouddn.com/IMG_2407.PNG">
          <h2>谢谢观赏</h2>
          <img src="https://media.giphy.com/media/2gGEWrIGVioP6/giphy.gif" class="dubblesize">
        </section>

        <section data-background="http://otha2y1bi.bkt.clouddn.com/IMG_2400%281%29.PNG">
            <h2>没太懂讲的什么？我们来个龙渊道具商城后台来演示</h2>
            <a class="color2" href="http://mall.lilidong.cn/" target="_blank">猛戳进入</a>
        </section>
 
       
			</div>
		</div>
</template>

<script>


import reveal from 'reveal.js'
import socket from 'socket.io-client'

// let io = socket('http://172.17.21.1:3000')
let io = socket('http://192.168.0.175/:3000')
export default {
  name: 'app',
  components: {

  },
  data () {
    return {
      isAdmin: true,
      codeShow:false

    }
  },
  mounted () {
    this.io = io
    reveal.initialize({
    })
    reveal.slide(0, 2)
    let $scope = this
    if (location.search.indexOf('admin') > 0) {
      reveal.addEventListener('slidechanged', function (event) {
        $scope.io.emit('ppt_run', {
          indexh: event.indexh,
          indexv: event.indexv
        })
      })
    } else {
      $scope.io.on('ppt_status', (data) => {
        reveal.slide(data.indexh, data.indexv)
      })
    }

  },
  methods:{
     show () {
      this.codeShow = true
     },
     hide () {
      this.codeShow = false
     }
  }
}
</script>

<style lang="css" scope>


body{
  background: -webkit-radial-gradient(50% 16% circle, #219eb0 32%, #3f679d 88%) !important;;
  background: radial-gradient(circle at 50% 16%, #219eb0 32%, #3f679d 88%) !important;;
}
.clearfix {
    *zoom: 1;
}

.clearfix:after {
    clear: both;
    content: '';
    display: block;
    height: 0;
    visibility: hidden;
}
.fl{
  float: left;
}
.fr{
  float: right;
}

em,i,strong{
  font-style: normal !important;
}


.color1{
  color: #9E1E18
}
.color2{
  color: #FE4C40
}
.color3{
  color: #DE3163
}
.color4{
  color: #41b883
}

.color5{
  color: #C7FFEC
}
.color6{
  color: #9966CC
}

.color7{
  color: #00FF80
}
.color8{
  color: #008573
}

.color9{
  color: #483C32
}
.color10{
  color: #B87333
}
.reveal div.fon14{
  font-size: 0.8em;
}

.reveal div.fon16{
  font-size: 1.2em;
}

.icon-btn{
  display: inline-block;
  width: 64px;
  height: 64px;
  border-radius: 50%;
}

.icon-github{
  background: url(./assets/github.png) 0 0 no-repeat;
  background-size: cover;
  margin-right: 30px !important;

}
.icon-web{
  background:  url(./assets/website.png) 0 0 no-repeat;
  background-size: cover;
   margin-left: 30px !important;
}

.icon-codepen{
  background: url(./assets/codepen.png) 0 0 no-repeat;
  background-size: cover;

}







</style>
