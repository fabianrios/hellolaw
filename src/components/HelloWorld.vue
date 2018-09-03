<template>
  <div class="hello">
    <div class="row">
      <h1>{{ msg }}</h1>
      <p>Please log in with your credentials.</p>
      <form action="login">
        <div class="container">
          <input type="email" name="email" id="email" placeholder="E-Mail Address" :value="user" required>
          <label for="email">E-Mail Address</label>
        </div>
        <div class="container">
        <input type="password" name="password" placeholder="Password" id="password">
        <label for="password">Password</label>
        </div>
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
      msg: 'Hello, lawyer!',
      user: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

</style>
