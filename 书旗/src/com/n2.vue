<template>
  <div>
      <p style="font-size:24px;text-align:center;border-bottom:1px solid #ccc;line-height:.8rem"><a href="#/" style="color:green;position:absolute;left:10px;"><</a>排行</p>
      <div style="border-bottom:10px solid #ccc;height:100px;width:100%" v-for="i in aa">
        <div class="pimg"><img src="" alt=""></div>
        <div class="ptxt">
          <p style="line-height:30px;font-size:16px;margin-top:20px">{{i.content.title}}</p>
          <p>{{i.content.desc}}</p>
        </div>
      </div>
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
      book_list:'',
      aa:''
    }
  },
   created(){
      this.book_id = this.$route.params.cid;
        this.book_name=this.$route.params.name;
        // console.log(this.book_id);
        this.$http.get('http://bookstoreapi.shuqireader.com/eva_bookstore/v1/stencil/query?appId=1&pageId=4&channelId=&versionId=&ver=&shuqi_h5=&md5key=&userId=8000000&timestamp=1582383528&type=2&resetcache=&sign=243EFFB52748658573148051431B8F56&key=shuqiapi&_=1582383528176', {
            params: {
              appId: 1,
              pageId: 4,
              userId: 8000000,
              timestamp: 1582383528,
              type: 2,
              sign: "243EFFB52748658573148051431B8F56",
              key: "shuqiapi",
              _: 1582383528176
            }
        }).then((data)=>{
            this.book_list=data.data.data.module;             
            console.log(data.data);
            var a=[];
            for(let i=0;i<this.book_list.length;i++){
                if(i%2==0) {
                  a.push(this.book_list[i])
                }
              }
            console.log(a);
            this.aa =a;
            
        })
  }
}
</script>

<style>
.pimg{
  float: left;
  height: .73rem;
  width: .72rem;
  margin-right: .2rem;
}
.ptxt{
  float: left;
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