<script>
import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  name: "LineChart",
  props: ['chartdata'],
  data: () => ({

    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
                labels: {
                    fontColor: "white",
                    // fontSize: 18
                }
            },
        scales: {
            yAxes: [{
                ticks: {
                    fontColor: "white",
                    // fontSize: 18,
                    // stepSize: 1,
                    beginAtZero: true
                }
            }],
            xAxes: [{
                ticks: {
                    fontColor: "white",
                    // fontSize: 14,
                    // stepSize: 1,
                    beginAtZero: true
                }
            }]
        }
      }
  }),

  mounted () {
    this.renderChart(this.chartdata, this.options)
  }
}
</script>

<style>
</style>