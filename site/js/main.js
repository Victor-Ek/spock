src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js";
src="js/jquery.flot.min.js";

function graph () {
  var graphdata = [{data: [ [6, 1300], [7, 1600], [8, 1900], [9, 2100], [10, 2500], [11, 2200], [12, 2000], [13, 1950], [14, 1900], [15, 2000] ],
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
          borderWidth: 20,
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

  $.plot($('#graph-bars'), graphData, {
  series: {
      bars: {
          show: true,
          barWidth: 0.9,
          align: 'center'
      },
      shadowSize: 0
  },
  grid: {
      color: '#646464',
      borderColor: 'transparent',
      borderWidth: 20,
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
