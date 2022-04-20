<template>
    <footer>
        <Logo/>
        <a href="https://github.com/xg1988" target="_blank">
        양조장 스튜디오
        (c){{new Date().getFullYear()}} Chosu</a>
    </footer>    
</template>

<script>
import Logo from '~/components/Logo'

export default {
    components:{
        Logo
    }
}
</script>

<style lang="scss" scoped>
    footer{
        padding: 70px;
        text-align: center;
        opacity: .8;
        .logo{
            display: block;
            margin-bottom:4px;
        }
    }
</style>