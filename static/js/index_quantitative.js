var d=0;
  $(document).ready(function() {
    namespace = '/test';
    var socket = io.connect('http://' + document.domain + ':' + location.port + namespace);
    select = document.getElementById('selectElementId');
    Bar = document.getElementById('Progressbar');
    $.post(
      "/options",
      function (msg) {
        if (msg !== undefined)
                {
					for (var i = 0; i<msg.name.length; i++){
						var opt = document.createElement('option');
						opt.value = msg.value[i];
						opt.innerHTML = msg.name[i];
						select.appendChild(opt);
					}
				}
                
				else{
                    window.alert("Configuration folder is empty")
                }
      }
    );
    socket.emit('started', {data:"hai"});
    socket.on('message', function(msg) {
      Bar.innerHTML = msg.msgs;
      $("#Progressbar").css("width", msg.msgs);
    });
    $("#diameter").click(function(event){
      $("#loadingimg").show();
      var data = $("#testform").serializeArray();
      data.push({ name: "selected", value: "Diameter" });
      $.post(
        "/linegraph",
        data,
        function(data) {
            if (data == "Invalid Input" || data == "No Production At this Duration")
                {
                $("#loadingimg").hide();
                sweetAlert("Oops....!!",data)
                }
            else
            {
              //window.alert(data);
	  $("#loadingimg").hide();
          d=data;
          var 	k=d.split(' ');
          var majoraxis = [];
	  var dateData = [];
	  var dateutc = [];
	  var datestore = [];
	  var fineldata = new Array();
	  
          var count = 0;
          for (var i = 0 ; i < k.length; i++) {
            if (i%2==1) {
              majoraxis[count]=k[i];
              count++;
            }
	    else if (i%2==0) {
	      dateData[count]=k[i];
	    }
          }
	j = 0;
	for(var i=0; i<majoraxis.length; i++)
	{ majoraxis[i] = parseFloat(majoraxis[i]);
	  dateutc = dateData[i].split('-');
	  datestore[j] = Date.UTC(dateutc[0],dateutc[1],dateutc[2],dateutc[3],dateutc[4],dateutc[5]);
	  j++;
	}
	for(var i=0; i<majoraxis.length; i++)
	  {
	    fineldata[i]=new Array();
	   for(var j=0; j<2; j++)
	      {
	      if (j==0) {fineldata[i][j] = datestore[i];}
	      else { fineldata[i][j] = majoraxis[i];}
	      }
	  }
	var chartdata = {
        chart: {
            type: 'spline',
	    renderTo: 'abc'
        },
        title: {
            text: 'Diameter Graph'
        },
        xAxis: {
            type: 'datetime',
            dateTimeLabelFormats: { // don't display the dummy year
                month: '%e. %b',
                year: '%b'
            },
            title: {
                text: 'Date'
            }
        },
        yAxis: {
            title: {
                text: 'Diameter (in mm)'
            }
        },
        plotOptions: {
            spline: {
                marker: {
                    enabled: true
                }
            }
        },
        series: [{
            name: 'Diameter',
            data: fineldata
          }]
    } 
          if( window.myLine!==undefined)
            window.myLine.destroy();

          window.myLine = new Highcharts.Chart(chartdata)

              $('#stage1').html(data);
            }
      }
      );
    });
    $("#ovality").click(function(event){
      $("#loadingimg").show();
      var data = $("#testform").serializeArray();
      data.push({ name: "selected", value: "Ovality" });
      $.post(
        "/linegraph",
        data,
        function(data) {
	  if (data == "Invalid Input" || data == "No Production At this Duration")
                {
                $("#loadingimg").hide();
                sweetAlert("Oops....!!",data)
                }
            else
            {
	  $("#loadingimg").hide();
          d=data;
          var k=d.split(' ');

          var minoraxis = [];
	  var dateData = [];
	  var dateutc = [];
	  var datestore = [];
	  var fineldata = new Array();
	  
          var count = 0;
          for (var i = 0 ; i < k.length; i++) {
            if (i%2==1) {
              minoraxis[count]=k[i];
              count++;
            }
	    else if (i%2==0) {
	      dateData[count]=k[i];
	    }
          }
	j = 0;
	for(var i=0; i<minoraxis.length; i++)
	{ minoraxis[i] = parseFloat(minoraxis[i]);
	  dateutc = dateData[i].split('-');
	  dateutc[1] = parseInt(dateutc[1])-1;
	  datestore[j] = Date.UTC(dateutc[0],dateutc[1],dateutc[2],dateutc[3],dateutc[4],dateutc[5]);
	  j++;
	}
	for(var i=0; i<minoraxis.length; i++)
	  {
	    fineldata[i]=new Array();
	   for(var j=0; j<2; j++)
	      {
	      if (j==0) {fineldata[i][j] = datestore[i];}
	      else { fineldata[i][j] = minoraxis[i];}
	      }
	  }
	var chartdata = {
        chart: {
            type: 'spline',
	    renderTo: 'abc'
        },
        title: {
            text: 'Ovality Graph'
        },
        xAxis: {
            type: 'datetime',
            dateTimeLabelFormats: { // don't display the dummy year
                month: '%e. %b',
                year: '%b'
            },
            title: {
                text: 'Date'
            }
        },
        yAxis: {
            title: {
                text: 'Ovality (in mm)'
            }
        },
        plotOptions: {
            spline: {
                marker: {
                    enabled: true
                }
            }
        },
        series: [{
            name: 'Ovality',
            data: fineldata
          }]
    } 
          if( window.myLine!==undefined)
            window.myLine.destroy();

          window.myLine = new Highcharts.Chart(chartdata)

              $('#stage1').html(data);
            }
        }
      );
    });
    
    $("#almsize").click(function(event){
      $("#loadingimg").show();
      var data = $("#testform").serializeArray();
      data.push({ name: "selected", value: "AlmondArea" });
      $.post(
        "/linegraph",
        data,
        function(data) {
	  if (data == "Invalid Input" || data == "No Production At this Duration")
                {
                $("#loadingimg").hide();
                sweetAlert("Oops....!!",data)
                }
            else
            {
	  $("#loadingimg").hide();
          d=data;
          var k=d.split(' ');

          var almsize = [];
	  var dateData = [];
	  var dateutc = [];
	  var datestore = [];
	  var fineldata = new Array();
	  
          var count = 0;
          for (var i = 0 ; i < k.length; i++) {
            if (i%2==1) {
              almsize[count]=k[i];
              count++;
            }
	    else if (i%2==0) {
	      dateData[count]=k[i];
	    }
          }
	j = 0;
	for(var i=0; i<almsize.length; i++)
	{ almsize[i] = parseFloat(almsize[i]);
	  dateutc = dateData[i].split('-');
	  dateutc[1] = parseInt(dateutc[1])-1;
	  datestore[j] = Date.UTC(dateutc[0],dateutc[1],dateutc[2],dateutc[3],dateutc[4],dateutc[5]);
	  j++;
	}
	for(var i=0; i<almsize.length; i++)
	  {
	    fineldata[i]=new Array();
	   for(var j=0; j<2; j++)
	      {
	      if (j==0) {fineldata[i][j] = datestore[i];}
	      else { fineldata[i][j] = almsize[i];}
	      }
	  }
	var chartdata = {
        chart: {
            type: 'spline',
	    renderTo: 'abc'
        },
        title: {
            text: 'Almond Area Graph'
        },
        xAxis: {
            type: 'datetime',
            dateTimeLabelFormats: { // don't display the dummy year
                month: '%e. %b',
                year: '%b'
            },
            title: {
                text: 'Date'
            }
        },
        yAxis: {
            title: {
                text: 'Almond Area (in mm)'
            }
        },
        plotOptions: {
            spline: {
                marker: {
                    enabled: true
                }
            }
        },
        series: [{
            name: 'Almond Area',
            data: fineldata
          }]
    } 
          if( window.myLine!==undefined)
            window.myLine.destroy();

          window.myLine = new Highcharts.Chart(chartdata)

              $('#stage1').html(data);
            }
        }
      );
    });
    $("#cutsize").click(function(event){
      $("#loadingimg").show();
      var data = $("#testform").serializeArray();
      data.push({ name: "selected", value: "Cutsize" });
      $.post(
        "/linegraph",
        data,
        function(data) {
	  if (data == "Invalid Input" || data == "No Production At this Duration")
                {
                $("#loadingimg").hide();
                sweetAlert("Oops....!!",data)
                }
            else
            {
	  $("#loadingimg").hide();
          d=data;
          var k=d.split(' ');

          var cutsize = [];
	  var dateData = [];
	  var dateutc = [];
	  var datestore = [];
	  var fineldata = new Array();
	  
          var count = 0;
          for (var i = 0 ; i < k.length; i++) {
            if (i%2==1) {
              cutsize[count]=k[i];
              count++;
            }
	    else if (i%2==0) {
	      dateData[count]=k[i];
	    }
          }
	j = 0;
	for(var i=0; i<cutsize.length; i++)
	{ cutsize[i] = parseFloat(cutsize[i]);
	  dateutc = dateData[i].split('-');
	  dateutc[1] = parseInt(dateutc[1])-1;
	  datestore[j] = Date.UTC(dateutc[0],dateutc[1],dateutc[2],dateutc[3],dateutc[4],dateutc[5]);
	  j++;
	}
	for(var i=0; i<cutsize.length; i++)
	  {
	    fineldata[i]=new Array();
	   for(var j=0; j<2; j++)
	      {
	      if (j==0) {fineldata[i][j] = datestore[i];}
	      else { fineldata[i][j] = cutsize[i];}
	      }
	  }
	var chartdata = {
        chart: {
            type: 'spline',
	    renderTo: 'abc'
        },
        title: {
            text: 'Cut Size Graph'
        },
        xAxis: {
            type: 'datetime',
            dateTimeLabelFormats: { // don't display the dummy year
                month: '%e. %b',
                year: '%b'
            },
            title: {
                text: 'Date'
            }
        },
        yAxis: {
            title: {
                text: 'Cut Size (in mm)'
            }
        },
        plotOptions: {
            spline: {
                marker: {
                    enabled: true
                }
            }
        },
        series: [{
            name: 'Cut Size',
            data: fineldata
          }]
    } 
          if( window.myLine!==undefined)
            window.myLine.destroy();

          window.myLine = new Highcharts.Chart(chartdata)

              $('#stage1').html(data);
            }
        }
      );
    });
    $("#bakemea").click(function(event){
      $("#loadingimg").show();
      var data = $("#testform").serializeArray();
      data.push({ name: "selected", value: "BakeMeasure" });
      $.post(
        "/linegraph",
        data,
        function(data) {
	  if (data == "Invalid Input" || data == "No Production At this Duration")
                {
                $("#loadingimg").hide();
                sweetAlert("Oops....!!",data)
                }
            else
            {
	  $("#loadingimg").hide();
          d=data;
          var k=d.split(' ');

          var colordi = [];
	  var dateData = [];
	  var dateutc = [];
	  var datestore = [];
	  var fineldata = new Array();
	  
          var count = 0;
          for (var i = 0 ; i < k.length; i++) {
            if (i%2==1) {
              colordi[count]=k[i];
              count++;
            }
	    else if (i%2==0) {
	      dateData[count]=k[i];
	    }
          }
	j = 0;
	for(var i=0; i<colordi.length; i++)
	{ colordi[i] = parseFloat(colordi[i]);
	  dateutc = dateData[i].split('-');
	  dateutc[1] = parseInt(dateutc[1])-1;
	  datestore[j] = Date.UTC(dateutc[0],dateutc[1],dateutc[2],dateutc[3],dateutc[4],dateutc[5]);
	  j++;
	}
	for(var i=0; i<colordi.length; i++)
	  {
	    fineldata[i]=new Array();
	   for(var j=0; j<2; j++)
	      {
	      if (j==0) {fineldata[i][j] = datestore[i];}
	      else { fineldata[i][j] = colordi[i];}
	      }
	  }
	var chartdata = {
        chart: {
            type: 'spline',
	    renderTo: 'abc'
        },
        title: {
            text: 'BakeMeasure Graph'
        },
        xAxis: {
            type: 'datetime',
            dateTimeLabelFormats: { // don't display the dummy year
                month: '%e. %b',
                year: '%b'
            },
            title: {
                text: 'Date'
            }
        },
        yAxis: {
            title: {
                text: 'BakeMeasure (in mm)'
            }
        },
        plotOptions: {
            spline: {
                marker: {
                    enabled: true
                }
            }
        },
        series: [{
            name: 'BakeMeasure',
            data: fineldata
          }]
    } 
          if( window.myLine!==undefined)
            window.myLine.destroy();

          window.myLine = new Highcharts.Chart(chartdata)

              $('#stage1').html(data);
            }
        }
      );
    });
  });
