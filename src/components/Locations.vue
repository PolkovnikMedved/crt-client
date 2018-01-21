<template>
  <div class="locations">
    <my-header></my-header>

    <add-location-modal :name="locationAdd" :current_date="currentDate"></add-location-modal>
    <update-location-modal :name="locationUpdate" :current_date="currentDate" :location_id="updateLocationId" :location_name="updateLocationName"></update-location-modal>

    <main class="container">

      <div v-if="deleted" class="alert alert-success">
        <p>The location has been deleted</p>
      </div>

      <div v-if="ers && ers.length > 0">
        <div class="alert alert-danger" v-for="error in ers" :key="error.index">
          <p>{{ error.message }} on date = {{ currentDate }}</p>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <h1 class="text-center">{{ msg }} <button class="btn btn-outline-success round" v-on:click="addLocation"><i class="fa fa-plus"></i></button></h1>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <table class="table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th class="text-center">Action</th>
              </tr>
            </thead>

            <tbody v-if="locations && locations.length">
              <tr :key="location.id" v-for="location in locations">
                <td>{{ location.id }}</td>
                <td>{{ location.name }}</td>
                <td class="text-center">
                  <a href="#" :id="location.id" :data-name="location.name" v-on:click.prevent="updateLocation($event)">
                    <i class="fa fa-big fa-pencil-square-o" aria-hidden="true"></i>
                  </a>
                  <a href="#" :id="location.id" v-on:click.prevent="deleteLocation($event)">
                    <i class="fa fa-big fa-trash-o text-danger" aria-hidden="true"></i>
                  </a>
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
import AddLocationModal from './modals/LocationAddModal.vue'
import UpdateLocationModal from './modals/LocationUpdateModal.vue'
import {HTTP} from '../http-common.js'
import MyHeader from './parts/Header.vue'
import MyFooter from './parts/Footer.vue'

export default {
  name: 'locations',
  data () {
    return {
      msg: 'Locations',
      currentDate: new Date(),
      locations: [],
      ers: [],
      locationAdd: 'location-add',
      locationUpdate: 'location-update',
      updateLocationId: '',
      updateLocationName: '',
      deleted: false
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData: function () {
      HTTP.get('location/all')
        .then(r => {
          this.locations = r.data
        })
        .catch(e => {
          this.ers.push(e)
        })
    },
    addLocation: function () {
      this.$modal.show(this.locationAdd)
    },
    updateLocation: function (event) {
      this.updateLocationId = event.currentTarget.getAttribute('id')
      this.updateLocationName = event.currentTarget.getAttribute('data-name')
      this.$modal.show(this.locationUpdate)
    },
    deleteLocation: function (event) {
      let idToDelete = event.currentTarget.getAttribute('id')
      HTTP.delete('location/' + idToDelete + '/delete')
        .then(
          this.deleted = true,
          this.fetchData
        )
        .catch(e => {
          this.errors.push(e)
        })
    }
  },
  components: {
    MyHeader,
    MyFooter,
    AddLocationModal,
    UpdateLocationModal
  }
}
</script>
