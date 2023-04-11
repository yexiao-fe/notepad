import React, { Component } from "react";
// 引入ECharts主模块
import * as echarts from "echarts/lib/echarts";
// 引入折线图需要的模块
import "echarts/lib/chart/line";
import "echarts/lib/chart/bar";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/toolbox";
import "echarts/lib/component/legend";
import "echarts/lib/component/grid";
const initData = [
  { name: "2020-11", start: "2020-11-17", end: "2020-11-23" },
  { name: "2020-12", start: "2020-12-16", end: "2020-12-21" },

  { name: "2021-01", start: "2021-01-18", end: "2021-01-23" },
  { name: "2021-02", start: "2021-02-25", end: "2021-03-02" },
  { name: "2021-03", start: "2021-03-27", end: "2021-04-02" },
  { name: "2021-04", start: "2021-04-30", end: "2021-05-05" },
  { name: "2021-06", start: "2021-06-01", end: "2021-06-06" },
  { name: "2021+06", start: "2021-06-29", end: "2021-07-04" },
  { name: "2021-07", start: "2021-07-27", end: "2021-08-01" },
  { name: "2021-08", start: "2021-08-29", end: "2021-09-04" },
  { name: "2021-10", start: "2021-10-04", end: "2021-10-10" },
  { name: "2021-11", start: "2021-11-02", end: "2021-11-07" },
  { name: "2021-12", start: "2021-12-02", end: "2021-12-07" },
  { name: "2021+12", start: "2021-12-30", end: "2022-01-05" },

  { start: "2022-01-28", end: "2022-02-07" },
  { start: "2022-02-27", end: "2022-03-05" },
  { start: "2022-03-26", end: "2022-04-01" },
  { start: "2022-04-26", end: "2022-05-02" },
  { start: "2022-06-02", end: "2022-06-07" },
  { start: "2022-07-02", end: "2022-07-08" },
  { start: "2022-07-29", end: "2022-08-04" },
  { start: "2022-08-29", end: "2022-09-04" },
  { start: "2022-10-01", end: "2022-10-07" },
  { start: "2022-10-30", end: "2022-11-06" },
  { start: "2022-11-26", end: "2022-12-02" },
  { start: "2022-12-22", end: "2022-12-28" },

  { start: "2023-01-24", end: "2023-01-30" },
  { start: "2023-02-23", end: "2023-03-01" },
  { start: "2023-03-30", end: "2023-04-05" },
];

class App extends Component {
  // 初始化状态
  state = {
    sourceData: [],
  };
  async componentDidMount() {
    this.setState(() => {
      return {
        sourceData: initData, //更新react组件的state数据
      };
    });
    let xData = [];
    let barData = [];
    let lineData = [];
    const dayTime = 3600 * 24 * 1000;
    initData.forEach((v, i) => {
      xData.push(v.start);
      const start = new Date(v.start);
      const end = new Date(v.end);
      const nexStart = new Date(initData[i + 1]?.start);
      barData.push((end - start) / dayTime + 1);
      let item = (nexStart - start) / dayTime;
      if (item&&(item<21 || item>35)) {
        item = {
            value: item,
            label:{color:'red'}
        }
      }
      lineData.push(item ? item : 0);
    });
    // 初始化Echarts实例，将其挂载到id为main的dom元素上展示
    let myChart = echarts.init(document.getElementById("main"));
    // 绘制Echarts实例所需要的数据
    myChart.setOption({
      tooltip: {
        trigger: "axis",
        axisPointer: {
        //   type: "cross",
          crossStyle: {
            color: "#999",
          },
        },
      },
      toolbox: {
        feature: {
          //   dataView: { show: true, readOnly: false },
          magicType: { show: true, type: ["line", "bar"] },
          restore: { show: true },
          saveAsImage: { show: true },
        },
      },
      legend: {
        data: ["时长", "周期"],
      },
      xAxis: [
        {
          type: "category",
          data: xData,
          axisPointer: {
            type: "shadow",
          },
        },
      ],
      yAxis: [
        {
          type: "value",
          name: "时长/周期",
          min: 0,
          max: 50,
          interval: 5,
          axisLabel: {
            formatter: "{value} 天",
          },
        },
      ],
      series: [
        {
          name: "时长",
          type: "bar",
          tooltip: {
            valueFormatter: function (value) {
              return value + " 天";
            },
          },
          data: barData,
        },
        {
          name: "周期",
          type: "line",
          label: {
            show: true,
            position: 'top',
          },
          tooltip: {
            valueFormatter: function (value) {
              return value + " 天";
            },
          },
          data: lineData,
        },
      ],
    });
  }
  render() {
    //渲染需要陈放Echart实例的容器元素
    return (
      <div>
          <div id="main" style={{ height: 350 }}>
                {" "}
            </div>
            <h4></h4>
      </div>
    );
  }
}
export default App;
