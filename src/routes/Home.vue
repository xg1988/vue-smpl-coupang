<template>
  <div class="contArea">
<button type="button" class="btn btn-primary" @click="addFavorite">즐겨찾기 추가</button>
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

<script>
export default {
  methods:{
    addFavorite() {
        var bookmarkURL = window.location.href; 

		var bookmarkTitle = document.title;

		var triggerDefault = false; 

			

		if (window.sidebar && window.sidebar.addPanel) { 

			// Firefox version < 23 

			window.sidebar.addPanel(bookmarkTitle, bookmarkURL, ''); 

		} else if ((window.sidebar && (navigator.userAgent.toLowerCase().indexOf('firefox') > -1)) || (window.opera && window.print)) { 

			// Firefox version >= 23 and Opera Hotlist 

			var $this = $(this); 

			$this.attr('href', bookmarkURL); 

			$this.attr('title', bookmarkTitle); 

			$this.attr('rel', 'sidebar'); 

			$this.off(e); 

			triggerDefault = true; 

		} else if (window.external && ('AddFavorite' in window.external)) { 

			// IE Favorite 

			window.external.AddFavorite(bookmarkURL, bookmarkTitle); 

		} else { 

			// WebKit - Safari/Chrome 

			alert((navigator.userAgent.toLowerCase().indexOf('mac') != -1 ? 'Cmd' : 'Ctrl') + '+D 키를 눌러 즐겨찾기에 등록하실 수 있습니다.'); 

		} 

		

		return triggerDefault; 
    }
  }
}
</script>

<style lang="scss" scoped>
  .contArea{

  }
</style>
