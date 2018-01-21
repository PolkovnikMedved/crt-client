<template>
  <div class="partner-types">
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
            <thead>
            <tr>
              <th>Name</th>
              <th>Picture</th>
              <th>Country</th>
              <th class="text-center">Action</th>
            </tr>
            </thead>

            <tbody v-if="types && types.length">
            <tr :key="type.id" v-for="type in types">
              <td>{{ type.name }}</td>
              <td>{{ type.picture }}</td>
              <td>{{ type.country }}</td>
              <td class="text-center">
                <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                <i class="fa fa-trash-o" aria-hidden="true"></i>
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
  name: 'partner-types',
  data () {
    return {
      msg: 'Types',
      currentDate: new Date(),
      types: [],
      ers: []
    }
  },
  created () {
    HTTP.get('partner-type/all')
      .then(r => {
        this.types = r.data
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
