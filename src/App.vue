<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <div class="container">
        <router-link to="/"><b-navbar-brand >NavBar</b-navbar-brand></router-link>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item>
              <router-link class="nav-link" to="/">Home</router-link>
            </b-nav-item>
            <b-nav-item>
              <router-link class="nav-link" to="/about">About</router-link>
            </b-nav-item>
            <b-nav-item>
              <router-link class="nav-link" to="/item">Items</router-link>
            </b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
              <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
            </b-nav-form>

            <b-nav-item>
              <router-link class="nav-link" to="/cart">Cart <span class="badge badge-danger badge-pill" v-if="cartCount>0">{{cartCount}}</span></router-link>
            </b-nav-item>

            <b-nav-item v-if="!loginState">
              <router-link class="nav-link" to="/login">Login </router-link>
            </b-nav-item>
            <b-nav-item v-if="!loginState">
              <router-link class="nav-link" to="/register">Register </router-link>
            </b-nav-item>
            
            <!-- <b-nav-item-dropdown text="Lang" right>
              <b-dropdown-item href="#">EN</b-dropdown-item>
              <b-dropdown-item href="#">ES</b-dropdown-item>
              <b-dropdown-item href="#">RU</b-dropdown-item>
              <b-dropdown-item href="#">FA</b-dropdown-item>
            </b-nav-item-dropdown> -->
            <b-nav-item-dropdown class="mt-2" right v-if="loginState">
              <!-- Using 'button-content' slot -->
              <template #button-content>
                <em>{{user.name}}</em>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>

    <router-view/>
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
      cartCount(){
        this.$store.dispatch('setState')
        return this.$store.state.cart.reduce((a, c) => (a + c.qty),0)
      },
      loginState(){
        this.$store.dispatch('setToken')
        this.$store.dispatch('getUser')
        return this.$store.state.token?true:false
      },
      user(){
        return this.$store.state.user
      }
    }
  }
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
