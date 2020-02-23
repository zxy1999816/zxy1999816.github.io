<template>
  <div>
      <p style="font-size:24px;text-align:center;border-bottom:1px solid #ccc;line-height:.8rem"><a href="#/" style="color:green;position:absolute;left:10px;"><</a>男频</p>

      <div class="jingpin nvsheng">
            <p class="jp">主推力荐</p>
            <div class="jpitem" v-for="i in book_list">
                <img :src="i.cover" alt="">
                <p class="jp1">{{i.title}}</p>
                <p class="jp2">{{i.author}}</p>
            </div>
        </div>
      <div class="nvlist">
          <div  v-for="i in book_list">
              <span>{{i.title}}</span>
              <p>{{i.desc}}</p>
              <i class="i1">连载</i>
              <i class="i2">{{i.category}}</i>
          </div>
          
      </div>
      <div class="huan">换一换  ○</div>




      <div class="footbtn">
        <button>下载书旗小说客户端</button>
          <p style="line-height: .6125rem;font-size: .275rem;margin:20px;">海量图书，更高品质阅读体验</p>
          <p style="line-height: .4125rem;  font-size: .175rem;color:grey;">©2016书旗网shuqi.com<br>
          粤ICP备13078413号-1<br>
          网络文化经营许可证：粤网文[2017]3018-499号<br>
          增值电信业务经营许可证：粤B2-20130742<br>
          广州阿里巴巴文学信息技术有限公司 版权所有<br>
          广州市天河区黄埔大道西平云路163号广电平云广场B塔13层自编03单元<br>
          0571-26883636</p>
      </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      book_id: '',
      book_name:'',
      book_list:'',
      book_list1:''
    }
  },
  created(){
    this.book_id = this.$route.params.cid;
        this.book_name=this.$route.params.name;
        console.log(this.book_id);
        this.$http.get('http://read.xiaoshuo1-sm.com/novel/i.php?do=is_caterank&p=1&page=1&words=&shuqi_h5=&onlyCpBooks=1&firstCate=%E7%8E%84%E5%B9%BB&sort=monthHot&_=1582377244025', {
            params: {
              do: "is_caterank",
              p: 1,
              page: 1,
              words: '',
              shuqi_h5: '',
              onlyCpBooks: 1,
              firstCate: "玄幻",
              sort: "monthHot",
              _: 1582377244025
            }
        }).then((data)=>{
            this.book_list=data.data.data.slice(0,4);
            // this.book_list1=data.data.data.slice(5,9);
            console.log(this.book_list);
            console.log(this.book_list1);
        })
  }
}
</script>

<style>
.nvsheng{
    margin-bottom: 0 !important;
    height: 4.5rem !important;
}

.jingpin{
     padding:.3125rem;
     height:4.25rem;
     overflow:hidden;
     margin-bottom:.4125rem;
}
.jp{
     line-height:.3125rem;
     font-size:.325rem;
     margin-bottom:.1875rem;
}
.jpitem{
     width:22%;
     height:4.2rem;
     float:left;
     margin-right:.2rem;
}
.jpitem img{
     width:100%;
     height:3.2rem;
}
.jp1{
    font-size: .18rem;
    line-height:.4rem;
}
.jp2{
    font-size: .16rem;
    color:grey;
}
.nvlist{
    padding:.3125rem;
}
.nvlist i{
    text-align: center;
    display: inline-block;
}
.nvlist .i1{
     position: absolute;
    top:.3125rem;
    right: 2.125rem;
    border: 1px solid blue;
    color: blue;
    width: .875rem;
    font-size: 0.17rem
}
.nvlist .i2{
    position: absolute;
    top:.3125rem;
    right: .125rem;
    border: 1px solid grey;
    color: grey;
    width: 1.875rem;
    font-size: 0.17rem;
}
.nvlist div{    
    border-top: #ccc 1px solid;
    margin-bottom: .1875rem;
    padding: .18rem 0;
    position: relative;
}
.nvlist span{
    font-size: .28rem;
    font-weight: normal;
    line-height: .55rem
}
.nvlist p{
    max-width: 8.9rem;
    font-size: .2rem;
    overflow: hidden;
    color: grey;
    text-indent: 1em;
    white-space:nowrap;
    text-overflow : ellipsis;
}
.huan{
     line-height:1.25rem;
     border-top: 1px solid #ccc;
     border-bottom: .125rem solid #ccc;
     text-align:center;
     font-size:.3rem;
}


.footbtn{
  padding: .2125rem;
  background-color: #ccc;
  text-align: center;
}
.footbtn button{
  width: 80%;
  border-radius: .125rem;
  line-height: .6125rem;
  font-size: .275rem;
  color: #fff;
  background-color: #00c98d;
  outline: none;
  border: none;
}
</style>