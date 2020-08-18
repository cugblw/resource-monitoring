<template>
  <div class="getdata-wrap">
    <span>{{cpu}}</span>
  </div>
</template>

<script>
  export default {
    name: 'getdata',
    props: ['cpu']

  }
</script>
<style scoped>
  .getdata-wrap {
    color: lightcoral;
    font-size: 40pt;
  }
</style>