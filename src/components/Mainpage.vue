<template>
<div class='page'>
  <header class ='header'>
    <div class='header__logo'>
      <img src='/images/war-thunder_logo.png' alt='War Thunder' />
    </div>
    <div class='header__language'>language</div>
  </header>
  <section class='content'>
    <div class='content__tank'></div>
    <div class='content__header'>
      <img src='/images/header_ru.png' alt='free starter pack' />
    </div>
  </section>
</div>

</template>

<script>

export default {
  name: 'Mainpage',

  components: {

  },

  props: {

  },

  data() {
    return {

    }
  },
}
</script>

<style scoped lang='scss'>
  @import '@/scss/mainpage.scss';
</style>
