import React, { Component } from "react";
import CanvasJSReact from "../../canvasjs.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
function Graph() {
  {
    const options = {
      exportEnabled: true,
      animationEnabled: true,
      title: {
        text: "Scores",
      },
      data: [
        {
          type: "pie",
          startAngle: 75,
          toolTipContent: "<b>{label}</b>: {y}%",
          showInLegend: "true",
          legendText: "{label}",
          indexLabelFontSize: 16,
          indexLabel: "{label} - {y}%",
          dataPoints: [
            { y: 18, label: "Data Structures" },
            { y: 49, label: "Internet of Things" },
            { y: 9, label: "Neural Networks" },
            { y: 5, label: "Software Engg" },
            { y: 19, label: "PPL" },
          ],
        },
      ],
    };
    return (
      <div>
        <CanvasJSChart
          options={options}
          /* onRef={ref => this.chart = ref} */
        />
        {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
      </div>
    );
  }
}
export default Graph;
