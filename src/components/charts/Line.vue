<script>
import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  name: "LineChart",
  props: ['chartdata', 'unit'],
  data: () => ({

    options: {
      responsive: true,
      maintainAspectRatio: false,
       tooltips: {
            callbacks: {
              label: (item) => `${item.yLabel}`,
            },
        },
      legend: {
                labels: {
                    fontColor: "white",
                }
            },
        scales: {
            yAxes: [{
                ticks: {
                    fontColor: "white",
                    beginAtZero: true
                }
            }],
            xAxes: [{
                ticks: {
                    fontColor: "white",
                    beginAtZero: true
                }
            }]
        }
      }
  }),

  mounted () {
    var unit = this.unit ? this.unit : '';

    this.options.tooltips.callbacks.label = (item) => `${item.yLabel} ${unit}`;

    this.renderChart(this.chartdata, this.options)
  }
}
</script>

<style>
</style>