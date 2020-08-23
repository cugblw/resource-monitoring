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
          "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598021963420&di=92a2da86fe9f8426b9095a320a374bcc&imgtype=0&src=http%3A%2F%2Fimg.soogif.com%2Fmini%2FsVuvozOb3ztjpvA4QcKiexgv5CPFdR5k.gif%3Fscope%3D96weixin",
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