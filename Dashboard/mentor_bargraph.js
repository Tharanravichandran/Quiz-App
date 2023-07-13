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
        text: "Students quiz Scores",
      },
      legend: {
        verticalAlign: "top",
        horizontalAlign: "center",
      },
      
    data: [{
        type: "bar",
        
        dataPoints: [
            { y:  5, label: "Quiz 1" },
            { y:  10, label: "Quiz 2" },
            { y:  15, label: "Quiz 3" },
            { y:  20, label: "Quiz 4" },
            { y:  25, label: "Quiz 5" }        ],
        
    },],
    data: [{
      type: "bar",
      name: "no of students above avg",
      showInLegend: true,
      dataPoints: [
        { y:  5, label: "Quiz 1" },
            { y:  10, label: "Quiz 2" },
            { y:  15, label: "Quiz 3" },
            { y:  20, label: "Quiz 4" },
            { y:  25, label: "Quiz 5" }
      ],
      
  },{
    type: "bar",
    name: "no of students below avg",
      showInLegend: true,
    dataPoints: [
      { y:  5, label: "Quiz 1" },
            { y:  10, label: "Quiz 2" },
            { y:  15, label: "Quiz 3" },
            { y:  20, label: "Quiz 4" },
            { y:  25, label: "Quiz 5" }
    ],
    
}
]
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
