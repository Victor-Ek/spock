function graph() {
  // Lines
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
      tickSize: 50
    }
  });
  // Lines

  // Bars
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
  // Bars

  //Change Graph
  $('#graph-bars').hide();

  $('#lines').on('click', function(e) {
    $('#bars').removeClass('active');
    $('#graph-bars').fadeOut();
    $(this).addClass('active');
    $('#graph-lines').fadeIn();
    e.preventDefault();
  });

  $('#bars').on('click', function(e) {
    $('#lines').removeClass('active');
    $('#graph-lines').fadeOut();
    $(this).addClass('active');
    $('#graph-bars').fadeIn().removeClass('hidden');
    e.preventDefault();
  });
}
//Change Graph


//Tooltip
function showTooltip(x, y, contents) {
  var new_x = parseInt(x);

  //Fix so tooltip does not go past view width
  window_width = $(window).width();
  if (window_width < 400 && new_x >= 270) {
    $('<div id="tooltip">' + contents + '</div>').css({
      top: y - 16,
      left: x - 175
    }).appendTo('body').fadeIn();
  }
  else if (window_width < 400 && new_x < 280) {
    $('<div id="tooltip">' + contents + '</div>').css({
      top: y - 16,
      left: x + 20
    }).appendTo('body').fadeIn();
  }
  else if (window_width >1024) {
    $('<div id="tooltip">' + contents + '</div>').css({
      top: y - 16,
      left: x - 260
    }).appendTo('body').fadeIn();
  }
  else{
    $('<div id="tooltip">' + contents + '</div>').css({
      top: y - 16,
      left: x + 20
    }).appendTo('body').fadeIn();
  }
}
//Fix so tooltip does not go past view width

var previousPoint = null;

function removeUndefinedProblem() {
  $('#tooltip').remove();
  previousPoint = null;
}

$('#graph-lines, #graph-bars').bind('plothover', function(event, pos, item) {
  if (item) {
    if (previousPoint != item.dataIndex) {
      previousPoint = item.dataIndex;
      $('#tooltip').remove();
      var x = item.datapoint[0],
        y = item.datapoint[1];
      if (x > 0) {
        showTooltip(item.pageX, item.pageY, y + 'kr kostade det ' + x + ' Maj');
      } else {
        showTooltip(item.pageX, item.pageY, y + 'kr kostade det ' + 29 + ' April');
      }

    }
  } else {
    $('#tooltip').remove();
    previousPoint = null;
  }
});
//Tooltip

//Hamburger Menu
var menuState = "closed"
function hamburger_menu() {
  //changes icon to arrow icon or hamburger icon
  parent = document.getElementById("hamburger_icon");
  previousIcon = document.querySelector(".fa-bars");

  if (previousIcon != null) {
    options = {
      from: "fa-bars",
      to: "fa-arrow-left",
      animation: "horizontalFlip"
    };
    iconate(parent, options);
  } else {
    options = {
      from: "fa-arrow-left",
      to: "fa-bars",
      animation: "horizontalFlip"
    };
    iconate(parent, options);
  }

  //remove logo since it not required when menu is opend
  parent2 = document.getElementById("logo_id");
  previousStateLogo = document.querySelector(".visable");


  if (previousStateLogo != null) {
    options = {
      from: "visable",
      to: "removed",
      animation: "zoomOut"
    };
    iconate(parent2, options);
  } else {
    options = {
      from: "removed",
      to: "visable",
      animation: "zoomIn"
    };
    iconate(parent2, options);
  }
  //displays or removes the hamburger Menu
  element = document.querySelector(".menu_background");
  element.classList.toggle("menu_background_display");
  element.classList.toggle("shadow");
  if (menuState == "opened"){
    setTimeout(function(){ element.classList.toggle("display_none"); }, 500); //waits until the menu is closed before removing it with display none since if it get display none to early the animation wont play
    menuState = "closed"
  }else {
    element.classList.toggle("display_none");
    menuState = "opened"
  }

}
//Hamburger Menu

//Get user data and create new boxes that displays there name, date they sold the thing and how much they sold it for
var timesClicked = 0

function createDivs() {
  x = 0;
  while (x < 5) {
    var div = document.createElement("div");
    div.setAttribute('class', 'sold_items_box');
    var parent = document.getElementsByClassName("users");
    parent[0].appendChild(div);

    var div2 = document.createElement("div");
    div2.setAttribute('class', 'divide_box');
    div.appendChild(div2);

    var div3 = document.createElement("div");
    div3.setAttribute('class', 'name_date_box');
    div2.appendChild(div3);
    var name = document.createElement("h1");
    var date = document.createElement("p");
    name.setAttribute('class', 'sold_by_name');
    date.setAttribute('class', 'date');
    var name_text = document.createTextNode(nameData[x + timesClicked]);
    var date_text = document.createTextNode(dateData[x + timesClicked]);
    name.appendChild(name_text);
    date.appendChild(date_text);
    div3.appendChild(name);
    div3.appendChild(date);

    var div4 = document.createElement("div");
    div4.setAttribute('class', 'price_box');
    div3.appendChild(div4);
    var price = document.createElement("h1");
    price.setAttribute('class', 'price');
    var price_text = document.createTextNode(moneyData[x + timesClicked]);
    price.appendChild(price_text);
    div4.appendChild(price);
    x += 1;
  }
  timesClicked += 5
}
//Get user data
