import { getInstanceByDom, type EChartsOption } from 'echarts';
import { init } from 'echarts';
interface WindproParam {
    HourBaseProduct: Array<number>;
    HourWindSpeed: Array<number>;
    maxWind?: Number;
    maxProduct?: Number;
    tag: "init" | "update";
  }
  

export function initCharts(data : WindproParam){
    const windProOptions: EChartsOption = {
        darkMode:true,
        //backgroundColor:"#003951",
        grid:{
            show:false,
            top:'23%',
            right:'5%',
            // bottom:'5%',
            left:'5%'
        },
        tooltip: {
            trigger: 'axis',
        },
        toolbox: {
            feature: {
            dataView: { 
                show: true,
                readOnly: false, 
                title: "数据视图",
                lang: ["数据一览", "返回", "刷新"]
            },
            magicType: { 
                show: true, 
                type: ['line', 'bar'], 
                title: {
                    line:"切换为折线图",
                    bar:"切换为柱状图"
                }
            },
            restore: { show: true, title: "刷新" },
            saveAsImage: { 
                show: true, 
                title: "保存为图片",
                name:"文件名Test"  //保存文件的名称
            },
            },
        },
        legend: {
            data: ["发电量", '风速']
        },
        xAxis: [
            {
            type: 'category',
            data: ["0 时", "1 时", "2 时", "3 时",
            "4 时", "5 时", "6 时", "7 时",
            "8 时", "9 时", "10 时", "11 时",
            "12 时", "13 时", "14 时", "15 时",
            "16 时", "17 时", "18 时", "19 时",
            "20 时", "21 时", "22 时", "23 时"],
            axisPointer: {
                type: 'shadow'
            },
            splitLine: {
                show:true,
                lineStyle: {
                 type: 'dashed'
                }
            },
        }
        ],
        yAxis: [
            {
            type: 'value',
            name: '风速(m/s)',
            min: 0,
            max: 50,
            interval: 10,
            axisLabel: {
                formatter: '{value}'
            },
            splitLine : {
                show: true,
                interval: "auto",
                lineStyle: {
                    width: 0.25,
                    type: "solid"
                }
            }
            },
            {
            type: 'value',
            name: '发电量(kWh)',
            min: 0,
            max: 2500,
            interval: 500,
            axisLabel: {
                formatter: '{value}'
            },
            splitLine : {
                show: true,
                interval: "auto",
                lineStyle: {
                    width: 0.25,
                    type: "solid"
                }
            }
            }
        ],
        series: [
            {
            yAxisIndex: 1,
            name: '发电量',
            type: 'bar',
            tooltip: {
                valueFormatter: function (value) {
                return value as number + ' kWh';
                }
            },
            data: data.HourBaseProduct as number[]
            },
            {
            name: '风速',
            type: 'line',
            yAxisIndex: 0,
            tooltip: {
                valueFormatter: function (value) {
                return value as number + ' m/s';
                }
            },
            data: data.HourWindSpeed as number[]
            }
        ]
    };
    const chart = getInstanceByDom(document.getElementById('chartNew') as HTMLElement)
    if(chart){
        chart?.setOption(windProOptions)
    }else if(chart == null){
        const chartNew = init(document.getElementById('chartNew') as HTMLElement);
        windProOptions && chartNew.setOption(windProOptions);
    }
}
export type {WindproParam}