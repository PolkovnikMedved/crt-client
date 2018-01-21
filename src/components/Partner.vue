<template>
  <div class="partner">
    <my-header></my-header>

    <main class="container">

      <div v-if="ers && ers.length > 0">
        <div class="alert alert-danger" v-for="error in ers" :key="error.index">
          <p>{{ error }}</p>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <h1 class="text-center">{{ msg }}</h1>
        </div>
      </div>

      <div v-if="partner" class="row">
        <div class="col">
          <div class="row">
            <div class="col-2">
              <p>Name</p>
            </div>

            <div class="col-10">
              <p>{{ partner.name }}</p>
            </div>
          </div>

          <div class="row">
            <div class="col-2">
              <p>Email</p>
            </div>

            <div class="col-10">
              <p>{{ partner.email }}</p>
            </div>
          </div>

          <div class="row">
            <div class="col-2">
              <p>Phone</p>
            </div>

            <div class="col-10">
              <p>{{ partner.phone }}</p>
            </div>
          </div>

          <div class="row">
            <div class="col-2">
              <p>Address</p>
            </div>

            <div class="col-10">
              <p>{{ partner.address }}</p>
            </div>
          </div>

          <div class="row">
            <div class="col-2">
              <p>Picture</p>
            </div>

            <div class="col-10">
              <p>{{ partner.picture }}</p>
            </div>
          </div>

          <div class="row">
            <div class="col-2">
              <p>Latitude</p>
            </div>

            <div class="col-10">
              <p>{{ partner.latitude }}</p>
            </div>
          </div>

          <div class="row">
            <div class="col-2">
              <p>Longitude</p>
            </div>

            <div class="col-10">
              <p>{{ partner.longitude }}</p>
            </div>
          </div>

          <div class="row">
            <div class="col-2">
              <p>Horary</p>
            </div>

            <div class="col-10">
              <p>{{ partner.horary }}</p>
            </div>
          </div>

          <div class="row">
            <div class="col-2">
              <p>Comment</p>
            </div>

            <div class="col-10">
              <p>{{ partner.comment }}</p>
            </div>
          </div>

          <div class="row">
            <div class="col-2">
              <p>Is Special Offer</p>
            </div>

            <div class="col-10">
              <p>{{ partner.specialOffer }}</p>
            </div>
          </div>

          <div class="row">
            <div class="col-2">
              <p>Offer</p>
            </div>

            <div class="col-10">
              <p>{{ partner.offer }}</p>
            </div>
          </div>

          <div class="row">
            <div class="col-2">
              <p>Location</p>
            </div>

            <div class="col-10">
              <p>{{ partner.location.name }}</p>
            </div>
          </div>

          <div class="row">
            <div class="col-2">
              <p>Trip advisor</p>
            </div>

            <div class="col-10">
              <a v-bind:href="partner.tripAdvisorLink" target="_blank">go to link</a>
            </div>
          </div>

          <div class="row">
            <div class="col-2">
              <p>Partner type</p>
            </div>

            <div class="col-10">
              <p>{{ partner.type.name }}</p>
            </div>
          </div>

          <div class="row">
            <div class="col-2">
              <p>Hot words</p>
            </div>

            <div class="col-10">
              <ul v-for="word in partner.hotWords" v-bind:key="word.id">
                <li>{{ word.name }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>

    <my-footer :current_date="currentDate"></my-footer>
  </div>
</template>

<script>
import {HTTP} from '../http-common.js'
import MyHeader from './parts/Header.vue'
import MyFooter from './parts/Footer.vue'

export default {
  name: 'partner',
  data () {
    return {
      msg: 'Partner',
      currentDate: new Date(),
      partner: [],
      ers: []
    }
  },
  created () {
    let partnerId = this.$route.params.id
    HTTP.get('partner/' + partnerId)
      .then(r => {
        this.partner = r.data
      })
      .catch(e => {
        this.ers.push(e)
      })
  },
  components: {
    MyHeader,
    MyFooter
  }
}
</script>
