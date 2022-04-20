<template>
    <div class="contArea">

        <Navbar :headline="'골드박스 -	상품 선택시 쿠팡으로 이동합니다.'"/>

        <Loader v-if="loading"/>
        <div v-else>
            <div id="list-sm">
                <PrdtItem v-for="obj in objectList" 
                                :key="obj.productId"
                                :obj="obj">
                </PrdtItem>
            </div>
        </div>

        <Pagination :method="'goldbox'"/>
        </div>
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