<template>
  <div class="container">
    <div class="row my-4">
      <div class="col-12">
        <h1 class="text-danger text-center">Cart Page</h1>
      </div>
    </div>
    <!-- {{items}} -->
    <section v-if="orderStatus">
      <h1 class="text-success text-center">Your Order Successful!</h1>
    </section>
    <section v-else>
      <div class="row">
        <div class="col-md-12">
          <table class="table table-bordered">
            <thead class="thead-dark">
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
                <th scope="row">{{++index}}</th>
                <td>
                  {{row.name}}
                  <img :src="row.photo" class="img-fluid" width="50">
                </td>
                <td>{{row.price.toLocaleString()}}</td>
                <td>
                  <button class="btn btn-info" @click="plusCart(index-1)"> + </button>
                  {{row.qty}}
                  <button class="btn btn-info" @click="minusCart(index-1)"> - </button>
                </td>
                <td>{{(row.qty*row.price).toLocaleString()}}</td>
              </tr>
              <tr>
                <td colspan="4">Total:</td>
                <td>{{total.toLocaleString()}} Ks</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="form-group">
            <textarea class="form-control" placeholder="Please Note Here..." v-model="notes"></textarea>
          </div>
        </div>
        
        <div class="col-md-12">
          <router-link class="btn btn-info float-left" to="/item">Continue Shopping</router-link>
          <button class="btn btn-dark float-right" @click="checkout">Checkout</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script type="text/javascript">
  import Service from '@/service/Service.js'

  export default{
    data(){
      return {
        notes: "",
        orderStatus: false,
      }
    },
    methods:{
      plusCart(no){
        this.$store.dispatch('plusCart',no)
      },
      minusCart(no){
        this.$store.dispatch('minusCart',no)
      },
      checkout(){
        let notes = this.notes
        let ls = JSON.stringify(this.$store.state.cart)
        // let user_id = this.$state.user.id
        let user_id = this.$store.state.user.id
        Service.order(ls,notes,user_id)
              .then(response => {
                console.log(response)
                localStorage.removeItem('cart')
                this.$store.dispatch('setState')
                this.orderStatus = true
                // this.$router.push('/')
              })
      }
    },
    computed:{
      items(){
        return this.$store.state.cart
      },
      total(){
        return this.$store.state.cart.reduce((a, c) => (a + (c.price*c.qty)),0)
      }
    }
  }
</script>

<style type="text/css"></style>