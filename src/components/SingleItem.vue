<template>
  <div class="card">
    <img :src="row.photo" class="card-img-top">
    <div class="card-body">
      <h5 class="card-title">{{row.name}}</h5>
      <p class="card-text">{{row.detail}}</p>
      <router-link :to="{name: 'ItemDetail', params: { id: row.id }}" class="btn btn-success mr-2">
        Detail
      </router-link>
      <b-button variant="info" @click="AddToCart"><b-icon-cart-plus-fill></b-icon-cart-plus-fill> Add to Cart</b-button>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default{
    props:{
      row: Object
    },
    methods:{
      AddToCart(){
        console.log(this.row)

        let cartitem = {
          id: this.row.id,
          name: this.row.name,
          photo: this.row.photo,
          price: this.row.price,
          qty: 1
        }
        this.$store.dispatch('addToCart', cartitem)
      }
    }
  }
</script>

<style type="text/css">
  
</style>