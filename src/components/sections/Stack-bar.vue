<template>
    <div>
        <div id="disk-stack" class></div>
    </div>
</template>

<script>
    export default {
        name: "disk-stack",
        methods: {
            drawStackChart() {
                // 基于准备好的dom，初始化echarts实例
                let myStackChart = this.$echarts.init(
                    document.getElementById("disk-stack")
                );
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
                myStackChart.setOption(option);
                window.addEventListener("resize", () => {
                    myStackChart.resize();
                })
            }
        },
        mounted() {
            this.drawStackChart();
        }
    };
</script>

<style scoped>
    div {
        width: 100%;
        height: 100%;
    }
</style>