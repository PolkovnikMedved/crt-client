<template>
  <modal :name="name" height="auto" @opened="fetchData">
    <div class="custom-modal text-center">

      <div class="alert alert-success" v-if="updated">
        <p>The request has been updated</p>
      </div>

      <div v-if="emptyResponse || (errors && errors.length)">
        <div class="alert alert-danger" v-if="emptyResponse">
          <p>An error occurred on {{ current_date }}</p>
        </div>
        <div class="alert alert-danger" v-for="(error, index) in errors" v-bind:key="index">
          <p>{{ error }} occurred on {{ current_date }}</p>
        </div>
      </div>

      <h3>Update partner request</h3>
      <form>
        <div class="form-group">
          <label for="name">Enter the name</label>
          <input type="text" name="name" class="form-control" id="name" placeholder="Ex.: Lambda corporation" v-model="request.name"/>
        </div>
        <div class="form-group">
          <label for="email">Enter the email</label>
          <input type="email" name="email" class="form-control" id="email" placeholder="Ex.: socrate@papyrus.com" v-model="request.email"/>
        </div>
        <div class="form-group">
          <label for="phone">Enter the phone</label>
          <input type="text" name="phone" class="form-control" id="phone" placeholder="Ex.: 59124995113" v-model="request.phone"/>
        </div>
        <button class="btn btn-success" v-on:click.prevent="updateRequest">UPDATE</button>
      </form>
    </div>
  </modal>
</template>

<script>
import {HTTP} from '../../http-common'
export default {
  name: 'request-update',
  props: ['request_id', 'name', 'current_date'],
  data () {
    return {
      request: [],
      errors: [],
      updated: false,
      emptyResponse: false
    }
  },
  methods: {
    updateRequest: function () {
      HTTP.put('partner-request/update', this.request, {'Content-Type': 'application/json'})
        .then(r => {
          this.request = r.data
          if (r.data === null) {
            this.emptyResponse = true
          } else {
            this.updated = true
          }
        })
        .catch(e => {
          this.errors.push(e)
        })
    },
    fetchData: function () {
      let requestId = this.request_id
      HTTP.get('partner-request/' + requestId)
        .then(r => {
          this.request = r.data
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  }
}
</script>
