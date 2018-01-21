<template>
  <modal :name="name" height="auto">
    <div class="custom-modal text-center">

      <div class="alert alert-success" v-if="updated">
        <p>The location has been updated</p>
      </div>

      <div v-if="emptyResponse || (errors && errors.length)">
        <div class="alert alert-danger" v-if="emptyResponse">
          <p>An error occurred on {{ current_date }}</p>
        </div>
        <div class="alert alert-danger" v-for="(error, index) in errors" v-bind:key="index">
          <p>{{ error }} occurred on {{ current_date }}</p>
        </div>
      </div>

      <h3>Update Location</h3>
      <form>
        <div class="form-group">
          <label for="name">Enter the new Location name</label>
          <input type="text" name="name" class="form-control" id="name" v-model="loc.name"/>
        </div>
        <button class="btn btn-success" v-on:click.prevent="updateLocation">UPDATE</button>
      </form>
    </div>
  </modal>
</template>

<script>
import {HTTP} from '../../http-common'
export default {
  name: 'location-update',
  props: ['location_id', 'name', 'current_date', 'location_name'],
  data () {
    return {
      loc: {
        id: '',
        name: ''
      },
      response: [],
      errors: [],
      updated: false,
      emptyResponse: false
    }
  },
  watch: {
    location_id: function (newValue) {
      this.loc.id = newValue
    },
    location_name: function (newValue) {
      this.loc.name = newValue
    }
  },
  methods: {
    updateLocation: function () {
      HTTP.put('location/update', this.loc, {'Content-Type': 'application/json'})
        .then(r => {
          this.response = r.data
          if (r.data === null) {
            this.emptyResponse = true
          } else {
            this.updated = true
          }
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  }
}
</script>
