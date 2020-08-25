<template>
  <div>
    <div id="cpu"></div>
  </div>
</template>

<script>
  import { getCpuData } from "../../monitoring-data";

  export default {
    name: "cpu",
    data() {
      return {
        total: 0,
        user: 0,
        system: 0
      };
    },
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
            formatter: "{a} <br/>{b} : {c}%"
          },
          // toolbox: {
          //   feature: {
          //     restore: {},
          //     saveAsImage: {}
          //   }
          // },
          series: [
            {
              // startAngle: 225,
              // endAngle: -45,
              name: "CPU使用率",
              type: "gauge",
              radius: "85%",
              detail: { formatter: "{value}%" },
              data: [{ value: 0, name: "使用率", color: "azure" }],
              title: {
                //设置仪表盘中间显示文字样式
                textStyle: {
                  // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                  fontWeight: "bolder",
                  fontSize: 15,
                  // fontStyle: 'italic',
                  color: "white"
                }
              },
              markPoint: {
                symbol: "circle",
                symbolSize: 5,
                data: [
                  //跟你的仪表盘的中心位置对应上，颜色可以和画板底色一样
                  { x: "center", y: "center", itemStyle: { color: "#FFF" } }
                ]
              }
            }
          ]
        };

        this.setInterval = setInterval(async function () {
          let data = await getCpuData();
          this.total = data.total;
          this.user = data.user;
          this.system = data.system;

          option.series[0].data[0].value = this.total;
          myCPUChart.setOption(option, true);
        }, 1000);

        // 使用指定的配置项和数据显示图表。
        myCPUChart.setOption(option);
        window.addEventListener("resize", () => {
          myCPUChart.resize();
        });
      }
    },

    mounted() {
      this.drawCPUChart();
      // this.setInterval = setInterval(this.getData, 1000);
    },
    destroyed() {
      clearInterval(this.setInterval);
    }
  };
</script>

<style scoped>
  div {
    width: 100%;
    height: 100%;
  }
</style>