<template>
  <div class="mainmenu">
    <div class="parent_logo">
      <div id="logo">loagoaa</div>
    </div>
    <nav class="menu-actions">
      <a href="#close"><span id="close_icn"></span></a>
      <a href="#menu"><span id="menu_icn"></span></a>
    </nav>
  </div>
</template>

<script>

export default {
  name: 'Menu',
  data () {
    return {
      session: false
    }
  },
  created () {
    this.fetchSession()
  },
  watch: {
    '$route': 'fetchSession'
  },
  methods: {
    fetchSession () {
      this.session = this.$session.exists()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

</style>
