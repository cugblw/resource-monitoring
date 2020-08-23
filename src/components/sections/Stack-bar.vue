<template>
    <div>
        <span>
            <font-awesome-icon :icon="['fas', 'user-plus']"></font-awesome-icon>
            <h5>磁盘0&nbsp;&nbsp;&nbsp;&nbsp;</h5>
            <h6>Input：{{this.diskInput1}} &nbsp;&nbsp; Output：{{this.diskOutput1}} </h6>
        </span>
        <el-divider></el-divider>
        <span>
            <font-awesome-icon style="float: left;" :icon="['fas', 'user-plus']"></font-awesome-icon>
            <h5>磁盘1&nbsp;&nbsp;&nbsp;&nbsp;</h5>
            <h6>Input：{{this.diskInput2}} &nbsp;&nbsp; Output：{{this.diskOutput2}} </h6>
        </span>
        <div id="disk-stack">
        </div>
    </div>
</template>

<script>
    import { getDiskIO } from "../../monitoring-data";

    export default {
        name: "disk-stack",
        data() {
            return {
                diskInput1: 0,
                diskOutput1: 0,
                diskInput2: 0,
                diskOutput2: 0,
            }
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
                        text: "磁盘使用情况",
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
                        type: 'category',
                        data: ['C:', 'D:', 'E:', 'F:'],
                        inverse: true,
                        minInterval: 500,
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
                        containLabel: true
                    },
                    series: [
                        {
                            name: '已使用',
                            type: 'bar',
                            stack: '总大小',
                            data: [80, 200, 300, 200],
                            barWidth: 40,
                            label: {
                                show: true,
                                position: 'inside',
                                formatter: "{c} G"
                            },
                            itemStyle: {
                                color: "#2ec4b6"
                            }
                        },
                        {
                            name: '空闲',
                            type: 'bar',
                            stack: '总大小',
                            data: [120, 300, 200, 200],
                            label: {
                                show: true,
                                position: 'inside',
                                color: "#9e0059",
                                formatter: "{c} G"
                            },
                            itemStyle: {
                                color: "#ffffff"
                            }
                        },

                    ]
                };
                // 使用刚指定的配置项和数据显示图表。
                window.addEventListener("resize", () => {
                    myStackChart.resize();
                })
                myStackChart.setOption(option);

            },
            async getData() {
                let data = await getDiskIO();
                this.diskInput1 = data[0].write_bytes;
                this.diskOutput1 = data[0].read_bytes;
                this.diskInput2 = data[1].write_bytes;
                this.diskOutput2 = data[1].read_bytes;
            }
        },
        mounted() {
            this.drawStackChart();
            this.getData();
        }
    };
</script>

<style scoped>
    div {
        width: 100%;
        height: 100%;
    }

    span {
        display: flex;
        align-content: left;
        text-align: left;
        align-items: center;
        align-items: left;
        margin-left: 10px;
        /* float: right */
    }

    .el-divider--horizontal {
        margin: 10px;
        background: 0;
        width: auto;
        height: 1px;
        border-top: 1px dashed #e8eaec;
    }
</style>