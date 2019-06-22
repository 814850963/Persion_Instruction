<template>
  <div class="center_box wow slideInUp">
    <div class="box_top">
      <ul>
        <li :class="true==l1?'backgroundgreen':'backgroundclear'" @click="handle(1)">
          <div>
            <img src="/static/img/wine.png">
          </div>profile
        </li>
        <li :class="true==l2?'backgroundgreen':'backgroundclear'" @click="handle(2)">
          <div>
            <img src="/static/img/student.png">
          </div>ability
        </li>
        <li :class="true==l3?'backgroundgreen':'backgroundclear'" @click="handle(3)">
          <div>
            <img src="/static/img/bag.png">
          </div>education
        </li>
        <li :class="true==l4?'backgroundgreen':'backgroundclear'" @click="handle(4)">
          <div>
            <img src="/static/img/heart.png">
          </div>ほしいもの
        </li>
      </ul>
    </div>
    <div class="box_center">
      <transition-group name="tr">
        <div class="center_text" :key="1" v-show="l1">
          <div :class="animate" v-show="chinese">
            <div class="user_pic">
              <img src="/static/img/my.png">
              <div class="name">尹鸿韬</div>
              <p>
                大家好，我叫
                <span class="strength">尹鸿韬</span>我来自美丽的海滨城市
                <span class="strength">大连</span>我是一名在读的大三学生，学习的专业是<span class="strength">计算机科学与技术</span>,因为家里的原因我从小就开始接触日本并且了解日本文化,假期的时候我也随父母去过几次日本，通过许多次的接触以及观察，我发现我越来越喜欢日本了。在上大学的时候我也经常在想:“如果我将来能去日本工作该会有多好！”。如今非常感谢<span class="strength">富士通</span>给了我这次能够去日本实习这宝贵的机会！我会尽我所能出色的完成交给我的任务！
              </p>
            </div>
          </div>
          <div :class="animate" v-show="japanese">
            <div class="user_pic">
              <img src="/static/img/my.png">
              <div class="name">インコウトウ</div>
              <p>
                こんにちは、私は<span class="strength">尹鸿韬</span>と申します。美しい海浜都市の<span class="strength">大連</span>から来ました。私は在学中の3年生で、専門は<span class="strength">コンピュータ科学技術</span>です。家族の原因から、私が小さい時から日本に接触して日本の文化を理解しています。休暇の間、私も両親と何度も日本に行ったことがあります。何度も接触と観察のうちに、私はますます日本が好きになったことを発見しました。大学に入ったときも、もし将来は日本に行って仕事ができればいいと思っていました。このたび、日本へ実習に行ける貴重な機会をくれた<span class="strength">富士通</span>に、本当に感謝しています！私はぜったいにできる限り任務を立派に完成します！                
              </p>
            </div>
          </div>
          <div :class="animate" v-show="english">
            <div class="user_pic">
              <img src="/static/img/my.png">
              <div class="name">sean</div>
              <p>
                Hello everyone my name is
                <span class="strength">sean</span> come from a beautiful coastal city
                <span class="strength">'DaLian'</span> I am a junior student. Major is <span class="strength">CS(computer and science)</span> Because of my family, I have been in contact with Japan since I was a child and learned about Japanese culture. And I also went to Japan with my parents several times during the holidays. Durning these reasons I find I like japan more and more。When I am studing in the campus I always think that:"It is so good for me if I have the chance to work in Japan"。For now I am very grateful to <span class="strength">Fujitsu</span> for giving me the chance. I will go above and beyond in the job!
              </p>
            </div>
          </div>
          <div class="text_foot">
            <ul>
              <li @click="choosel(1)">中文</li>
              <li @click="choosel(2)">日本語</li>
              <li @click="choosel(3)">English</li>
            </ul>
          </div>
        </div>
        <div class="center_text" :key="2" v-show="l2">
          <div
            class="wow animated fadeIn"
            id="chart1"
            style="width: 80%; margin-left:10%; padding-bottom:10px; height: 400px;top: 50px;left: 6%;"
          ></div>
          <div class="ability_intro">
              <ul>
                <li @click="open1">適応力</li>
                <li @click="open2">ストレス</li>
                <li @click="open3">勉強努力</li>
                <li @click="open4">向上心</li>
                <li @click="open5">交流</li>
              </ul>
          </div>
        </div>
        <div class="center_text" :key="3" v-show="l3">
            <div
              class="wow animated fadeIn"
              id="main"
              style="width: 80%; margin-left:10%; padding-bottom:10px; height: 500px;top: 50px;left: 6%;"
            ></div>
            <br><br>
            <div class="eductionIntro">
                <div class="item">
                    <div class="item_img"><img src="/static/img/Java.jpg"></div>
                    <div class="item_text">
                      <h3>JAVA(やりたい)</h3>
                      <p>Javaの基礎がある，今はSpring BootとSprigMVCの技術を勉強しています。</p>
                    </div>
                </div>
                <div class="item">
                    <div class="item_img"><img src="/static/img/Html.jpg"></div>
                    <div class="item_text">
                      <h3>HTML</h3>
                      <p>HTML、CSS、JS、Jquery、BootStrap、VUE-CLIなどの技術を熟練に身につけています。</p>
                    </div>
                </div>
                <div class="item">
                    <div class="item_img"><img src="/static/img/PHP.jpg"></div>
                    <div class="item_text">
                      <h3>PHP</h3>
                      <p>Webサイトのバックエンド作りました，ThinkPHPバックエンドフレームワークを使う</p>
                    </div>
                </div>
                <div class="item">
                    <div class="item_img"><img src="/static/img/Python.jpg"></div>
                    <div class="item_text">
                      <h3>Python(やりたい)</h3>
                      <p>Webサイトのバックエンド作りました，Djangoバックエンドフレームワークを使う，網路爬蟲を理解</p>
                    </div>
                </div>
                <div class="item">
                    <div class="item_img"><img src="/static/img/C.jpg"></div>
                    <div class="item_text">
                      <h3>C</h3>
                      <p>マスターしますが、でも学校の間は使わなかった。</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="center_text" :key="4" v-show="l4">
          <template >
            <el-carousel  :interval="5000" type="card" style="margin-top:50px;" height="300px">
              <el-carousel-item @mouseenter.native ="showname(index)" @mouseout.native="hidename(index)" v-for="(item,index) in piclist"  :key="index">
                <img  :src="item.action"><h3 :class="now==index?'h3_display':''">{{item.name}}</h3>
              </el-carousel-item>
            </el-carousel>
          </template>
        </div>
      </transition-group>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      l1: true,
      l2: false,
      l3: false,
      l4: false,
      chinese: true,
      japanese: false,
      english: false,
      animate: "",
      now:'',
      piclist:[{'name':'友達を作る','action':'/static/img/friend.jpg'},{'name':'新しいことを学ぶ','action':'/static/img/study.jpg'},{'name':'自分を向上させる','action':'/static/img/improve.jpg'},{'name':'文化を体験する','action':'/static/img/sakura.jpg'},{'name':'テイスティング','action':'/static/img/food.jpg'}]
    };
  },
  methods: {
    handle(index) {
      this.l1 = false;
      this.l2 = false;
      this.l3 = false;
      this.l4 = false;
      if (1 == index) {
        this.l1 = true;
      } else if (2 == index) this.l2 = true;
      else if (3 == index) this.l3 = true;
      else this.l4 = true;
    },
    choosel(index) {
      this.chinese = false;
      this.japanese = false;
      this.english = false;
      if (1 == index) this.chinese = true;
      else if (2 == index) this.japanese = true;
      else this.english = true;
      this.animate = "";
      setTimeout(() => {
        this.animate = "wow animated bounce";
      }, 200);
    },
    open1() {
        var a = this.$createElement;
        this.$notify({
          title: '適応力',
          message: a('i', { style: 'color: teal'}, '新しい環境に素早く適応でき、チャレンジするのが好きです')
        });
      },
      open2() {
        var b = this.$createElement;
        this.$notify({
          title: 'ストレス',
          message: b('i', { style: 'color: teal'}, '私はストレスに強く、耐えることができます')
        });
      },
      open3() {
        var c = this.$createElement;
        this.$notify({
          title: '勉強努力',
          message: c('i', { style: 'color: teal'}, '私は新しいことを学ぶことが好きで、新しいものを身につけることが好きです')
        });
      },
      open4() {
        var d = this.$createElement;
        this.$notify({
          title: '向上心',
          message: d('i', { style: 'color: teal'}, '私には负けない精神があり、向上心がある')
        });
      },
      open5() {
        var h = this.$createElement;
        this.$notify({
          title: '交流',
          message: h('i', { style: 'color: teal'}, '人とコミュニケーションするのは一つの学问で、私はずっと勉强しています')
        });
      },
      showname(index){
          this.now = index;
      },
      hidename(index){           
          this.now = -1;
      }
  },
  watch: {},
  mounted() {
    var chart1 = document.getElementById("chart1");
    chart1.style.width = window.innerWidth / 2  + "px";
    chart1 = this.$echarts.init(chart1);
    var option = {
      title: {
        left:'center',
        text: "個人能力分析",
        textStyle:{//标题内容的样式
					color:'#fff',//京东红
					fontStyle:'normal',//主标题文字字体风格，默认normal，有italic(斜体),oblique(斜体)
					fontWeight:"bold",//可选normal(正常)，bold(加粗)，bolder(加粗)，lighter(变细)，100|200|300|400|500...
					fontFamily:"Helvetica Neue",//主题文字字体，默认微软雅黑
					fontSize:24//主题文字字体大小，默认为18px
        },         
      },
      tooltip: {
        trigger: "axis"
      },
      toolbox: {
        show: false,
        feature: {
          mark: { show: true },
          dataView: { show: true, readOnly: false },
          restore: { show: true },
          saveAslmage: { show: true }
        }
      },
      calculable: true,
      polar: [
        {
          indicator: [
            { text: "適応力", max: 100 },
            { text: "ストレス", max: 100 },
            { text: "勉強努力", max: 100 },            
            { text: "向上心", max: 100 },
            { text: "交流", max: 100 }
          ],
          radius: 130
        }
      ],
      series: [
        {
          name: "综合数据",
          type: "radar",
          itemStyle: {
            normal: {
              areaStyle: {
                type: "default"
              }
            }
          },
          data: [
            {
              value: [80, 85, 90, 100, 86],
              name: "尹鸿韬"
            },
          ]
        }
      ]
    };
    chart1.setOption(option);
    var myChart = document.getElementById("main");
    myChart.style.width = window.innerWidth / 2 - 20 + "px";
    myChart = this.$echarts.init(myChart);
    option = {
    title: {
        text: '言語',
        subtext: '',
        left: 'center',     
        textStyle:{//标题内容的样式
					color:'#fff',//京东红
					fontStyle:'normal',//主标题文字字体风格，默认normal，有italic(斜体),oblique(斜体)
					fontWeight:"bold",//可选normal(正常)，bold(加粗)，bolder(加粗)，lighter(变细)，100|200|300|400|500...
					fontFamily:"Helvetica Neue",//主题文字字体，默认微软雅黑
					fontSize:'35'//主题文字字体大小，默认为18px
        }, 
          
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        // orient: 'vertical',
        // top: 'middle',
        bottom: 10,
        left: 'center',
        data: ['Java', 'PHP','Python','HTML','C'],
        textStyle:{//图例文字的样式
            color:'#fff',
            fontSize:16
        }
    },
    series : [
        {
            type: 'pie',
            radius : '65%',
            center: ['50%', '50%'],
            selectedMode: 'single',
            data:[
                {
                    value:80,
                    name: 'Java',
                    
                },
                {value:80, name: 'PHP',
                itemStyle:{
                    color: '#fef40b'
                  }
                },
                {value:40, name: 'Python',
                  itemStyle:{
                    color: '#74c246'
                  }
                },
                {value:90, name: 'HTML',
                  itemStyle:{
                    color: '#1aaeac'
                  }
                },
                {value:30, name: 'C',
                  itemStyle:{
                    color: '#f38027'
                  }
                }
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};

                // 为echarts对象加载数据 
                myChart.setOption(option); 
  }
};
</script>


<style scoped>
.center_box {
  width: 80%;
  height: auto;
  margin: 0 auto;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 10px;
}
ul {
  list-style: none;
  color: rgba(255, 255, 255, 0.5);
  font-size: 1rem;
}
li div {
  margin: 0 auto;
  margin-bottom: 0;
}
ul li {
  display: inline-block;
  padding-top: 0.6rem;
  width: 18%;
}
li img {
  width: 15%;
  height: auto;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter  /* .fade-leave-active below version 2.1.8 */ {
  opacity: 1;
  color: aquamarine;
}
.fade-leave-to {
  opacity: 0;
}
.backgroundgreen {
  transition: all 1s;
  background: #23daa0bb;
  color: white;
}
.backgroundclear {
  transition: all 1s;
  background: none;
  color: rgba(255, 255, 255, 0.5);
}
.box_center {
  width: 100%;
  height: auto;
}
.center_text {
  width: 90%;
  margin-left: 5%;
  height: auto;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.8rem;
  text-align: center;
}
.center_text .user_pic {
  width: 100%;
  height: auto;
}
.center_text .user_pic img {
  height: auto;
  width: 30%;
  margin-bottom: -50px;
}
.center_text .name {
  width: 100%;
  height: auto;
  text-align: center;
  font-size: 1.4rem;
  font-family: "Source Sans Pro", Arial, sans-serif;
  font-weight: bold;
  color: white;
  margin-bottom: 10px;
}
.center_text p {
  width: 80%;
  margin-left: 10%;
  font-size: 0.7rem;
}
.strength {
  color: aquamarine;
}
.center_text .text_foot {
  width: 100%;
  height: auto;
  margin-top: 10px;
  padding-bottom: 10px;
}
.center_text .text_foot ul {
  width: 100%;
  height: auto;
  display: inline-block;
}
.center_text .text_foot li {
  width: 30%;
  font-size: 0.6rem;
  color: antiquewhite;
}
.center_text .text_foot li:hover {
  color: aqua;
}
#main > div {
  width: 500px !important;
  height: 300px;
}
.ability_intro{
  width: 100%;
  height: auto;
}
.ability_intro li{
  color: white;  
  position: relative;
}
.ability_intro li:hover{
  color: aquamarine;
}
.eductionIntro{
  width: 100%;
  height: auto;
}
.eductionIntro .item{
  width: 100%;
  height: auto;
  display: flex;
  margin-bottom: 1rem;
}
.eductionIntro .item .item_img{
  width: 10%;
  margin-left: 12%;
  margin-right: 5%;
  height: 100px;
}
.eductionIntro .item img{
  width: 100%;
  margin-left: 12%;
  margin-right: 5%;
  height: 80px;
}
.eductionIntro .item .item_text{
  width: 70%;
  height: auto;
  text-align: left;
}
.eductionIntro .item .item_text h3{
  color: #fff;
}
.eductionIntro .item .item_text p{
  width: 100%;
  margin-left: 0;
}
.el-carousel__item img {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;  
  width:100%;
  height: 300px;
  margin: 0;
  opacity: 1;
}
.el-carousel__item h3{
  line-height: 300px;
  width: 100%;  
  background: #FFF;
  opacity: 0.6;
  color: black;
  font-size: 40px;
  font-weight: bold;
  top: 0;
  left: 0;
  transition: all 1s;
  position: absolute;  
} 
.h3_display{
  opacity: 0 !important;
  transition: all 1s !important;
}
/* .coverage{
  width: 100%;
  background: #FFF;
  opacity: .74;
  height: 100%;
  z-index: 1;
  top: 0;
  left: 0;
  position: absolute;  
} */
.el-carousel{
  height: 400px;;
}
.el-carousel__item{
  height: 300px;
}
</style>

