<template>
    <div class="reveal">
			<div class="slides">
				<section>
          <div >NodeJS的全栈式开发</div><br/>
          <div class="fon14">作者: 李立冬 (共享平台部web前端工程师)</div> <br/> 
          <div>
            <a href="https://github.com/jackieli123723" target="_blank" title="github" class="icon-github icon-btn"></a>
            <a href="https://codepen.io/jackieli123723/" target="_blank" title="codepen" class="icon-codepen icon-btn"></a>
            <a href="http://lilidong.cn" title="web" target="_blank" class="icon-web icon-btn"></a>
          </div>
        </section>
        <section data-background="https://media.giphy.com/media/Bh3YfliwBZNwk/giphy.gif">
          <section>
          <div>全栈工程师</div>
          <div><img src="./assets/node.jpg" height="500" /></div>
          </section>
          <section style="text-align:left;padding:0 20px;line-height:1.5">
          <em class="color2">Node.js</em>是 <em class="color2">JavaScript</em> 后端开发语言。从诞生之初就备受关注，到如今说到最火的后端 Web 开发，Node 说自己是第二，没有人敢说他是第一。正是 Node 的兴起，还带动了前端 JS 的热度，<i class="color3">react.js</i> <i class="color4">vue.js</i> 这些前端 JS框架 也火借东风，烧的很旺，甚至连“全栈”这个词也成为互联网招聘的热搜关键字，从此，JavaScript 程序员不再是被局限于浏览器的前端开发者了
          </section>
        </section>

				<section>
   <!--  <section>{{ 'Vertical Slide 1' | date('...') }}</section> -->
			    <section>前后端都采用JavaScript的好处</section>
          <section>1.无需切换语言环境，JavaScript可以做到后端语言能做的绝大部分事情</section>
          <section>2.数据可以很好的实现跨前后端使用（使用json）</section>
          <section>3.一些业务(如模板渲染)不需要纠结在前端还是后端处理</section>
          <page-item></page-item>
        </section>

        <section>
            <hgroup>
            <img src="./assets/bg1.jpg"  height="300" />
             <h2 class="color5">node的全栈技术栈清单</h2>
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

        <section data-transition="fade">
          <h2>谢谢观赏</h2>
          <img src="https://media.giphy.com/media/2gGEWrIGVioP6/giphy.gif" class="dubblesize">
        </section>
 
       

			</div>
		</div>
</template>

<script>

import pageItem from './components/page-item'
import reveal from 'reveal.js'
import socket from 'socket.io-client'

// let io = socket('http://172.17.21.1:3000')
let io = socket('http://192.168.0.175/:3000')
export default {
  name: 'app',
  components: {
    pageItem
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
