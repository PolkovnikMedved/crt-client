<template>
  <modal :name="name" height="auto">
    <div class="custom-modal text-center">

      <h3>Add a partner request</h3>
      <form>
        <div class="form-group">
          <label for="name">Enter the name</label>
          <input type="text" name="name" class="form-control" id="name" placeholder="Ex.: Lambda corporation" v-model="newType.name"/>
        </div>
        <div class="form-group">
          <label for="email">Enter the email</label>
          <input type="email" name="email" class="form-control" id="email" placeholder="Ex.: socrate@papyrus.com" v-model="newType.email"/>
        </div>
        <div class="form-group">
          <label for="phone">Enter the phone</label>
          <input type="text" name="phone" class="form-control" id="phone" placeholder="Ex.: 59124995113" v-model="newType.phone"/>
        </div>
        <button class="btn btn-success" v-on:click="addRequest">CREATE</button>
      </form>
    </div>
  </modal>
</template>

<script>
import {HTTP} from '../../http-common'
export default {
  name: 'type-add',
  props: ['name', 'current_date'],
  data () {
    return {
      newType: {
        name: '',
        email: '',
        phone: ''
      },
      response: [],
      errors: []
    }
  },
  methods: {
    addRequest: function () {
      HTTP.post('partner-request/add', this.newType, {'Content-Type': 'application/json'})
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
