<template>
    <nav aria-label="Page navigation">
        <ul class="pagination justify-content-center">
            
            <li v-for="(n,index) in pageCnt" :key="index" class="page-item" v-bind:class="{active: getActive(index+1)}">
                <a class="page-link" @click="apply({method:`${method}`,keyword:`${keyword}`, categoryId:`${categoryId}` ,pageNo: index+1})">{{index+1}}</a>
            </li>
        </ul>
        </nav>
</template>

<script>
import {mapState} from 'vuex'
export default{
    props:{
        method:{
            type:Text,
            default:'goldbox'
        },
        keyword:{
            type:Text,
            default: ''
        },
        categoryId:{
            type:Number,
            default: 1001
        }
    },
    methods:{
        async apply(payload){
               console.log("apply payload: ", payload);
               this.$store.dispatch('coupang/apiCall', { //store -movies에서 actions를 실행하게 만든다.
                   method: payload.method,
                   categoryId: payload.categoryId,
                   keyword: payload.keyword,
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
            'pageCnt'
            , 'pageNo'
        ])
    }
}
</script>

<style lang="scss" scoped>

</style>