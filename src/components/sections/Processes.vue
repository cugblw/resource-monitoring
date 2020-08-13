<template>
  <div>
    <div id="process" class></div>
  </div>
</template>

<script>
  export default {
    name: "process",
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
              data: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
              axisLabel: {
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
              data: [5, 20, 16, 10, 10, 20, 6, 15, 18, 34],
              label: {
                show: true,
                formatter: "{c} %"
              },
              itemStyle: {
                normal: {
                  //这里是重点
                  color: function (params) {
                    //注意，如果颜色太少的话，后面颜色不会自动循环，最好多定义几个颜色
                    var colorList = [
                      "#25ced1",
                      "#92e7e8",
                      "#FFFFFF",
                      "#FCEADE",
                      "#FEBA9D",
                      "#ff8a5b",
                      "#EA526F",
                      "#EE7088"
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
        // 使用刚指定的配置项和数据显示图表。
        myProcessChart.setOption(option);
        window.addEventListener("resize", () => {
          myProcessChart.resize();
        })
      }
    },
    mounted() {
      this.drawProcessChart();
    }
  };
</script>

<style scoped>
  div {
    width: 100%;
    height: 300px;
  }
</style>