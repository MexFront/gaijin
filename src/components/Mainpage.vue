<template>
<div class='page'>
  <div class='page__tank'></div>
  <div class='page__logo'><img src='images/gaijin-logo.png' alt='Gaijin' /></div>
  <div class='page__pegi'><img src='images/pegi.png' alt='Pegi info' /></div>
  <header class ='header'>
    <div class='header__logo'>
      <img src='images/war-thunder_logo.png' alt='War Thunder' />
    </div>
    <div class='header__language'>
      <ul class="header__languagepicker">
        <a href="#ru"><li><img src="images/russia-flag-icon-32.png"/></li></a>
        <a href="#tr"><li><img src="images/turkey-flag-icon-32.png"/></li></a>
      </ul>
    </div>
  </header>
  <main class='content'>
    <div class='content__header'>
      <img class='content__header-img-big' src='images/header_ru.png' alt='free starter pack' />
      <img class='content__header-img-sm' src='images/header_ru_m.png' alt='free starter pack' />
    </div>
    <div class='content__bonuses'>
      <h2 class='content__bonuses-header'>Выберите ваш
        <span class='_font_yellow'>бесплатный</span> бонус
      </h2>
      <div class='content__bonuses-container'>
        <div class='content__bonuses-airplane'>
          <div class='content__bonuses-airplane-container'>
            <div class='content__bonuses-airplane-name'>Thach's</div>
            <div class='content__bonuses-airplane-model'>F2A-1 Buffalo</div>
            <div class='content__bonuses-airplane-bonus _font_yellow'>+3 дня премиума</div>
          </div>
          <div class='content__bonuses-airplane-container'>
            <img src='images/f2a-1-buffalo.png'
              class='content__bonuses-airplane-img'
              alt='F2a-1-buffalo' />
          </div>
        </div>
        <div class='content__bonuses-star'>
          <div class='content__bonuses-star-text'>OR</div>
        </div>
        <div class='content__bonuses-tank'>
          <div class='content__bonuses-tank-container'>
            <div class='content__bonuses-tank-name'>Light tank</div>
            <div class='content__bonuses-tank-model'>M2A4</div>
            <div class='content__bonuses-tank-bonus _font_yellow'>+3 дня премиума</div>
          </div>
          <div class='content__bonuses-tank-container'>
            <img src='images/light-tank-m2a4.png'
              class='content__bonuses-tank-img'
              alt='light-tank-m2a4' />
          </div>
        </div>
      </div>
    </div>
    <h2 class='content__gallery-sm'>Видео и изображения</h2>
    <div class='content__gallery'>
      <div
        v-for='image in gallery'
        :key='image.id'
        class='content__gallery-preview'
        @click='openModal(image)'>
        <img
          :alt='image.description'
          :src='image.preview' />
      </div>
    </div>
  </main>
  <footer class='footer'>
    <span><a href='#' class='footer__link'>Privacy Policy</a></span>
    <span><a href='#' class='footer__link'>EULA</a></span>
    <span><a href='#' class='footer__link'>Terms of Use</a></span>
    <span><a href='#' class='footer__link'>Customer Support</a></span>
  </footer>

  <Modal
    v-if='showModal'
    class='page__modal'
    @close='closeModal'>
    <h2 slot='header'> {{ img.description }}</h2>
    <div slot='body'>
      <img :src='img.full' :alt='img.description' />
    </div>
  </Modal>
</div>

</template>

<script>
import Modal from './Modal.vue'

export default {
  name: 'Mainpage',

  components: {
    Modal,
  },

  data() {
    return {
      gallery: [
        {
          preview: 'images/gallery/1.jpg',
          full: 'images/gallery/1-big.jpg',
          id: 1,
          description: 'first',
        },
        {
          preview: 'images/gallery/2.jpg',
          full: 'images/gallery/2-big.jpg',
          id: 2,
          description: 'second',
        },
        {
          preview: 'images/gallery/3.jpg',
          full: 'images/gallery/3-big.jpg',
          id: 3,
          description: 'third',
        },
      ],
      showModal: false,
      img: {
        preview: '',
        full: '',
        id: null,
        description: '',
      },
    }
  },

  methods: {
    closeModal() {
      this.showModal = false
      this.img.preview = ''
      this.img.full = ''
      this.img.id = null
      this.img.description = ''
    },

    openModal(image) {
      this.img.preview = image.preview
      this.img.full = image.full
      this.img.id = image.id
      this.img.description = image.description
      this.showModal = true
    },
  },
}
</script>

<style lang='scss'>
  @import '@/scss/mainpage.scss';
</style>
