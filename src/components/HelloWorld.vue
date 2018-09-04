<template>
  <div class="hello">
    <div class="row">
      <h3>{{ msg }}</h3>
      <span class="yellow-underline"></span>
      <login/>
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
import Login from '@/components/Login'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Hello, Lawyer!',
      paragraph: 'Find out how joining HelloLaw can improve your business with a high quality network of lawyers and clients.'
    }
  },
  methods: {
  },
  components: {
    Hero,
    Login
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
// putting some scss here just to show up
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
