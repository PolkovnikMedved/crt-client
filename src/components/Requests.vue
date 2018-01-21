<template>
  <div class="requests">
    <my-header></my-header>

    <request-add-modal :name="requestAdd" :current_date="currentDate"></request-add-modal>
    <request-update-modal :name="requestUpdate" :current_date="currentDate" :request_id="updateRequestId"></request-update-modal>

    <main class="container">

      <div class="alert alert-success" v-if="deleted">
        <p>The request has been deleted</p>
      </div>

      <div v-if="ers && ers.length > 0">
        <div class="alert alert-danger" v-for="error in ers" :key="error.index">
          <p>{{ error }}</p>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <h1 class="text-center">{{ msg }} <button class="btn btn-outline-success round" v-on:click="addRequest"><i class="fa fa-plus"></i></button></h1>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <table class="table">
            <thead>
            <tr>
              <th>Email</th>
              <th>Name</th>
              <th>Phone</th>
              <th class="text-center">Action</th>
            </tr>
            </thead>

            <tbody v-if="requests && requests.length">
            <tr :key="request.id" v-for="request in requests">
              <td>{{ request.email }}</td>
              <td>{{ request.name }}</td>
              <td>{{ request.phone }}</td>
              <td class="text-center">
                <a href="#" :data-id="request.id" v-on:click.prevent="updateRequest($event)">
                  <i class="fa fa-big fa-pencil-square-o" aria-hidden="true"></i>
                </a>
                <a href="#" :data-id="request.id" v-on:click.prevent="deleteRequest($event)">
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
import RequestAddModal from './modals/RequestAddModal.vue'
import RequestUpdateModal from './modals/RequestUpdateModal.vue'
import {HTTP} from '../http-common.js'
import MyHeader from './parts/Header.vue'
import MyFooter from './parts/Footer.vue'

export default {
  name: 'requests',
  data () {
    return {
      msg: 'Requests',
      currentDate: new Date(),
      requests: [],
      ers: [],
      requestAdd: 'add-request',
      requestUpdate: 'update-request',
      updateRequestId: '',
      deleted: false
    }
  },
  methods: {
    fetchData: function () {
      HTTP.get('partner-request/all')
        .then(r => {
          this.requests = r.data
        })
        .catch(e => {
          this.ers.push(e)
        })
    },
    addRequest: function () {
      this.$modal.show(this.requestAdd)
    },
    updateRequest: function (event) {
      this.updateRequestId = event.currentTarget.getAttribute('data-id')
      this.$modal.show(this.requestUpdate)
    },
    deleteRequest: function (event) {
      let id = event.currentTarget.getAttribute('data-id')
      HTTP.delete('partner-request/' + id + '/delete')
        .then(
          this.deleted = true,
          this.fetchData
        )
        .catch(e => {
          this.errors.push(e)
        })
    }
  },
  created () {
    this.fetchData()
  },
  components: {
    MyHeader,
    MyFooter,
    RequestAddModal,
    RequestUpdateModal
  }
}
</script>
