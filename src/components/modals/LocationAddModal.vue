<template>
  <modal :name="name" height="auto">
    <div class="custom-modal text-center">

      <h3>Add a Location</h3>
      <form>
        <div class="form-group">
          <label for="name">Enter a Location name</label>
          <input type="text" name="name" class="form-control" id="name" placeholder="Ex.: Costa Rica" v-model="locationName"/>
        </div>
        <button class="btn btn-success" v-on:click="addLocation">CREATE</button>
      </form>
    </div>
  </modal>
</template>

<script>
import {HTTP} from '../../http-common'
export default {
  name: 'location-add',
  props: ['name', 'current_date'],
  data () {
    return {
      locationName: '',
      response: [],
      errors: []
    }
  },
  methods: {
    addLocation: function () {
      let newLocation = {name: this.locationName}
      HTTP.post('location/add', newLocation, {'Content-Type': 'application/json'})
        .then(r => {
          this.response = r.data
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  }
}
</script>
