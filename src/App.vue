<template>
  <HeaderMenu />
  <RouterView />
</template>

<script>
import HeaderMenu from '~/components/HeaderMenu'
import * as bootstrap from 'bootstrap';


export default {
  
  components: {
    HeaderMenu
  }
}
</script>

<style lang="scss">
  div{
    font-family: 'Jua', sans-serif;
  }

  .contArea{
		margin: 10px;
	}
	#list a{
		--margin-bottom: 10px;
	}
	
	#list_sm{
		margin: 10px;
        a{
            height: 100px;
        }
        img{
            height: 60%;
        }
	}
</style>