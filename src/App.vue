<template>

  <div id="app">

    <Header logotitle="VUEJS + FOURSQUARE"/>

    <keep-alive include="home">
      <router-view/>
    </keep-alive>

  </div>
  
</template>

<script>
import Header from '@/components/Header'
export default {
  components:{
    Header
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Poppins&display=swap');

/*
body{
  background: url("~@/assets/unsplash.jpg") no-repeat;
  background-position: center top;
}*/

body{
  background:#fff;
}

#app {
  font-family: 'Poppins', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  background:#fff;
  -webkit-box-shadow: 0px 3px 30px -15px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 3px 30px -15px rgba(0,0,0,0.75);
  box-shadow: 0px 3px 30px -15px rgba(0,0,0,0.75);
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

input.form-control:focus,
input.form-control:active:focus,
select.form-control:focus,
select.form-control:active:focus{
    outline: none !important;
   box-shadow: none;

}

/*added*/ 
.subtitle{
  margin-bottom: 0;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #868e96;
  font-weight: bold;
}

.search-bar{
    padding: 20px 0px;
    background: #fff;
    border-radius: 5px
}

.card{
  border:1px solid #dfdfdf;
  border-radius:5px;
  -webkit-box-shadow: 0px 0px 7px -1px rgba(227,227,227,1);
  -moz-box-shadow: 0px 0px 7px -1px rgba(227,227,227,1);
  box-shadow: 0px 0px 7px -1px rgba(227,227,227,1);
}
.card-deck {
  margin:0px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 30px;
}

.card-deck .card{
  margin:0px;
}

.jumbotron{
  border-radius: 0px;
    background-size:cover;
    background-position: center center;
}


</style>
