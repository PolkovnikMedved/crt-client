<template>
  <footer class="fixed-bottom bg-dark">
    <div class="row">
      <div class="col">
        <p class="text-center text-light" id="bottom-text">Southdev | {{ current_date.getFullYear() }}</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'my-footer',
  props: ['current_date']
}
</script>
