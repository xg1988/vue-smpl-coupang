<template>
    <a @click="moveApp(obj.productUrl)" target="_blank" class="list-group-item list-group-item-action">
        <div class="row">
            <div class="col-4">
                <img :src="obj.productImage" class="card-img-top" alt="goldbox">
            </div>
            <div class="col-8">
                <div class="d-flex w-100 justify-content-between">
                <small>{{obj.productName}}</small>
                </div>
                <small id="rocket" v-if="obj.isRocket">로켓배송</small>&nbsp;&nbsp;
                <small id="freeshipping" v-if="obj.isFreeShipping">무료배송</small>&nbsp;&nbsp;
                <small>가격: {{obj.productPrice.toLocaleString('ko-KR')}} 원</small>   
            </div>
        </div>
    </a> 
</template>

<script>
export default {
    props:{
        obj:{
            type:Object,
            default:()=>({

            })
        }
    }
    ,
    methods:{
        moveApp(productUrl){
            if(confirm("쿠팡 앱으로 이동하시겠습니까?")){
                var open = window.open(productUrl);
            }
        }
    }
}
</script>

<style lang="scss" scoped>
#rocket{
    color: royalblue;
}
#freeshipping{
    color: rgb(255, 83, 83);
}
</style>