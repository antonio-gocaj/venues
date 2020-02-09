<template>
  
  <div class="home">


    <section class="jumbotron text-center" style="background-image: url('https://source.unsplash.com/hpTH5b6mo2s/1200x400')">
      <div class="container py-5">
          <form @submit.prevent="checkForm">
          <div class="form-row">
            <div class="col-md-4">
              <input type="text" id="location" class="form-control" v-model="location" placeholder="Location..">
            </div>
            <div class="col-md-4">
              <select class="form-control" v-model="filterCategories">
                <option disabled selected value="">Categories</option>
                <option v-for="category in categories" :key="category.id" :value="category.id">{{category.name}}</option>
              
              </select>
            </div>
            <div class="col-md-2">
              <select class="form-control" name="filterRadius" v-model="filterRadius">
                <option disabled selected value="">Radius</option>
                <option v-for="radius in radiuses" :key="radius" :value="radius">{{radius}} Km</option>
              </select>
            </div>
            <div class="col-md-2">
              <button type="submit" class="btn btn-primary btn-block" :disabled="checkFormEmptyInput">Search</button>
            </div>
          </div>
        </form>
      </div>
    </section>


    <div class="container mb-5">

      <div class="section-title text-left pb-3">
        <h2 v-if="nearyou">Near You</h2>
        <h2 v-else-if="searchresults">Results</h2>
        <h2 v-else>Trending Now</h2>
      </div>

      <div class="card-deck">
        <div v-for="(item,index) in venues" :key="item.id"  class="card">
          <!-- FS response does not return photos with demo account except detail view -->
          <img :src="require(`@/assets/img/${index}.jpeg`)" class="card-img-top" alt="Venue Photo">
          <div class="card-body">
            <h5 class="card-title">{{item.name}}</h5>
            <p class="card-text">{{item.location.formattedAddress[0]}}</p>
            <a :href="'#/venues/'+item.id" class="card-link">More</a>
            
          </div>
        </div>
      </div>

    </div>



  </div>

</template>

<script>
import {getVenuesCategories,getVenuesSearch} from '@/api/venues.api';

const limitresult = 10;

export default {
  name: 'home',
  data () {
    return {
      categories:null,
      nearyou:false,
      searchresults:false,
      radiuses: [10,20,30,50,100],
      venues:"",
      location:"",
      filterCategories:"",
      filterRadius:""  
    }
  },
  methods: {
    async getSearch(params){
        this.venues = (await getVenuesSearch(params)).data.response.venues
    },
    checkForm: function(){
        this.searchresults = true;
        this.nearyou = false;
        this.getSearch({
            near: this.location,
            categoryId: this.filterCategories,
            radius: this.filterRadius,
            limit: limitresult
        });            
    }
  },
  computed:{

    checkFormEmptyInput(){
      if(this.location != "" && this.filterCategories != "" && this.filterRadius != ""){
        return false;
      }
      return true;
    }

  },
  async created () {

    this.venues = this.getSearch({near:'NYC',limit:limitresult});
    this.categories = (await getVenuesCategories()).data.response.categories

    /*if(!("geolocation" in navigator)) { this.errorStr = 'Geolocation not available.';return; } */
    navigator.geolocation.getCurrentPosition(pos => {
        this.nearyou = true;
        this.getSearch({
          ll:pos.coords.latitude+','+pos.coords.longitude,
          limit: limitresult
        });
        
    }, err => {
        this.errorStr = err.message;
    })

  }
}
</script>
