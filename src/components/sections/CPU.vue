<template>
  <div>
    <div id="cpu" class></div>
  </div>
</template>

<script>
  export default {
    name: "cpu",
    methods: {
      drawCPUChart() {
        // 基于准备好的dom，初始化echarts实例
        let myCPUChart = this.$echarts.init(document.getElementById("cpu"));
        // 指定图表的配置项和数据
        let option = {
          title: {
            text: "CPU使用率",
            textStyle: {
              fontSize: 20, // 字体大小
              color: "white", // 字体颜色
              margin: 20
            },
            left: 10,
            top: 10
          },
          tooltip: {
            formatter: '{a} <br/>{b} : {c}%'
          },
          // toolbox: {
          //   feature: {
          //     restore: {},
          //     saveAsImage: {}
          //   }
          // },
          series: [
            {
              name: 'CPU使用率',
              type: 'gauge',
              radius: '80%',
              detail: { formatter: '{value}%' },
              data: [{ value: 10, name: '使用率' }]
            }
          ]
        };

        setInterval(function () {
          option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
          myCPUChart.setOption(option, true);
        }, 2000);

        // 使用指定的配置项和数据显示图表。
        myCPUChart.setOption(option);
        window.addEventListener("resize", () => {
          myCPUChart.resize();
        })
      }
    },
    mounted() {
      this.drawCPUChart();
    }
  }
</script>

<style scoped>
  div {
    width: 100%;
    height: 100%;
  }
</style>