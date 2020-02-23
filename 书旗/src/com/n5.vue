<template>
  <div>
      <p style="font-size:24px;text-align:center;border-bottom:1px solid #ccc;line-height:.8rem"><a href="#/" style="color:green;position:absolute;left:10px;"><</a>精品书单</p>

      <div class="shudan" v-for="i in book_list">
            <div class="sleft">
                <p style="font-size: .25rem;line-height:.4rem;">{{i.title}}</p>
                <p style="font-size: .15rem;color:grey;line-height:.3rem">{{i.sdesc.slice(0,90)}}</p>
                <span style="display:inline-block;border:1px solid #ccc;color:grey;margin-top:.2rem;padding:.1rem;font-size:.2rem">{{i.tags}}</span>
                
            </div>
            <div class="sright">
              <img :src="i.items[0].cover" alt="">
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
      book_id: '',
      book_name:'',
      book_list:''
    }
  },
  created(){
      this.book_id = this.$route.params.cid;
        this.book_name=this.$route.params.name;
        console.log(this.book_id);
        this.$http.get('http://read.xiaoshuo1-sm.com/novel/i.php?do=is_pay_sdlist&page=1&size=10&shuqi_h5=&onlyCpBooks=1&_=1582380331537', {
            params: {
              do: "is_pay_sdlist",
              page: 1,
              size: 10,
              shuqi_h5: "",
              onlyCpBooks: 1,
              _: 1582380331537
            }
        }).then((data)=>{
            this.book_list=data.data.data;      
            console.log(data.data.data);
            
        })
  }
}
</script>

<style>
.shudan{
  min-height: 2rem;
  border-bottom: 1px solid #ccc;
  padding: .4rem .2rem .4rem .4rem;
}
.sleft{
  float: left;
  width: 70%;
  margin-right: 1rem;
}
.sright{
  float: left;
  width: 15%;
  margin-top: .14rem
}
.sright img{
    width: 1.4rem;
    height: 1.5rem;
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