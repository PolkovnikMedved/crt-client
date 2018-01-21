<template>
  <div class="partners">
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

      <div class="row">
        <div class="col">
          <table class="table">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Location</th>
              <th>Type</th>
              <th>Country</th>
              <th>Actions</th>
            </tr>

            <tbody v-if="partners && partners.length">
            <tr :key="partner.id" v-for="partner in partners">
              <td>{{ partner.name }}</td>
              <td>{{ partner.email }}</td>
              <td>{{ partner.phone }}</td>
              <td>{{ partner.location.name }}</td>
              <td>{{ partner.type.name }}</td>
              <td>{{ partner.country }}</td>
              <td class="text-center one-hundred">
                <router-link :to="{ name: 'partner', params: {id: partner.id} }">
                  <i class="fa fa-big fa-eye" aria-hidden="true"></i>
                </router-link>
                <i class="fa fa-big fa-pencil-square-o" aria-hidden="true"></i>
                <i class="fa fa-big fa-trash-o" aria-hidden="true"></i>
              </td>
            </tr>
            </tbody>
          </table>
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
  name: 'partners',
  data () {
    return {
      msg: 'Partners',
      currentDate: new Date(),
      partners: [],
      ers: []
    }
  },
  created () {
    HTTP.get('partner/all')
      .then(r => {
        this.partners = r.data
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
