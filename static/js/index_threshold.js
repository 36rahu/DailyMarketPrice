$(document).ready(function() {
	var TableStatus = 0;
	select = document.getElementById('selectElementId');
	table = document.getElementById('Table');
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
					var opt = document.createElement('option');
					opt.value = "all";
					opt.innerHTML = "ALL";
					select.appendChild(opt);
				}
                
				else{
                    window.alert("Configuration folder is empty")
                }
      }
    );
	$("#table").hide();
    $(".biscuit").click(function(event){
	  $("#table").hide();
	  $("#round_values").show();
	  event.preventDefault();
	  var formData = $(this).closest('form').serializeArray();
	  formData.push({ name: this.name, value: this.value });
      $.post(
        "/thresholdValue",
        formData,
        function(data) {
		  if (data.name['type'] == "Choco_Fills_150" || data.name['type'] == "Choco_Fills_75" || data.name['type'] == "Coffee_Fills_75") {
			$("#almond_value").hide();
		  }
		  else { 
			$("#almond_value").show();
		  }
		  if (data.name['type'] != undefined){
			var placeHolder = document.getElementById('min_dia');
			placeHolder.innerHTML=data.name['data'][0];
			var placeHolder = document.getElementById('max_dia');
			placeHolder.innerHTML=data.name['data'][1];
			var placeHolder = document.getElementById('ovality');
			placeHolder.innerHTML=data.name['data'][2];
			var placeHolder = document.getElementById('over_baked');
			placeHolder.innerHTML=data.name['data'][3];
			var placeHolder = document.getElementById('under_baked');
			placeHolder.innerHTML=data.name['data'][4];
			var placeHolder = document.getElementById('almond_area');
			placeHolder.innerHTML=data.name['data'][5];
        }
		else
			{
			$("#round_values").hide();
			$("#table").show();
			if (TableStatus == 1) {
			$("Table").find("tr:gt(0)").remove();}
			for (var i = 1; i<data.limit; i++){
			 var row = table.insertRow(i);
             var cell0 = row.insertCell(0);
             var cell1 = row.insertCell(1);
             var cell2 = row.insertCell(2);
             var cell3 = row.insertCell(3);
             var cell4 = row.insertCell(4);
             var cell5 = row.insertCell(5);			 
             var cell6 = row.insertCell(6);
			 
            cell0.innerHTML = data.TableNames[i-1];
            cell1.innerHTML = data.name[data.dict_names[i-1]][0];
            cell2.innerHTML = data.name[data.dict_names[i-1]][1];
            cell3.innerHTML = data.name[data.dict_names[i-1]][2];
            cell4.innerHTML = data.name[data.dict_names[i-1]][3];
            cell5.innerHTML = data.name[data.dict_names[i-1]][4];
			cell6.innerHTML = data.name[data.dict_names[i-1]][5];
			}
			TableStatus = 1;
			}
		
		}
		
      );
    });
	 
  });