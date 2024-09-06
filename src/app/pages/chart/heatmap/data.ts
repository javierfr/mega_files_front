import { ChartOptions } from "./heatmap.model";

/**
 * Series Data
 */
function generateData(count: number, yrange: { max: number; min: number; }) {
  var i = 0;
  var series = [];
  while (i < count) {
    var x = "w" + (i + 1).toString();
    var y =
      Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

    series.push({
      x: x,
      y: y
    });
    i++;
  }
  return series;
}


/**
 * Basic Heatmap Chart
 */
const basicHeatmapChart: ChartOptions = {
  series: [{
    name: 'Metric1',
    data: generateData(18, {
      min: 0,
      max: 90
    })
  },
  {
    name: 'Metric2',
    data: generateData(18, {
      min: 0,
      max: 90
    })
  },
  {
    name: 'Metric3',
    data: generateData(18, {
      min: 0,
      max: 90
    })
  },
  {
    name: 'Metric4',
    data: generateData(18, {
      min: 0,
      max: 90
    })
  },
  {
    name: 'Metric5',
    data: generateData(18, {
      min: 0,
      max: 90
    })
  },
  {
    name: 'Metric6',
    data: generateData(18, {
      min: 0,
      max: 90
    })
  },
  {
    name: 'Metric7',
    data: generateData(18, {
      min: 0,
      max: 90
    })
  },
  {
    name: 'Metric8',
    data: generateData(18, {
      min: 0,
      max: 90
    })
  },
  {
    name: 'Metric9',
    data: generateData(18, {
      min: 0,
      max: 90
    })
  }
  ],
  chart: {
    height: 450,
    type: 'heatmap',
    toolbar: {
      show: false
    }
  },
  dataLabels: {
    enabled: false
  },
  colors: ["#038edc"],
  title: {
    text: 'HeatMap Chart (Single color)',
    style: {
      fontWeight: 500,
    },
  },
};

/**
 * Heatmap - Multiple Series
 */
