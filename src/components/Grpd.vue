<template>
    <div id="LGPDComponent">
         <div class="flex">

          <div class="cardNumber" v-scroll-reveal.reset>
            <odemeter value="796" part="" />
            <span class="title">Multas</span>

          </div>
        

          <div class="cardNumber" v-scroll-reveal.reset="{ delay: 100 }">
            <odemeter value="1" part="Bi" />
            <span class="title">Em multas</span>
          </div>
        </div>

        <section v-scroll-reveal.reset="{ delay: 100 }">
          <h2>Multas por segmento</h2>
          <p>
            Acompanhe as multas por segmentos de negócio, este gráfico te ajuda a acompanhar o que está acontecendo em cada setor, de uma maneira dinâmica e fácil.
          </p>

        </section>
        <LineChart :chartdata="multasSegmento" v-scroll-reveal.reset="{ delay: 100 }" unit="Mi" />

        <section v-scroll-reveal.reset="{ delay: 100 }">
          <h2>Multas por mês</h2>
          <p>
            com o gráfico abaixo você pode acompanhar a evolução das multas mensalmente.
          </p>

        </section>
        <LineChart :chartdata="multasAnos" v-scroll-reveal.reset="{ delay: 100 }" />

        <section v-scroll-reveal.reset="{ delay: 100 }">
          <h2>Valor de multas por região</h2>
          <p>
            Tenha a visão da quantidade e valor total de multas aplicadas por estado e acompanhe a evolução em cada região.
          </p>

        </section>
        <HorizontalBar :chartdata="dataMultaRegiao" v-scroll-reveal.reset="{ delay: 100 }" />
    </div>
</template>
<script>
import LineChart from '@/components/charts/Line'
import PieChart from '@/components/charts/Pie'
import HorizontalBar from '@/components/charts/HorizontalBar'
import Odemeter from './Odemeter.vue'

export default {
    name:"Grpd",
    components: {
        LineChart,
        Odemeter,
        PieChart,
        HorizontalBar
    },
    data: () => ({
        multasSegmento: {
            labels: ['Industry and Commerce','Media, Telecoms and Broadcasting','Employment','Transportation and Energy','Accomodation and Hospitalty','Finance, Insurance and Consulting','Health Care'],
            datasets: [{
                label: 'Multas (em milhões)',
                data: [764,134,48,42,21,21,12],
                backgroundColor: ['#9d4edd','#7b2cbf','#5a189a','#3c096c','#240046','#240046','#240046'],
                borderColor: ['#9d4edd','#7b2cbf','#5a189a','#3c096c','#240046','#240046','#240046'],
                borderWidth: 1,
                
                
            }]
        },
        multasAnos: {
            labels: ['2018','2019','2020','2021'],
                datasets: [{
                    label: 'Soma das multas',
                    data: [12,163,356,244],
                    backgroundColor: '#2382f7',
                    borderColor: '#2382f7',
                    borderWidth: 1
                }],            
        },
        dataMultaRegiao: {
            labels: ['SPAIN','ITALY','ROMANIA','HUNGARY','GERMANY','NORWAY','POLAND','BELGIUM','CZECH REPUBLIC','SWEDEN'],
                datasets: [{
                    label: 'Soma das multas (em milhões)',
                    data: [259,86,61,42,32,31,28,25,25,24],
                    backgroundColor: ["#03045e","#023e8a","#0077b6","#0096c7","#00b4d8","#48cae4","#90e0ef","#ade8f4","#caf0f8"],
                    borderColor: ["#03045e","#023e8a","#0077b6","#0096c7","#00b4d8","#48cae4","#90e0ef","#ade8f4","#caf0f8"],
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
