<template>
  <div class="login">
    <p>Please log in with your credentials.</p>
    <form action="login" v-on:submit.prevent="onSubmit" v-bind:class="{ error: error }">
    <div class="container">
        <input type="email" name="email" id="email" placeholder="E-Mail Address" v-model="user" @keyup="check" required>
        <label for="email">E-Mail Address</label>
    </div>
    <div class="container">
    <input type="password" name="password" placeholder="Password" id="password"  @keydown="check" v-model="pass" required>
    <label for="password">Password</label>
    <a href="/" id="eye" v-on:click.prevent="onShow" v-bind:class="{ view: flag, act: eyeflag }"></a>
    <div class="warning">
        <p>{{warning}}</p>
        </div>
    </div>
    <input type="submit" value="Log In" class="button radius" v-bind:class="{ active: active }" v-on:submit.prevent="onSubmit">
    </form>
    <a href="" class="center block">{{forgot}}</a>
  </div>
</template>

<script>
import * as authApi from '../api/auth.api'

export default {
  name: 'Login',
  data () {
    return {
      user: '',
      pass: '',
      forgot: 'Forgot your password?',
      flag: false,
      active: false,
      warning: '',
      error: '',
      eyeflag: false
    }
  },
  methods: {
    makeLogin () {
      // use this one for a real case escenario
      authApi.makeLogin({
        username: this.user,
        password: this.pass
      }).then(response => { this.warning = '' })
        .then(() => {
          // this.$router.push({name: 'Somewhere'})
        })
        .catch((error) => {
          this.warning = 'Please check your login credentials and try again'
          this.error = true
          this.active = false
          this.error = error.status === 404 ? 'Please check your login credentials and try again' : error.message
        })
    },
    onSubmit: function onSubmit () {
      this.warning = 'Please check your login credentials and try again'
      this.error = true
      this.active = false
    },
    validateEmail: function validateEmail (email) {
      // eslint-disable-next-line
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(String(email).toLowerCase())
    },
    onShow: function onShow (e) {
      var type = this.flag === false ? 'text' : 'password'
      document.getElementById('password').type = type
      this.flag = !this.flag
    },
    check: function check (e) {
      if (this.pass && this.user && this.validateEmail(this.user)) {
        this.active = true
        this.eyeflag = true
      } else if (this.pass === '' || this.user === '') {
        this.active = false
        this.warning = ''
        this.eyeflag = false
        this.error = false
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

</style>
