<template>
  <div class="container">
    <div class="row my-4">
      <div class="col-12">
        <h1 class="text-danger text-center">Item Detail Page</h1>
      </div>
    </div>

    <div class="row">
      <div class="col-md-8 mx-auto">
        <b-card no-body class="overflow-hidden" v-if="!loading">
          <b-row no-gutters>
            <b-col md="6">
              <b-card-img :src="item.photo" alt="Image" class="rounded-0"></b-card-img>
            </b-col>
            <b-col md="6">
              <b-card-body :title="item.name">
                <b-card-text>
                  {{item.detail}}
                </b-card-text>
                <b-card-text>{{item.brand.name}} | {{item.subcategory.name}}</b-card-text>
                <b-card-text>
                  <input type="number" class="form-control" min="1" v-model="qty">
                </b-card-text>
                <b-button variant="info" @click="AddToCart"><b-icon-cart-plus-fill></b-icon-cart-plus-fill> Add to Cart</b-button>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  import Service from '@/service/Service.js'

  export default{
    data(){
      return {
        qty:1,
        loading: true,
        item: Object
      }
    },
    created(){
      let id = this.$route.params.id;
      Service.getItemDetail(id)
              .then(response => {
                this.item = response.data.item
                this.loading = false
              })
    },
    methods:{
      AddToCart(){
        console.log(this.item)
        let cartitem = {
          id: this.item.id,
          name: this.item.name,
          photo: this.item.photo,
          price: this.item.price,
          qty: this.qty
        }
        this.$store.dispatch('addToCart', cartitem)
      }
    }
  }
</script>

<style type="text/css"></style>