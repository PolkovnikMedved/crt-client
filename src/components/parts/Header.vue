<template>
  <header>
    <nav class="navbar navbar navbar-expand-md navbar-dark bg-primary flex-column flex-md-row fixed-top">
      <router-link :to="{ name: 'welcome' }" class="navbar-brand">CRT</router-link>
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link :to="{ name: 'locations' }" class="nav-link">Locations</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'requests' }" class="nav-link">Requests</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'partners' }" class="nav-link">Partners</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'partner-types' }" class="nav-link">Types</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'my-header'
}
</script>
