<template>

  <main role="main" class="container mt-4">
    <div class="row">

      <aside class="col-md-4 detail-sidebar">
        <div class="p-2 mb-3 bg-light rounded">
          <img width="100%" :src="`${photo.prefix}${photo.width}x${photo.height}${photo.suffix}`" alt="">
        </div>
      </aside>

      <div class="col-md-8 ">
        <div class="detail-post">
          <h2>{{detail.venue.name}}</h2>
          <p class="text-muted mb-1"> <b>Address:</b> {{detail.venue.location.address}}, {{detail.venue.location.city}}, {{detail.venue.location.country}}</p>
          <p class="text-muted mb-1"> <b>Category:</b> {{detail.venue.categories[0].pluralName}}</p>
          <br>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis pellentesque metus, at tristique augue.</p>
          <hr>
          <p>Quisque eu felis egestas, lacinia nibh in, fermentum nibh. Vestibulum mauris est.</p>
        </div>
      </div>

    </div>
  </main>

</template>


<script>
import {getVenuesDetail} from '@/api/venues.api'
export default {
  name:"venuedetails",
  data(){
      return{
          detail: {},
          photo: {}
      }
  },
  async created(){
      this.detail = (await getVenuesDetail(this.$route.params.id)).data.response
      this.photo = this.detail.venue.photos.groups[0].items[0]
  }
}
</script>

<style scoped>

.display-3{
    color:#fff
}

</style>