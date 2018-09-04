<template>
  <div class="hello">
    <div class="row">
      <h3>{{ msg }}</h3>
      <span class="yellow-underline"></span>
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
    <Hero>
      <template slot="header">
        <h3>Not yet a </h3>
        <h1 class="bold"><i>HelloLawyer?</i></h1>
      </template>
      <p class="center">{{paragraph}}</p>
      <a href="" class="button success radius extend center">I want to know more</a>
    </Hero>
  </div>
</template>

<script>
import Hero from '@/components/Hero'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Hello, Lawyer!',
      user: '',
      pass: '',
      paragraph: 'Find out how joining HelloLaw can improve your business with a high quality network of lawyers and clients.',
      forgot: 'Forgot your password?',
      flag: false,
      active: false,
      warning: '',
      error: '',
      eyeflag: false
    }
  },
  methods: {
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
  },
  components: {
    Hero
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.warning{
  position: absolute;
  width: 100%;
  p{
    color: #ed677a;
    width: 200px;
    margin: 0 auto;
    text-align: center;
  }
}
</style>
