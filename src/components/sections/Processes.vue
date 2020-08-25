<template>
  <div>
    <div id="process" class></div>
  </div>
</template>

<script>
import { getProcessList } from "../../monitoring-data";

export default {
  name: "process",
  data() {
    return {};
  },
  methods: {
    drawProcessChart() {
      // 基于准备好的dom，初始化echarts实例
      let myProcessChart = this.$echarts.init(
        document.getElementById("process")
      );
      // 指定图表的配置项和数据
      let option = {
        title: {
          text: "进程 Top 10",
          textStyle: {
            fontSize: 20, // 字体大小
            color: "white", // 字体颜色
            margin: 20
          },
          left: 10,
          top: 10
        },
        tooltip: {},
        // legend: {
        //   top: 10,
        //   // data: ["进程"],
        //   textStyle: {
        //     fontSize: 16, // 字体大小
        //     color: "white", // 字体颜色
        //   }
        // },
        grid: {
          left: "5%",
          right: "15%",
          bottom: "5%",
          top: "25%",
          containLabel: true
        },
        xAxis: [
          {
            name: "进程名称",
            nameTextStyle: {
              fontSize: 12, //字体大小
              color: "white" //字体颜色
            },
            // data: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
            data: null,
            axisLabel: {
              rotate: 30,
              textStyle: {
                fontSize: 12, //字体大小
                color: "white" //字体颜色
              }
            },
            axisLine: {
              lineStyle: {
                color: "#773344",
                width: 2 //这里是为了突出显示加上的
              }
            }
          }
        ],
        yAxis: [
          {
            name: "CPU使用率",
            type: "value",
            nameTextStyle: {
              fontSize: 12, //字体大小
              color: "white" //字体颜色
            },
            axisLabel: {
              show: true,
              interval: "auto",
              formatter: "{value} %",
              textStyle: {
                fontSize: 16, //字体大小
                color: "white" //字体颜色
              }
            },
            axisLine: {
              lineStyle: {
                color: "#773344",
                width: 2 //这里是为了突出显示加上的
              }
            }
          }
        ],
        series: [
          {
            name: "进程",
            type: "bar",
            data: null,
            label: {
              show: true, //开启显示
              position: "top", //在上方显示
              formatter: "{c} %"
            },
            itemStyle: {
              normal: {
                //这里是重点
                color: function(params) {
                  //注意，如果颜色太少的话，后面颜色不会自动循环，最好多定义几个颜色
                  var colorList = [
                    "#C1232B",
                    "#B5C334",
                    "#FCCE10",
                    "#E87C25",
                    "#27727B",
                    "#FE8463",
                    "#9BCA63",
                    "#FAD860",
                    "#F3A43B",
                    "#60C0DD",
                    "#D7504B",
                    "#C6E579",
                    "#F4E001",
                    "#F0805A",
                    "#26C0C0"
                  ];
                  var index;
                  //给大于颜色数量的柱体添加循环颜色的判断
                  if (params.dataIndex >= colorList.length) {
                    index = params.dataIndex - colorList.length;
                    return colorList[index];
                  }
                  return colorList[params.dataIndex];
                }
              }
            }
          }
        ]
      };

      this.setInterval = setInterval(async function() {
        let processNameArray = [];
        let processCpuUsageArray = [];
        let data = await getProcessList();

        data = data
          // .sort(function(a, b) {
          //   return a.cpu_percent < b.cpu_percent ? 1 : -1; // 按CPU使用率从大到小排序
          // })
          .slice(0, 10);

        for (let i = 0; i < data.length; i++) {
          processNameArray.push(data[i].name.replace(".exe", "").slice(0, 10));
          processCpuUsageArray.push(data[i].cpu_percent);
        }

        option.xAxis[0].data = processNameArray;
        option.series[0].data = processCpuUsageArray;
        myProcessChart.setOption(option, true);
      }, 1000);

      // 使用刚指定的配置项和数据显示图表。
      // myProcessChart.setOption(option);
      window.addEventListener("resize", () => {
        myProcessChart.resize();
      });
    }
  },
  mounted() {
    this.drawProcessChart();
  },
  destroyed() {
    clearInterval(this.setInterval);
  }
};
</script>

<style scoped>
div {
  width: 100%;
  height: 350px;
}
</style>
