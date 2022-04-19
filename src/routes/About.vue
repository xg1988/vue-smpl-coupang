<template>
  <div class="contArea">

<nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <span class="navbar-text">
 		About 쿠팡간편조회 - 쿠팡 앱으로 들어가지 않아도 간편하게 조회 가능합니다.
    </span>
  </div>
</nav>
<center>
<div id="card" class="card text-dark bg-light mb-3 " style="max-width: 18rem;">
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


<style lang="scss" scoped>
  .contArea{

  }
</style>
