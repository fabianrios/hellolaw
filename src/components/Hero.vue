<template>
  <div class="hero">
    <div class="row">
        <header>
            <slot name="header"></slot>
        </header>
        <main>
            <slot></slot>
        </main>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Hero',
  data () {
    return {}
  }
}
</script>

<style lang="scss">
.hero{
    p{
        color: #fff;
        font-weight: 300;
        margin-bottom: 30px;
    }
    padding-bottom: 20px;
}
header{
    color: #ffffff;
    text-align: center;
    margin: 0 auto;
    h1{
        margin-bottom: 40px;
    }
}

.hero{
    background: url('../assets/images/hello_bg.jpg');
}
</style>
