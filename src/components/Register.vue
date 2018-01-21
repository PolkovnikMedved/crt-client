<template>
  <div class="register">
    <!-- HEADER -->
    <my-header></my-header>
    <!-- BODY -->

    <main class="container">

      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-6 offset-md-3 col-lg-6 offset-lg-3">
          <form class="bg-light rounded nice-padding">
            <fieldset>
              <legend>{{ msg }}</legend>
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" name="email" class="form-control" id="email" placeholder="Ex.: happy.guy@smile.com"/>
              </div>
              <div class="form-group">
                <label for="pass-word">Password</label>
                <input type="password" name="pass-word" id="pass-word" class="form-control" placeholder="The hardest password you find"/>
              </div>
              <button class="btn btn-outline-success full-width">Register</button>
            </fieldset>
          </form>
        </div>
      </div>

    </main>

    <!-- FOOTER -->
    <my-footer :current_date="currentDate"></my-footer>

  </div>
</template>

<script>
import MyHeader from './parts/Header.vue'
import MyFooter from './parts/Footer.vue'

export default {
  name: 'register',
  data () {
    return {
      msg: 'Please fill the form',
      currentDate: new Date()
    }
  },
  components: {MyHeader, MyFooter}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
