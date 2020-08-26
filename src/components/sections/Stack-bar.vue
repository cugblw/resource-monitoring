<template>
  <div>
    <div id="disk-stack"></div>
    <span>
      <font-awesome-icon :icon="['fas', 'user-plus']"></font-awesome-icon>
      <h5>磁盘 0&nbsp;&nbsp;&nbsp;&nbsp;</h5>
      <h6>
        Input：{{ this.diskInput1 + " mb/s" }} &nbsp;&nbsp; Output：{{
          this.diskOutput1 + " mb/s"
        }}
      </h6>
    </span>
    <el-divider></el-divider>
    <span>
      <font-awesome-icon
        style="float: left;"
        :icon="['fas', 'user-plus']"
      ></font-awesome-icon>
      <h5>磁盘 1&nbsp;&nbsp;&nbsp;&nbsp;</h5>
      <h6>
        Input：{{ this.diskInput2 + " mb/s" }} &nbsp;&nbsp; Output：{{
          this.diskOutput2 + " mb/s"
        }}
      </h6>
    </span>
  </div>
</template>

<script>
import { getDiskIO } from "../../monitoring-data";
import { getDiskInfo } from "../../monitoring-data";

export default {
  name: "disk-stack",
  data() {
    return {
      diskInput1: 0,
      diskOutput1: 0,
      diskInput2: 0,
      diskOutput2: 0
    };
  },
  methods: {
    drawStackChart() {
      // 基于准备好的dom，初始化echarts实例
      // document.getElementById("disk-stack").style.display = "block";
      let myStackChart = this.$echarts.init(
        document.getElementById("disk-stack")
      );
      // 指定图表的配置项和数据
      let option = {
        title: {
          text: "磁盘 I/O",
          icon: "",
          textStyle: {
            fontSize: 20, // 字体大小
            color: "white", // 字体颜色
            margin: 20
          },
          left: 10,
          top: 10
        },
        tooltip: {
          formatter: "{a0}:{c0}G"
        },
        xAxis: {
          // type: 'value',
          axisLine: {
            show: false
          },
          splitLine: {
            show: false
          },
          axisLabel: { show: false },
          axisTick: { show: false }
        },
        yAxis: {
          type: "category",
          // data: ["C:", "D:", "E:", "F:"],
          data: null,
          inverse: true,
          minInterval: 50,
          axisLabel: {
            textStyle: {
              fontSize: 16, //字体大小
              color: "white" //字体颜色
            }
          },
          axisLine: {
            show: false
          },
          axisTick: { show: false }
        },
        grid: {
          left: "5%",
          top: "15%",
          // width: "auto",
          // height: "auto",
          // bottom: "5%",
          containLabel: true
        },
        series: [
          {
            name: "已使用",
            type: "bar",
            stack: "总大小",
            // data: [80, 200, 300, 200],
            data: null,
            barWidth: 40,
            label: {
              show: true,
              position: "inside",
              formatter: "{c} G"
            },
            itemStyle: {
              color: "#2ec4b6"
            }
          },
          {
            name: "空闲",
            type: "bar",
            stack: "总大小",
            // data: [120, 300, 200, 200],
            data: null,
            label: {
              show: true,
              position: "inside",
              color: "#9e0059",
              formatter: "{c} G"
            },
            itemStyle: {
              color: "#ffffff"
            }
          }
        ]
      };

      (async function() {
        let data = await getDiskInfo();
        let driveName = [];
        let driveUsed = [];
        let driveFree = [];

        for (let i = 0; i < data.length; i++) {
          driveName.push(data[i].device_name.replace("\\", ""));
          driveFree.push((data[i].free / (1024 * 1024 * 1024)).toFixed(0));
          driveUsed.push((data[i].used / (1024 * 1024 * 1024)).toFixed(0));
        }

        option.yAxis.data = driveName;
        option.series[0].data = driveUsed;
        option.series[1].data = driveFree;
        myStackChart.setOption(option, true);
      })();

      // 使用刚指定的配置项和数据显示图表。
      window.addEventListener("resize", () => {
        myStackChart.resize();
      });
      // myStackChart.setOption(option);
    },
    async getDiskIOData() {
      let data = await getDiskIO();
      this.diskInput1 = (data[0].write_bytes / 1048576).toFixed(1);
      this.diskOutput1 = (data[0].read_bytes / 1048576).toFixed(1);
      this.diskInput2 = (data[1].write_bytes / 1048576).toFixed(1);
      this.diskOutput2 = (data[1].read_bytes / 1048576).toFixed(1);
    }
  },
  mounted() {
    this.drawStackChart();
    setInterval(this.getDiskIOData, 1000);
  },
  destroyed() {
    clearInterval(this.setInterval);
  }
};
</script>

<style scoped>
#disk-stack {
  width: 100%;
  height: 90%;
  display: inline-flexbox;
  margin: 0px 0px -40px 0px;
}

div {
  width: 100%;
  height: 100%;
  /* padding: 0%; */
  /* margin-bottom: -20px; */
  /* display: inline; */
  display: inline-flexbox;
  /* overflow: auto; */
  /* margin: 0px 0px -70px 0px; */
}

span {
  display: flex;
  /* float: left; */
  align-content: left;
  text-align: left;
  align-items: center;
  align-items: left;
  margin-left: 50px;
  /* float: right */
}

* {
  margin: 0;
  padding: 0;
}

.el-divider--horizontal {
  margin: 10px;
  background: 0;
  width: auto;
  height: 1px;
  border-top: 1px dashed #e8eaec;
}
</style>
