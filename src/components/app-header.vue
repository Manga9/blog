<template>
    <header>
        <slot></slot>
    </header>
</template>

<style lang="scss" scoped>

header {
    height: 250px;
    background-image: url('../assets/header-bg.jpg');
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    background-size: cover;
    &::before{
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      opacity: 0.95;
      background: #330033;
      background: -moz-linear-gradient(-45deg, #330033 0%, #333366 100%);
      background: -webkit-linear-gradient(-45deg, #330033 0%,#333366 100%);
      background: linear-gradient(135deg, #330033 0%,#333366 100%);
      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#330033', endColorstr='#333366',GradientType=1 );
    }
    h1 {
        margin: 0;
        padding: 0;
        position: relative;
        color: #fff;
        font-size: 60px;
        font-weight: 300;
    }
    .back-button{
        color: #fff;
        text-decoration: none;
        position: absolute;
        top: 20px;
        left: 20px;
        background-color: rgba(255,255,255,0.1);
        border-radius: 5px;
        padding: 7px 15px;
        line-height: 1;
        &:hover{
        background-color: rgba(255,255,255,0.2);
        }
    }
}


</style>

<script>
export default {
    
}
</script>

