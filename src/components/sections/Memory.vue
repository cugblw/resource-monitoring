<template>
  <div>
    <div id="memory" class></div>
  </div>
</template>

<script>
  export default {
    name: "memory",
    methods: {
      drawMemoryChart() {
        // 基于准备好的dom，初始化echarts实例
        let myMemoryChart = this.$echarts.init(document.getElementById("memory"));
        // 指定图表的配置项和数据
        let option = {
          title: {
            text: "内存使用率",
            textStyle: {
              fontSize: 20, // 字体大小
              color: "white", // 字体颜色
              margin: 20
            },
            left: 10,
            top: 10
          },
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "cross",
              label: {
                backgroundColor: "#6a7985"
              }
            }
          },
          legend: {
            data: ["已使用", "空闲"],
            textStyle: { color: 'azure' },
          },
          // // toolbox: {
          // //   feature: {
          // //     saveAsImage: {}
          // //   }
          // },
          grid: {
            left: "3%",
            right: "4%",
            bottom: "3%",
            containLabel: true
          },
          xAxis: [
            {
              type: "category",
              boundaryGap: false,
              data: ["0 S", "1 S ", "2 S", "3 S", "4 S", "5 S", "6 S"]
            }
          ],
          yAxis: [
            {
              type: "value"
            }
          ],
          grid: {
            left: "5%",
            right: "15%",
            bottom: "5%",
            top: "25%",
            containLabel: true
          },
          textStyle: {       //  使用全局文本样式，详见TEXTSTYLE
            // fontWeight: 'bolder',
            fontSize: 15,
            // fontStyle: 'italic',
            color: "white"
          },
          series: [
            {
              name: "已使用",
              type: "line",
              stack: "总量",
              lineStyle: {
                color: "red"
              },
              areaStyle: {
                color: "blue",
                opacity: 0.3
              },
              label: {
                normal: {
                  show: true,
                  position: "top"
                }
              },
              data: [120, 132, 101, 134, 90, 230, 210]
            },

            {
              name: "空闲",
              type: "line",
              stack: "总量",
              label: {
                normal: {
                  show: true,
                  position: "top",
                  color: "red"
                }
              },
              lineStyle: {
                color: "red"
              },
              areaStyle: {
                color: "lightgreen",
                opacity: 0.3
              },
              data: [820, 932, 901, 934, 1290, 1330, 1320]
            }
          ]
        };

        // 使用指定的配置项和数据显示图表。
        myMemoryChart.setOption(option);
        window.addEventListener("resize", () => {
          myMemoryChart.resize();
        })
      }
    },
    mounted() {
      this.drawMemoryChart()
    }
  }
</script>

<style scoped>
  div {
    width: 100%;
    height: 100%;
  }
</style>