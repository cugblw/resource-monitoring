<template>
  <div id="imagefadein">
    <transition name="fade">
      <img class="showImg" :src="src" v-if="loaded" />&nbsp
    </transition>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        src:
          "http://article.fd.zol-img.com.cn/g4/M03/0A/0B/Cg-4WVP5_SGIeXxnAF2crSIzFTAAAQyNAFTu5AAXZzF167.gif",
        loaded: false
      };
    },

    mounted: function () {
      var image = new Image();
      var that = this;
      this.loaded = image.addEventListener("load", function () {
        that.onLoaded();
      }); // This is the key part: it is basically vanilla JS
      image.src = this.src;
    },

    methods: {
      onLoaded() {
        this.loaded = true;
      }
    }
  };
</script>

<style scoped>
  /* .imagefadein {
    width: 350px;
    height: 150px;
    background: slategrey;
  } */

  .fade-enter-active {
    transition: opacity 5s ease-in-out;
  }

  .fade-enter-to {
    opacity: 1;
  }

  .fade-enter {
    opacity: 0;
  }

  @keyframes scaleDraw {

    /* 定义关键帧、scaleDrew是需要绑定到选择器的关键帧名称 */
    0% {
      transform: scale(0);
      /*开始为原始大小*/
    }

    100% {
      transform: scale(1);
      /*放大到100%*/
    }
  }

  .showImg {
    width: 100%;
    height: 100%;
    /* animation: scaleDraw 5s ease-in-out infinite; */
    animation: scaleDraw 5s ease-in-out;
  }
</style>