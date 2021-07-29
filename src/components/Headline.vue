<template>
    <section id="Headline">

        <div class="header" v-scroll-reveal.reset>
          <h1>
              LGPD GRPD Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias eligendi animi quibusdam.
          </h1>
        </div>

        <div class="headerLogo">
          <img src="@/assets/security_icon.png" alt="">

        </div>

    <lgpd />
       

    </section>
</template>
<script>
import LineChart from '@/components/charts/Line'
import Odemeter from './Odemeter.vue'
import Lgpd from './Lgpd'

export default {
    name: "Headline",
    components: {
      LineChart,
        Odemeter,
        Lgpd,
    },
    data: () => ({
    data2: {
      labels: ['Janeiro', 'Feveiro', 'Março', 'Abril', 'Maio', 'Junho'],
        datasets: [{
            label: 'Contagem de multas',
            data: [20, 17, 14, 11, 7, 4],
            backgroundColor: [
                '#03045e',
                '#023e8a',
                '#0077B6',
                '#0096C7',
                '#00B4D8',
                '#48CAE4'
            ],
            borderColor: [
                '#03045e',
                '#023e8a',
                '#0077B6',
                '#0096C7',
                '#00B4D8',
                '#48CAE4'
            ],
            borderWidth: 1
        }]
    },
    data1: {
      labels: ['Janeiro', 'Feveiro', 'Março', 'Abril', 'Maio', 'Junho'],
        datasets: [{
            label: 'Contagem de multas',
            data: [20, 7, 11, 14, 17, 20],
            backgroundColor: [
                '#48CAE4',
                '#00B4D8',
                '#0096C7',
                '#0077B6',
                '#023e8a',
                '#03045e',
            ],
            borderColor: [
                '#48CAE4',
                '#00B4D8',
                '#0096C7',
                '#0077B6',
                '#023e8a',
                '#03045e',
            ],
            borderWidth: 1
        }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  }),
}
</script>
<style lang="scss">
  .flex{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: space-around;
  }
  .cardNumber{
    text-align: center;
    span.title{
      font-size: 1.5em;
    }
  }
</style>