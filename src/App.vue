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
        <section>
          <section>
          <div>全栈工程师</div>
          <div style="height:15em"><img src="./assets/node.jpg" /></div>
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
          4
        </section>

			</div>
		</div>
</template>

<script>

import pageItem from './components/page-item'
import reveal from 'reveal.js'
import socket from 'socket.io-client'

// let io = socket('http://172.17.21.1:3000')
let io = socket('http://192.168.1.108:3000')
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
