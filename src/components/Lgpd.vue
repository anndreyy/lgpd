<template>
    <div id="LGPDComponent">
         <div class="flex">

          <div class="cardNumber" v-scroll-reveal.reset>
            <odemeter value="54" part="" />
            <span class="title">Multas</span>

          </div>
        

          <div class="cardNumber" v-scroll-reveal.reset="{ delay: 100 }">
            <odemeter value="4" part="Mi" />
            <span class="title">Em multas</span>
          </div>
        </div>

        <section v-scroll-reveal.reset="{ delay: 100 }">
          <h2>Multas por segmento</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nemo sint fugiat repellat accusantium, minima numquam pariatur commodi temporibus recusandae quidem? Saepe ullam ut accusantium at, ea molestiae ab sint.
          </p>

        </section>
        <LineChart :chartdata="data2" v-scroll-reveal.reset="{ delay: 100 }" />

        <section v-scroll-reveal.reset="{ delay: 100 }">
          <h2>Multas por mês</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nemo sint fugiat repellat accusantium, minima numquam pariatur commodi temporibus recusandae quidem? Saepe ullam ut accusantium at, ea molestiae ab sint.
          </p>

        </section>
        <LineChart :chartdata="data1" v-scroll-reveal.reset="{ delay: 100 }" />

        <section v-scroll-reveal.reset="{ delay: 100 }">
          <h2>Valor de multas por região</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nemo sint fugiat repellat accusantium, minima numquam pariatur commodi temporibus recusandae quidem? Saepe ullam ut accusantium at, ea molestiae ab sint.
          </p>

        </section>
        <PieChart :chartdata="dataMultaRegiao" v-scroll-reveal.reset="{ delay: 100 }" />
    </div>
</template>
<script>
import LineChart from '@/components/charts/Line'
import PieChart from '@/components/charts/Pie'
import Odemeter from './Odemeter.vue'

export default {
    name:"Lgpd",
    components: {
        LineChart,
        Odemeter,
        PieChart
    },
    data: () => ({
        data2: {
      labels: ['Mercado de Software', 'Seguradora', 'Vendas On-Line', 'Metrô', 'Empresa de comunicação'],
        datasets: [{
            label: 'Multas',
            data: [2500000, 1000000, 500000, 200000, 100000],
            backgroundColor: [
                '#9d4edd',
                '#7b2cbf',
                '#5a189a',
                '#3c096c',
                '#240046',

                // '#ffd500',
                // '#fdc500',
                // '#00509d',
                // '#003f88',
                // '#003f88',

                // '#CAF0F8',
                // '#ADE8F4',
                // '#90E0EF',
                // '#48CAE4',
                // '#00B4D8',
            ],
            borderColor: [
                 '#9d4edd',
                '#7b2cbf',
                '#5a189a',
                '#3c096c',
                '#240046',
            ],
            borderWidth: 1,
            
            
        }]
        },
        data1: {
            labels: ['Janeiro', 'Feveiro', 'Março', 'Abril', 'Maio', 'Junho', "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
                datasets: [{
                    label: 'Soma das multas',
                    data: [7,4,4,4,3,4,1,4,8,6,5,4],
                    backgroundColor: '#2382f7',
                    borderColor: '#2382f7',
                    borderWidth: 1
                }],            
        },
        dataMultaRegiao: {
            labels: ['SP', 'DF', 'MG', 'RS', 'AL', 'RJ', "PB", "RN"],
                datasets: [{
                    label: 'Soma das multas',
                    data: [21,12,9,4,3,2,1,1],
                    backgroundColor: [
                        '#3a86ff',
                        '#8338ec',
                        '#ff006e',
                        '#fb5607',
                        '#ffbe0b',
                        '#60b6fb',
                        '#1e96fc',
                        '#1360e2',
                    ],
                    borderColor: [
                        '#3a86ff',
                        '#8338ec',
                        '#ff006e',
                        '#fb5607',
                        '#ffbe0b',
                        '#60b6fb',
                        '#1e96fc',
                        '#1360e2',
                    ],
                    borderWidth: 0
                }],
        },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
    })
}
</script>
