var d=0;
  $(document).ready(function() {
    select = document.getElementById('selectElementId');
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
    
    $("#driver").click(function(event){
      $("#loadingimg").show();
      $.post(
        "/chartdiagram",
        $("#testform").serialize(),
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
		  var k=d.split(" ");
      var placeHolder = document.getElementById('stat-value1');
      placeHolder.innerHTML=k[0];
	var placeHolder = document.getElementById('stat-value_p1');
      placeHolder.innerHTML=k[10];
      var placeHolder = document.getElementById('stat-value2');
      placeHolder.innerHTML=k[1];
	var placeHolder = document.getElementById('stat-value_p2');
      placeHolder.innerHTML=k[11];
	var placeHolder = document.getElementById('stat-value9');
      placeHolder.innerHTML=k[8];
	var placeHolder = document.getElementById('stat-value_p9');
      placeHolder.innerHTML=k[18];
      var placeHolder = document.getElementById('stat-value3');
      placeHolder.innerHTML=k[3];
	var placeHolder = document.getElementById('stat-value_p3');
      placeHolder.innerHTML=k[13];
      var placeHolder = document.getElementById('stat-value4');
      placeHolder.innerHTML=k[4];
	var placeHolder = document.getElementById('stat-value_p4');
      placeHolder.innerHTML=k[14];
      var placeHolder = document.getElementById('stat-value5');
      placeHolder.innerHTML=k[5];
	var placeHolder = document.getElementById('stat-value_p5');
      placeHolder.innerHTML=k[15];
	var placeHolder = document.getElementById('stat-value6');
      placeHolder.innerHTML=k[7];
	var placeHolder = document.getElementById('stat-value_p6');
      placeHolder.innerHTML=k[17];
	var placeHolder = document.getElementById('stat-value7');
      placeHolder.innerHTML=k[6];
	var placeHolder = document.getElementById('stat-value_p7');
      placeHolder.innerHTML=k[16];
	var placeHolder = document.getElementById('stat-value8');
      placeHolder.innerHTML=k[2];
	var placeHolder = document.getElementById('stat-value_p8');
      placeHolder.innerHTML=k[12];
	var placeHolder = document.getElementById('stat-value10');
      placeHolder.innerHTML=k[9];
	var placeHolder = document.getElementById('stat-value_p10');
      placeHolder.innerHTML=k[19];

      fineldata = new Array();
      var value_names = ["Under Diameter", "Over Diameter","Oval Biscuit","Less Almond","Cut Biscuit","Under Baked","Over Baked" ];
      var m = [k[1],k[2],k[3],k[4],k[5],k[6],k[7]]
      for(var i=0; i<m.length; i++)
	  {
	    fineldata[i]=new Array();
	   for(var j=0; j<2; j++)
	      {
	      if (j==0) {fineldata[i][j] = value_names[i];}
	      else { fineldata[i][j] = parseInt(m[i]);}
	      }
	  }
      
      var chartdata = {
              chart: {
	    renderTo: 'abc',
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {
            text: 'Defective Analysis'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: 'black'
                    }
                }
            }
        },
        series: [{
            type: 'pie',
            name: 'Defective Analysis',
            data: fineldata
        }]
    } 
          if( window.myLine!==undefined)
            window.myLine.destroy();

          window.myLine = new Highcharts.Chart(chartdata)
          $('#stage1').html(name.data['data']);
        }
      }
      );
    });
  });