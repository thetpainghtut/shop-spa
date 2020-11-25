<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1 class="text-danger">This is an item page</h1>
      </div>
    </div>
    
    <div class="row">
      <div class="col-md-3 my-4" v-for="(row,index) in items" :key="index">
        <SingleItem :row="row"></SingleItem>
      </div>
    </div>
    
  </div>
</template>
<script type="text/javascript">
  import Service from '@/service/Service.js'
  import SingleItem from '@/components/SingleItem.vue'
  export default{
    components:{
      SingleItem
    },
    data(){
      return {
        items: []
      }
    },
    created(){
      Service.getItems()
          .then(response => this.items = response.data.items)
    }
  }
</script>
<style type="text/css"></style>