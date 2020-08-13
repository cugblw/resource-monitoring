<template>
  <div>
    <div id="disk" class></div>
  </div>
</template>

<script>
  export default {
    name: "disk",
    methods: {
      drawDiskChart() {
        // 基于准备好的dom，初始化echarts实例
        let myDiskChart = this.$echarts.init(document.getElementById("disk"));
        // 指定图表的配置项和数据
        let option = {
          title: {
            text: "磁盘 I/O",
            textStyle: {
              fontSize: 20, // 字体大小
              color: "white", // 字体颜色
              margin: 20
            },
            left: 10,
            top: 10
          },

          angleAxis: {
            type: 'category',
            data: ['C盘', 'D盘', 'E盘'],
            axisLabel: {
              show: true,
              color: '#eeeeee'
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: '#e63462',
                width: 3
              }
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: 'red',
                width: 1
              }
            }
          },
          polar: {
            radius: "70%",
          },
          radiusAxis: {
            splitNumber: 5,
            axisLabel: {
              show: true,
              color: '#eeeeee'
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: '#e5e5e5',
                width: 2
              }
            },
            axisLine: {
              show: false,
              lineStyle: {
                color: 'blue',
                width: 3
              }
            }
          },
          tooltip: {
            textStyle: {
              color: "azure",
              fontSize: 15
            }
          },
          series: [
            {
              type: 'bar',
              data: [600, 500, 800],
              coordinateSystem: 'polar',
              name: '总共',
              stack: 'a',
              itemStyle: {
                normal: {
                  color: '#f9627d',
                  opacity: '0.7'
                }
              }
            },
            {
              type: 'bar',
              data: [300, 300, 500],
              coordinateSystem: 'polar',
              name: '空闲',
              stack: 'a',
              itemStyle: {
                normal: {
                  color: '#ffba49',
                  opacity: '0.7'
                },
              }
            },
            {
              type: 'bar',
              data: [300, 200, 300],
              coordinateSystem: 'polar',
              name: '已使用',
              stack: 'a',
              itemStyle: {
                normal: {
                  color: '#20a39e',
                  opacity: '0.7'
                }
              },
            }],
          axisTick: { show: true },
          legend: {
            icon: "circle",
            orient: "vertical",
            right: 10,
            bottom: 5,
            show: true,
            data: ['已使用', '空闲', '总共'],
            textStyle: { color: 'azure' },
          }
        };

        // 使用指定的配置项和数据显示图表。
        myDiskChart.setOption(option);
        window.addEventListener("resize", () => {
          myDiskChart.resize();
        })
      }
    },
    mounted() {
      this.drawDiskChart();
    }
  }
</script>

<style scoped>
  div {
    width: 100%;
    height: 300px;
  }
</style>