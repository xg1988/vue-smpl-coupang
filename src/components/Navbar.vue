<template>
    
        <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
            <span class="navbar-text">
                {{headline}}
            </span>
            <span class="navbar-text">
                쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.
            </span>
            
        </div>
        </nav>
</template>

<script>
export default {
    props:{
        headline:{
            type:Text,
            default:'Text'
        }
    }
}
</script>

<style lang="scss" scoped>

</style>