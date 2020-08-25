<template>
  <div>
    <div id="memory" class></div>
  </div>
</template>

<script>
  import { getMemoryData } from "../../monitoring-data";
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
            formatter: function () {
              return "已使用：" + option.series[0].data[0] + "%" + "<br/>空闲:" + option.series[1].data[0] + "%";
            },
            axisPointer: {
              type: "cross",
              label: {
                backgroundColor: "#6a7985"
              }
            }
          },
          legend: {
            data: ["空闲", "已使用"],
            textStyle: { color: "azure" }
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
              splitNumber: 7,
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
          textStyle: {
            //  使用全局文本样式，详见TEXTSTYLE
            // fontWeight: 'bolder',
            fontSize: 15,
            // fontStyle: 'italic',
            color: "white"
          },
          series: [
            {
              name: "已使用",
              type: "line",
              // stack: "总量",
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
              data: null
            },
            {
              name: "空闲",
              type: "line",
              // stack: "总量",
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
              data: null
            }
          ]
        };
        let memoryUsed = [];
        let memoryFree = [];

        this.setInterval = setInterval(async function () {
          let data = await getMemoryData();

          let used = ((data.used / data.total) * 100).toFixed(1);
          let free = ((data.free / data.total) * 100).toFixed(1);
          memoryUsed.push(used);
          memoryFree.push(free);
          if (memoryUsed.length > 7 && memoryFree.length > 7) {
            memoryUsed.shift();
            memoryFree.shift();
          }

          option.series[0].data = memoryUsed;
          option.series[1].data = memoryFree;
          myMemoryChart.setOption(option, true);
        }, 1000);

        // 使用指定的配置项和数据显示图表。
        // myMemoryChart.setOption(option);
        window.addEventListener("resize", () => {
          myMemoryChart.resize();
        });
      }
    },
    mounted() {
      this.drawMemoryChart();
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