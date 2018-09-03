<template>
  <div class="hello">
    <div class="row">
      <h1>{{ msg }}</h1>
      <p>Please log in with your credentials.</p>
      <form action="login">
        <label for="email">E-Mail Address</label>
        <input type="email" name="email" id="email" value="bob.loblaw@lawblog.com">
        <label for="password">Password</label>
        <input type="password" name="password" id="password">
        <input type="submit" value="Log In" class="button radius">
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Hello lawyer!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

</style>
