<template>
  <div class="home container">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>

    <button class="mybtn">Hello</button>
    <p>Hide Show</p>
  </div>
</template>

<script> 
  import jQuery from 'jquery';
  let $ = jQuery;
  $('.mybutton').click(function () {
    // body...
    alert('clicked')
    // $('p').toggle()
  })
  
</script>
<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}

</script>

<style type="text/css">
  .home{
    text-align: center;
  }
</style>