const multipleSeriesChart: ChartOptions = {
  series: [
    {
      name: 'W1',
      data: generateData(8, {
        min: 0,
        max: 90
      })
    },
    {
      name: 'W2',
      data: generateData(8, {
        min: 0,
        max: 90
      })
    },
    {
      name: 'W3',
      data: generateData(8, {
        min: 0,
        max: 90
      })
    },
    {
      name: 'W4',
      data: generateData(8, {
        min: 0,
        max: 90
      })
    },
    {
      name: 'W5',
      data: generateData(8, {
        min: 0,
        max: 90
      })
    },
    {
      name: 'W6',
      data: generateData(8, {
        min: 0,
        max: 90
      })
    },
    {
      name: 'W7',
      data: generateData(8, {
        min: 0,
        max: 90
      })
    },
    {
      name: 'W8',
      data: generateData(8, {
        min: 0,
        max: 90
      })
    },
    {
      name: 'W9',
      data: generateData(8, {
        min: 0,
        max: 90
      })
    },
    {
      name: 'W10',
      data: generateData(8, {
        min: 0,
        max: 90
      })
    },
    {
      name: 'W11',
      data: generateData(8, {
        min: 0,
        max: 90
      })
    },
    {
      name: 'W12',
      data: generateData(8, {
        min: 0,
        max: 90
      })
    },
    {
      name: 'W13',
      data: generateData(8, {
        min: 0,
        max: 90
      })
    },
    {
      name: 'W14',
      data: generateData(8, {
        min: 0,
        max: 90
      })
    },
    {
      name: 'W15',
      data: generateData(8, {
        min: 0,
        max: 90
      })
    }
  ],
  chart: {
    height: 450,
    type: 'heatmap',
    toolbar: {
      show: false
    }
  },
  dataLabels: {
    enabled: false
  },
  colors: ["#038edc", "#e83e8c", "#f7cc53", "#564ab1", "#51d28c", "#f1734f", "#5fd0f3", "#f34e4e"],
  xaxis: {
    type: 'category',
    categories: ['10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '01:00', '01:30']
  },
  title: {
    text: 'HeatMap Chart (Different color shades for each series)',
    style: {
      fontWeight: 500,
    },
  },
  grid: {
    padding: {
      right: 20
    }
  }
};

/**
 * Heatmap Color Range
 */
const colorRangeChart: ChartOptions = {
  series: [{
    name: 'Jan',
    data: generateData(20, {
      min: -30,
      max: 55
    })
  },
  {
    name: 'Feb',
    data: generateData(20, {
      min: -30,
      max: 55
    })
  },
  {
    name: 'Mar',
    data: generateData(20, {
      min: -30,
      max: 55
    })
  },
  {
    name: 'Apr',
    data: generateData(20, {
      min: -30,
      max: 55
    })
  },
  {
    name: 'May',
    data: generateData(20, {
      min: -30,
      max: 55
    })
  },
  {
    name: 'Jun',
    data: generateData(20, {
      min: -30,
      max: 55
    })
  },
  {
    name: 'Jul',
    data: generateData(20, {
      min: -30,
      max: 55
    })
  },
  {
    name: 'Aug',
    data: generateData(20, {
      min: -30,
      max: 55
    })
  },
  {
    name: 'Sep',
    data: generateData(20, {
      min: -30,
      max: 55
    })
  }
  ],
  chart: {
    height: 350,
    type: 'heatmap',
    toolbar: {
      show: false
    }
  },
  plotOptions: {
    heatmap: {
      shadeIntensity: 0.5,
      radius: 0,
      useFillColorAsStroke: true,
      colorScale: {
        ranges: [{
          from: -30,
          to: 5,
          name: 'Low',
          color: '#038edc'
        },
        {
          from: 6,
          to: 20,
          name: 'Medium',
          color: '#51d28c'
        },
        {
          from: 21,
          to: 45,
          name: 'High',
          color: '#564ab1'
        },
        {
          from: 46,
          to: 55,
          name: 'Extreme',
          color: '#f7cc53'
        }
        ]
      }
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    width: 1
  },
  title: {
    text: 'HeatMap Chart with Color Range',
    style: {
      fontWeight: 500,
    },
  },
  colors: ["#038edc", "#51d28c", "#f34e4e", "#f7cc53"]
};

/**
 * Heatmap - Range Without Shades
 */
const rangeWithoutShadesChart: ChartOptions = {
  series: [{
    name: 'Metric1',
    data: generateData(20, {
      min: 0,
      max: 90
    })
  },
  {
    name: 'Metric2',
    data: generateData(20, {
      min: 0,
      max: 90
    })
  },
  {
    name: 'Metric3',
    data: generateData(20, {
      min: 0,
      max: 90
    })
  },
  {
    name: 'Metric4',
    data: generateData(20, {
      min: 0,
      max: 90
    })
  },
  {
    name: 'Metric5',
    data: generateData(20, {
      min: 0,
      max: 90
    })
  },
  {
    name: 'Metric6',
    data: generateData(20, {
      min: 0,
      max: 90
    })
  },
  {
    name: 'Metric7',
    data: generateData(20, {
      min: 0,
      max: 90
    })
  },
  {
    name: 'Metric8',
    data: generateData(20, {
      min: 0,
      max: 90
    })
  },
  {
    name: 'Metric8',
    data: generateData(20, {
      min: 0,
      max: 90
    })
  }
  ],
  chart: {
    height: 350,
    type: 'heatmap',
    toolbar: {
      show: false
    }
  },
  stroke: {
    width: 0
  },
  plotOptions: {
    heatmap: {
      radius: 30,
      enableShades: false,
      colorScale: {
        ranges: [{
          from: 0,
          to: 50,
          color: '#038edc'
        },
        {
          from: 51,
          to: 100,
          color: '#5fd0f3'
        },
        ],
      },

    }
  },
  dataLabels: {
    enabled: true,
    style: {
      colors: ['#fff']
    }
  },
  xaxis: {
    type: 'category',
  },
  title: {
    text: 'Rounded (Range without Shades)',
    style: {
      fontWeight: 500,
    },
  },
};

export { basicHeatmapChart, multipleSeriesChart, colorRangeChart, rangeWithoutShadesChart }