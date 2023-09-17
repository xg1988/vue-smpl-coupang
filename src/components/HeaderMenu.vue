<template>
<header>
  <nav class="navbar navbar-light" style="background-color: #e3f2fd;">
  <div class="container-fluid">
    <!--<a class="navbar-brand" href="/" style="font-weight: 800">쿠팡 간편조회</a>-->
    <Logo />
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li v-for="nav in navigations"
            :key="nav.name"
            class="nav-item"
            @click="navbarToggle()">
          <router-link class="nav-link active"
            :to="nav.href"
            active-class="active"
            :class="{active: isMatch(nav.href)}">
            {{nav.name}}</router-link>
        </li>
<!--
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/search">검색</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/category">카테고리별</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/goldbox">골드박스</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/about">About</a>
        </li>-->
      </ul>
    </div>

  </div>
</nav>
</header>
</template>

<script>
import {mapState} from "vuex"
import Logo from "~/components/Logo"

export default{
  components:{
    Logo
  }
  ,
  mounted(){

  }
  ,
  data(){
        return{
            navigations:[
                {
                    name:'검색'
                    ,href:"/coupang/search"
                },
                {
                    name:'카테고리별'
                    ,href:"/coupang/category"
                },
                {
                    name:'골드박스'
                    ,href:"/coupang/goldbox"
                },
                {
                    name:'About'
                    ,href:"/coupang/about"
                }
            ]

        }
    },
    methods:{
      isMatch(path){
            console.log("path: ",path);
            console.log("this.$route.fullPath:", this.$route.fullPath);
            if(!path){
                return false;
            }else{
                return path === this.$route.fullPath;
            }
        }
        ,navbarToggle(){
          document.querySelector('.navbar-toggler').click();
        }
    }
}
</script>

<style lang="scss" scoped>
  header{
    width: auto;
  }
</style>
