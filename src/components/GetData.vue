<template>
  <div class="getdata-wrap">
    <span>Total:{{cpu}}</span>
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
    margin: 50px;
    font-size: 40pt;
  }
</style>