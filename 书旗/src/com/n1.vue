<template>
  <div>
      <div>
        <p style="font-size:24px;text-align:center;border-bottom:1px solid #ccc;line-height:.8rem"><a href="#/" style="color:green;position:absolute;left:10px;"><</a>分类</p>
          <div v-for="(i,index) in sort_arr" class="sort">
              <h2 v-if="index=='girl'">女生分类</h2>
              <h2 v-if="index=='boy'">男生分类</h2>
              <div v-for="j in i">
                  <div class="simg"><img src="" alt=""></div>
                  <div class="stxt" v-for="(k,$key,index) in j">
                      <h3 style="line-height:30px;">
                          <a :href="'#/no2/'+$key+'/'+k.cid+'/'+k.relatedName"
                              style="color: black;">{{k.relatedName}}</a>
                      </h3>
                      <div v-for="(h,index) in k.list">

                          <div style="float: left;">
                              <a :href="'#/no2/'+$key+'/'+k.cid+'/'+k.relatedName"
                                  style="color: rgb(151, 143, 143);">{{h}}</a>
                              {{index==k.list.length-1?'':'|'}}
                          </div>
                      </div><br>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      sort_arr: ''
    }
  },
   created() {
      this.$http.post('http://walden1.shuqireader.com/webapi/rank/classrelation?_=1571626185772', {
          type: 1,
          timestamp: 1571626185772,
          sign: '543106d838a427da88cd1224c5832a82',
          shuqi_h5: ''
      }, {
          emulateJSON: true
      }).then((data) => {
          console.log(data.data.data.girl[0]);
          this.sort_arr = data.data.data;
      })
  }
}
</script>

<style>
.sort h2{
  font-size: .1125rem;
  font-weight: normal;
  color: grey;
  background-color: rgb(228, 226, 226);
  line-height: .525rem;
  text-indent: 2em;
}
.sort h3{
  font-size: .2125rem;
  font-weight: normal;
  color: grey
}
.simg{
    height: .73rem;
    width: .72rem;
    margin-right: .2rem;
}
.stxt{
  /* float: right; */
}
</style>