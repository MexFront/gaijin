<template>
<transition name='modal'>
  <div class='modal-mask'>
    <div class='modal-wrapper'
      @click='onWrapperClick'>
      <div class='modal-container'
        @click.stop>

        <div class='modal-header'>
          <slot name='header'>
            default header
          </slot>
        </div>

        <div class='modal-body'>
          <slot name='body'>
            default body
          </slot>
        </div>

        <div class='modal-footer'>
          <slot name='footer'>
            <button class='modal-default-button' @click='$emit("close")'>
              OK
            </button>
          </slot>
        </div>
      </div>
    </div>
  </div>
</transition>
</template>

<script>
export default {
  name: 'Modal',

  data() {
    return {

    }
  },

  methods: {
    onWrapperClick() {
      this.$emit('close')
    },
  },
}
</script>

<style lang='scss'>
  @import '@/scss/modal.scss';
</style>
