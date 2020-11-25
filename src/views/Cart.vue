<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1 class="text-danger">This is cart page</h1>
      </div>
    </div>

    <div class="row">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Qty</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row,index) in items" :key="index">
            <th scope="row">{{index}}</th>
            <td>
              {{row.name}}
              <img :src="row.photo" class="img-fluid" width="50">
            </td>
            <td>{{row.price}}</td>
            <td>
              <button class="btn btn-info"> + </button>
              {{row.qty}}
              <button class="btn btn-info"> - </button>
            </td>
            <td>{{row.qty*row.price}}</td>
          </tr>
          <tr>
            <td colspan="4">Total:</td>
            <td>{{total}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default{
    data(){
      return {
      
      }
    },
    methods:{
      
    },
    computed:{
      items(){
        this.$store.dispatch('setState')
        return this.$store.state.cart
      },
      total(){
        this.$store.dispatch('setState')
        return this.$store.state.cart.reduce((a, c) => (a + (c.price*c.qty)),0)
      }
    }
  }
</script>

<style type="text/css"></style>