<template>
  <div>
    <div id="diskio" class></div>
  </div>
</template>

<script>
import { getDiskInfo } from "../../monitoring-data";

export default {
  name: "diskio",
  methods: {
    drawDiskChart() {
      // 基于准备好的dom，初始化echarts实例
      let myDiskChart = this.$echarts.init(document.getElementById("diskio"));
      // 指定图表的配置项和数据
      let option = {
        title: {
          text: "磁盘使用情况",
          textStyle: {
            fontSize: 20, // 字体大小
            color: "white", // 字体颜色
            margin: 20
          },
          left: 10,
          top: 10
        },

        angleAxis: {
          type: "category",
          // data: ["C盘", "D盘", "E盘"],
          data: null,
          axisLabel: {
            show: true,
            color: "#eeeeee"
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "#e63462",
              width: 3
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: "red",
              width: 1
            }
          }
        },
        polar: {
          radius: "70%"
        },
        radiusAxis: {
          splitNumber: 5,
          axisLabel: {
            show: true,
            color: "#eeeeee"
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: "#e5e5e5",
              width: 2
            }
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: "blue",
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
            type: "bar",
            // data: [600, 500, 800],
            data: null,
            coordinateSystem: "polar",
            name: "总共",
            stack: "a",
            itemStyle: {
              normal: {
                color: "#f9627d",
                opacity: "0.7"
              }
            }
          },
          {
            type: "bar",
            // data: [300, 300, 500],
            data: null,
            coordinateSystem: "polar",
            name: "空闲",
            stack: "a",
            itemStyle: {
              normal: {
                color: "#ffba49",
                opacity: "0.7"
              }
            }
          },
          {
            type: "bar",
            // data: [300, 200, 300],
            data: null,
            coordinateSystem: "polar",
            name: "已使用",
            stack: "a",
            itemStyle: {
              normal: {
                color: "#20a39e",
                opacity: "0.7"
              }
            }
          }
        ],
        axisTick: { show: true },
        legend: {
          icon: "circle",
          orient: "vertical",
          right: 10,
          bottom: 5,
          show: true,
          data: ["已使用", "空闲", "总共"],
          textStyle: { color: "azure" }
        }
      };

      (async function() {
        let data = await getDiskInfo();
        let driveName = [];
        let driveUsed = [];
        let driveFree = [];
        let driveSize = [];
        for (let i = 0; i < data.length; i++) {
          driveName.push(data[i].device_name.replace("\\", ""));
          driveFree.push((data[i].free / (1024 * 1024 * 1024)).toFixed(0));
          driveUsed.push((data[i].used / (1024 * 1024 * 1024)).toFixed(0));
          driveSize.push((data[i].size / (1024 * 1024 * 1024)).toFixed(0));
        }

        option.angleAxis.data = driveName;
        option.series[0].data = driveSize;
        option.series[1].data = driveFree;
        option.series[2].data = driveUsed;

        myDiskChart.setOption(option, true);
      })();

      // 使用指定的配置项和数据显示图表。
      // myDiskChart.setOption(option);
      window.addEventListener("resize", () => {
        myDiskChart.resize();
      });
    }
  },
  mounted() {
    this.drawDiskChart();
  }
};
</script>

<style scoped>
div {
  width: 100%;
  height: 350px;
}
</style>
