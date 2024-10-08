/*
Template Name: Dashonic - Admin & Dashboard Template
Author: Pichforest
Website: https://Pichforest.com/
Contact: Pichforest@gmail.com
File: Boxplot Chart init js
*/

var options = {
    series: [
    {
      type: 'boxPlot',
      data: [
        {
          x: 'Jan 2015',
          y: [54, 66, 69, 75, 88]
        },
        {
          x: 'Jan 2016',
          y: [43, 65, 69, 76, 81]
        },
        {
          x: 'Jan 2017',
          y: [31, 39, 45, 51, 59]
        },
        {
          x: 'Jan 2018',
          y: [39, 46, 55, 65, 71]
        },
        {
          x: 'Jan 2019',
          y: [29, 31, 35, 39, 44]
        },
        {
          x: 'Jan 2020',
          y: [41, 49, 58, 61, 67]
        },
        {
          x: 'Jan 2021',
          y: [54, 59, 66, 71, 88]
        }
      ]
    }
  ],
    chart: {
    type: 'boxPlot',
    height: 350,
    toolbar: {
      show: false
    }
  },
  title: {
    text: 'Basic BoxPlot Chart',
    align: 'left',
    style: {
      fontWeight: 500,
    },
  },
  plotOptions: {
    boxPlot: {
      colors: {
        upper: '#038EDC',
        lower: '#5fd0f3'
      }
    }
  }
  };

  var chart = new ApexCharts(document.querySelector("#basic_box"), options);
  chart.render();

  //  Boxplot-Scatter

  var options = {
    series: [
    {
      name: 'Box',
      type: 'boxPlot',
      data: [
        {
          x: new Date('2017-01-01').getTime(),
          y: [54, 66, 69, 75, 88]
        },
        {
          x: new Date('2018-01-01').getTime(),
          y: [43, 65, 69, 76, 81]
        },
        {
          x: new Date('2019-01-01').getTime(),
          y: [31, 39, 45, 51, 59]
        },
        {
          x: new Date('2020-01-01').getTime(),
          y: [39, 46, 55, 65, 71]
        },
        {
          x: new Date('2021-01-01').getTime(),
          y: [29, 31, 35, 39, 44]
        }
      ]
    },
    {
      name: 'Outliers',
      type: 'scatter',
      data: [
        {
          x: new Date('2017-01-01').getTime(),
          y: 32
        },
        {
          x: new Date('2018-01-01').getTime(),
          y: 25
        },
        {
          x: new Date('2019-01-01').getTime(),
          y: 64
        },
        {
          x: new Date('2020-01-01').getTime(),
          y: 27
        },
        {
          x: new Date('2020-01-01').getTime(),
          y: 78
        },
        {
          x: new Date('2021-01-01').getTime(),
          y: 15
        }
      ]
    }
  ],
    chart: {
    type: 'boxPlot',
    height: 350,
    toolbar: {
      show: false
    }
  },
  colors: ['#f1734f' , '#038edc'],
  title: {
    text: 'BoxPlot - Scatter Chart',
    align: 'left',
    style: {
      fontWeight: 500,
    },
  },
  xaxis: {
    type: 'datetime',
    tooltip: {
      formatter: function(val) {
        return new Date(val).getFullYear()
      }
    }
  },
  plotOptions: {
    boxPlot: {
      colors: {
        upper: '#f1734f',
        lower: '#564ab1'
      }
    }
  },
  tooltip: {
    shared: false,
    intersect: true
  }
  };

  var chart = new ApexCharts(document.querySelector("#box_plot"), options);
  chart.render();