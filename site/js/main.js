function graph () {
  var graphData = [{data: [ [6, 1300], [7, 1600], [8, 1900], [9, 2100], [10, 2500], [11, 2200], [12, 2000], [13, 1950], [14, 1900], [15, 2000] ],
        color: '#71c73e'}];


        $.plot($('#graph-lines'), graphData, {
      series: {
          points: {
              show: true,
              radius: 5
          },
          lines: {
              show: true
          },
          shadowSize: 0
      },
      grid: {
          color: '#646464',
          borderColor: 'transparent',
          borderWidth: 1,
          hoverable: true
      },
      xaxis: {
          tickColor: 'transparent',
          tickDecimals: 2
      },
      yaxis: {
          tickSize: 1000
      }
  });

}
