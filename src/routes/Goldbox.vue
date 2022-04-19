<template>
    <div class="contArea">

<nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <span class="navbar-text">
 골드박스 -	상품 선택시 쿠팡으로 이동합니다.
    </span>
  </div>
</nav>

<Loader v-if="loading"/>

<div v-else>
<div id="list_sm" class="list-group">
  <div v-for="obj in objectList" 
                :key="obj.productId"
                :movie="obj">
  <a :href="obj.productUrl" class="list-group-item list-group-item-action">
  <div class="row">
  	<div class="col-4">
  	<img :src="obj.productImage" class="card-img-top" alt="goldbox">
  </div>
  <div class="col-8">
  <div class="d-flex w-100 justify-content-between">
      
      <small>{{obj.productName}}</small>
    </div>
    
    <small v-if="obj.isRocket">로켓배송</small>
    <small v-if="obj.isFreeShipping">무료배송</small>
    <small>가격: {{obj.productPrice}}</small>
    
  </div>
  </div>
  </a>
  </div>
</div>
<nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
            
            <li v-for="(n,index) in pageCnt" :key="index" class="page-item" v-bind:class="{active: getActive(index+1)}">
                <a class="page-link" @click="apply({pageNo: index+1})">{{index+1}}</a>
                <!--<router-link :to="`/coupang/goldbox?pageNo=${index+1}`" class="page-link">{{index+1}}</router-link>-->
            </li>
        </ul>
        </nav></div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import Loader from "~/components/Loader";

export default{
    components:{
        Loader
    },  
    mounted(){
        
        this.apply({
            pageNo: this.$route.query.pageNo
        });
    },
    methods:{
        async apply(payload){
               this.$store.dispatch('coupang/apiCall', { //store -movies에서 actions를 실행하게 만든다.
                   method: "goldbox",
                   pageNo: payload.pageNo
               });   
        },
        getActive(index){
            return (this.pageNo==index);
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
    },props:{
        movie:{
            type:Object,
            default:()=>({

            })
        }
    }
}
</script>

<style lang="scss" scoped>
    
</style>