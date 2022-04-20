<template>
    <div class="contArea">
      <Navbar :headline="'검색 - 키워드 검색으로 상품 10개를 조회할 수 있습니다.'"/>
      <!--<Navbar :headline="'쿠팡파트너스 입니다.'"/>-->

      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <div class="d-flex">
            <input class="form-control"
                   type="text" 
                   placeholder="키워드 !" 
                   maxlength="10"
                   v-model="keyword"
                   @keyup.enter="apply">
            <a class="btn btn-outline-success" 
                    @click="apply">Search</a>
          </div>
        </div>
      </nav>
    </div>

    <Loader v-if="loading"/>
    <div v-else>
        <div id="list-sm">
            <PrdtItem v-for="obj in objectList" 
                            :key="obj.productId"
                            :obj="obj">
            </PrdtItem>
        </div>
    </div>
    <Pagination v-if="pageCnt > 0" :method="'search'" :categoryId="keyword"/>
</template>

<script>
import {mapState} from 'vuex'
import Loader from "~/components/Loader";
import Pagination from "~/components/Pagination";
import PrdtItem from "~/components/PrdtItem";
import Navbar from "~/components/Navbar";

export default{
    components:{
        Loader
        , Pagination
        , PrdtItem
        , Navbar
    },  
    mounted(){
    },
    methods:{
        async apply(payload){
               console.log("payload: ", payload);
               console.log("this.keyword: ", this.keyword);
              if(this.keyword == undefined ) {
                alert("검색어는 2자 이상 입력해주세요");
                return ;
              }
              if(this.keyword.length < 2){
                alert("검색어는 2자 이상 입력해주세요");
                return;
              }
              
               this.$store.dispatch('coupang/apiCall', { //store -movies에서 actions를 실행하게 만든다.
                   method: "search"
                   , keyword: this.keyword
                   , pageNo: payload.pageNo
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
    }
}
</script>

<style lang="scss" scoped>
    
</style>