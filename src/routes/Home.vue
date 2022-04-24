<template>
  <div class="contArea">

<nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <span class="navbar-text">
 		About 쿠팡간편조회 - 쿠팡 앱으로 들어가지 않아도 간편하게 조회 가능합니다.
    </span>
  </div>
</nav>

<div class="swiper-area">

<swiper
    :pagination="{
      dynamicBullets: true,
    }"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide>

      <a href="https://link.coupang.com/a/mns3P">
        <img src="https://img1a.coupangcdn.com/image/affiliate/event/promotion/2022/04/19/2097f7cdadf800c701ae89d6fb16edee.png" 
          alt="이벤트1">
      </a>
    </swiper-slide>
    <swiper-slide>

      <a href="https://link.coupang.com/a/mntcn">
        <img src="https://img5a.coupangcdn.com/image/affiliate/event/promotion/2022/04/22/bc3dc8cda5bd00d801f194f6f4a45341.png" 
          alt="이벤트2">
      </a>
    </swiper-slide>
    <swiper-slide>

      <a href="https://link.coupang.com/a/mntjF">
        <img src="https://image15.coupangcdn.com/image/affiliate/event/promotion/2022/03/17/b940f5e81570000801a78a5f99866e4f.png" 
          alt="이벤트3">
      </a>
    </swiper-slide>
  </swiper>

</div>

<center>

<div id="card" class="card text-dark bg-light mb-3 " style="max-width: 18rem; margin-top:20px;">
  <div class="card-header">쿠팡 간편조회 기능1 검색</div>
  <div class="card-body">
    <h5 class="card-title">검색</h5>
    <p class="card-text">키워드 검색으로 상품 10개를 조회할 수 있습니다.</p>
    <router-link class="nav-link active" 
            :to="'/search'">
    <button type="button" class="btn btn-primary">바로가기</button>
    </router-link>
  </div>
</div>

<div id="card" class="card text-dark bg-light mb-3 " style="max-width: 18rem;">
  <div class="card-header">쿠팡 간편조회 기능2 카테고리별</div>
  <div class="card-body">
    <h5 class="card-title">카테고리별</h5>
    <p class="card-text">카테고리별 상품을 간편하게 조회할 수 있습니다.</p>
    <router-link class="nav-link active" 
            :to="'/category'">
    <button type="button" class="btn btn-primary">바로가기</button>
    </router-link>
  </div>
</div>

<div id="card" class="card text-dark bg-light mb-3 " style="max-width: 18rem;">
  <div class="card-header">쿠팡 간편조회 기능3 골드박스</div>
  <div class="card-body">
    <h5 class="card-title">골드박스</h5>
    <p class="card-text">매일 아침 7시 30분 업데이트 되는 골드박스 상품을 조회합니다.</p>
    <router-link class="nav-link active" 
            :to="'/goldbox'">
    <button type="button" class="btn btn-primary">바로가기</button>
    </router-link>
  </div>
</div>
</center>


</div>

</template>

<script>
 // Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";


export default {
    components: {
      Swiper,
      SwiperSlide ,
    },
    setup() {
    return {
      modules: [Pagination],
    };
  },
  };

</script>

<style lang="scss" scoped>

.swiper-area{
  height: 450px;
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}


</style>
