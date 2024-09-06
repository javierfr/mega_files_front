import { ChartOptions } from "./polaearea.model";

/**
 * Basic-Polar Area Chart
 */
const basicPolarChart: ChartOptions = {
    series: [14, 23, 21, 17, 15, 10, 12, 17, 21],
    chart: {
        type: 'polarArea',
        height: 350,
    },
    labels: ['Series A', 'Series B', 'Series C', 'Series D', 'Series E', 'Series F', 'Series G', 'Series H', 'Series I'],
    stroke: {
        colors: ['#fff']
    },
    fill: {
        opacity: 0.8
    },
    legend: {
        position: 'bottom'
    },
    colors: ["#038edc", "#51d28c", "#f7cc53", "#f34e4e", "#564ab1", "#5fd0f3"],
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        }
      }
    }]
};

/**
 * Polar-Area Monochrome
 */
const monochromeChart: ChartOptions = {
    series: [42, 47, 52, 58, 65],
    chart: {
      height: 350,
        type: 'polarArea'
    },
    labels: ['Rose A', 'Rose B', 'Rose C', 'Rose D', 'Rose E'],
    fill: {
        opacity: 1
    },
    stroke: {
        width: 1,
        colors: undefined
    },
    yaxis: {
        show: false
    },
    legend: {
        position: 'bottom'
    },
    plotOptions: {
        polarArea: {
            rings: {
                strokeWidth: 0
            },
            spokes: {
                strokeWidth: 0
            },
        }
    },
    theme: {
        mode: 'light',
        palette: 'palette1',
        monochrome: {
            enabled: true,
            shadeTo: 'light',
            color: '#038edc',
            shadeIntensity: 0.6
        }
    }
};

export { basicPolarChart, monochromeChart }
