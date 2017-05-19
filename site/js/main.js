function graph () {
  var graphData = [{data: [ [1, 405], [2, 360], [3, 380], [4, 400], [5, 415], [6, 400], [7, 800], [8, 520], [9, 435], [10, 400] ],
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
          tick: 2
      },
      yaxis: {
          tickSize: 100
      }
  });

  $.plot($('#graph-bars'), graphData, {
    series: {
        bars: {
            show: true,
            barWidth: .9,
            align: 'center'
        },
        shadowSize: 0
    },
    grid: {
        color: '#646464',
        borderColor: 'transparent',
        borderWidth: 0,
        hoverable: true
    },
    xaxis: {
        tickColor: 'transparent',
        tick: 2
    },
    yaxis: {
        tickSize: 200
    }
});

$('#graph-bars').hide();

$('#lines').on('click', function (e) {
    $('#bars').removeClass('active');
    $('#graph-bars').fadeOut();
    $(this).addClass('active');
    $('#graph-lines').fadeIn();
    e.preventDefault();
});

$('#bars').on('click', function (e) {
    $('#lines').removeClass('active');
    $('#graph-lines').fadeOut();
    $(this).addClass('active');
    $('#graph-bars').fadeIn().removeClass('hidden');
    e.preventDefault();
});

}

function showTooltip(x, y, contents) {
    $('<div id="tooltip">' + contents + '</div>').css({
        top: y - 16,
        left: x + 20
    }).appendTo('body').fadeIn();
}

var previousPoint = null;

$('#graph-lines, #graph-bars').bind('plothover', function (event, pos, item) {
    if (item) {
        if (previousPoint != item.dataIndex) {
            previousPoint = item.dataIndex;
            $('#tooltip').remove();
            var x = item.datapoint[0],
                y = item.datapoint[1];
                showTooltip(item.pageX, item.pageY, y + 'kr kostade det ' + x + ' maj');
        }
    } else {
        $('#tooltip').remove();
        previousPoint = null;
    }
});
