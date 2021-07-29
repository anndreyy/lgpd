<template>
<div class="container-odometer">
  <IOdometer
    class="iOdometer"
    :value="num"
    format= '(.ddd),dd'
  /><span class="part">{{part}}</span>

</div>
</template>
 
<script type="text/babel">
  import IOdometer from 'vue-odometer';
  import 'odometer/themes/odometer-theme-default.css';
 
  export default {
    name: 'Odometer',
    components: {
      IOdometer
    },
    props: ['value', 'part'],
    data() {
      return {
        num: 0
      };
    },
    mounted() {
      const that = this;
      setTimeout( ()=> {
          that.num = parseInt(this.value);
      }, 100)
    }
  };
</script>
 <style lang="scss">
  .container-odometer {
    font-size: 7em;
    margin: 0;

    .part{
      font-size: 0.5em;
    }
  }
 
 </style>