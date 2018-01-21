<template>
  <div class="hello">
    <!-- HEADER -->
    <my-header></my-header>
    <!-- BODY -->

    <main class="container">
      <div class="row">
        <div class="col">
          <h1 class="text-center">{{ msg }}</h1>
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
  name: 'welcome',
  data () {
    return {
      msg: 'Welcome Costa Rica Travel',
      currentDate: new Date()
    }
  },
  components: {MyHeader, MyFooter}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
