<template>
    <div class="contArea">

      <Navbar :headline="'카테고리별 - 카테고리별 상품을 간편하게 조회할 수 있습니다.'"/>
      
      <select class="form-select" v-model="categoryId" @change="apply">
        <option value="">보기를 선택하세요</option>
        <option v-for="obj in categories" 
                                  :key="obj.id"
                                  :obj="obj"
        :value="obj.id" >{{obj.name}}</option>
      </select>

      <Loader v-if="loading"/>
      <div v-else>
          <div id="list-sm">
              <PrdtItem v-for="obj in objectList" 
                              :key="obj.productId"
                              :obj="obj">
              </PrdtItem>
          </div>
      </div>
      <Pagination v-if="pageCnt > 0" :method="'bestcategories'" :categoryId="categoryId"/>
    </div>

</template>
<script>
import {mapState} from 'vuex'
import Loader from "~/components/Loader";
import Pagination from "~/components/Pagination";
import PrdtItem from "~/components/PrdtItem";
import Navbar from "~/components/Navbar";

export default {
  components:{
      Loader
      , Pagination
      , PrdtItem
      , Navbar
  },  
  mounted(){
      this.$store.dispatch('coupang/resetData', { //store -movies에서 actions를 실행하게 만든다.
          
      });  
  },
  methods:{
      async apply(payload){
              console.log('this.categoryId:',this.categoryId);

              this.$store.dispatch('coupang/apiCall', { //store -movies에서 actions를 실행하게 만든다.
                  method: "bestcategories",
                  categoryId: this.categoryId,
                  pageNo: payload.pageNo
              });   
      }
  }
  ,
  computed:{ // 계산된 데이터를 저장함
      ...mapState('coupang', [
          'objectList'
          , 'pageCnt'
          , 'pageNo'
          , 'message'
          , 'loading'
      ])
  },
  data(){
    return{
      categories:[
      {
        id: 1001
        , name: "여성패션"
      },
      {
        id: 1002
        , name: "남성패션"
      },
      {
        id: 1010
        , name: "뷰티"
      }
      ,
      {
        id: 1011
        , name: "출산/유아동"
      }
      ,
      {
        id: 1012
        , name: "식품"
      }
      ,
      {
        id: 1016
        , name: "가전디지털"
      }
      ,
      {
        id: 1017
        , name: "스포츠/레저"
      }
      ,
      {
        id: 1018
        , name: "자동차용품"
      }
      ,
      {
        id: 1019
        , name: "도서/음반/DVD"
      }
      ,
      {
        id: 1020
        , name: "완구/취미"
      }
      ,
      {
        id: 1024
        , name: "헬스/건강식품"
      }
      ,
      {
        id: 1030
        , name: "유아동패션"
      }
    ]
    ,categoryId: ""
    }
  }
}
</script>
<style lang="scss" scoped>
    
</style>