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
        }}
      );
    });
	 $(".biscuit_all").click(function(event){
	  $("#round_values").hide();
	  $("#table").show();
	  event.preventDefault();
	  var formData = $(this).closest('form').serializeArray();
	   formData.push({ name: this.name, value: this.value });
      $.post(
        "/thresholdValue",
        formData,
        function(data) {
			window.alert(data.name['type']);
		var placeHolder = document.getElementById('f150_min_dia');
		  placeHolder.innerHTML=data.name['Choco_Fills_150'][0];
		  var placeHolder = document.getElementById('f150_max_dia');
		  placeHolder.innerHTML=data.name['Choco_Fills_150'][1];
		  var placeHolder = document.getElementById('f150_ovality');
		  placeHolder.innerHTML=data.name['Choco_Fills_150'][2];
		  var placeHolder = document.getElementById('f150_over_baked');
		  placeHolder.innerHTML=data.name['Choco_Fills_150'][3];
		  var placeHolder = document.getElementById('f150_under_baked');
		  placeHolder.innerHTML=data.name['Choco_Fills_150'][4];
		  var placeHolder = document.getElementById('f150_almond_area');
		  placeHolder.innerHTML=data.name['Choco_Fills_150'][5];
		  
		  var placeHolder = document.getElementById('f75_min_dia');
		  placeHolder.innerHTML=data.name['Choco_Fills_75'][0];
		  var placeHolder = document.getElementById('f75_max_dia');
		  placeHolder.innerHTML=data.name['Choco_Fills_75'][1];
		  var placeHolder = document.getElementById('f75_ovality');
		  placeHolder.innerHTML=data.name['Choco_Fills_75'][2];
		  var placeHolder = document.getElementById('f75_over_baked');
		  placeHolder.innerHTML=data.name['Choco_Fills_75'][3];
		  var placeHolder = document.getElementById('f75_under_baked');
		  placeHolder.innerHTML=data.name['Choco_Fills_75'][4];
		  var placeHolder = document.getElementById('f75_almond_area');
		  placeHolder.innerHTML=data.name['Choco_Fills_75'][5];
		  
		  var placeHolder = document.getElementById('c75_min_dia');
		  placeHolder.innerHTML=data.name['Coffee_Fills_75'][0];
		  var placeHolder = document.getElementById('c75_max_dia');
		  placeHolder.innerHTML=data.name['Coffee_Fills_75'][1];
		  var placeHolder = document.getElementById('c75_ovality');
		  placeHolder.innerHTML=data.name['Coffee_Fills_75'][2];
		  var placeHolder = document.getElementById('c75_over_baked');
		  placeHolder.innerHTML=data.name['Coffee_Fills_75'][3];
		  var placeHolder = document.getElementById('c75_under_baked');
		  placeHolder.innerHTML=data.name['Coffee_Fills_75'][4];
		  var placeHolder = document.getElementById('c75_almond_area');
		  placeHolder.innerHTML=data.name['Coffee_Fills_75'][5];
		  
		  var placeHolder = document.getElementById('nb150_min_dia');
		  placeHolder.innerHTML=data.name['Delishus_NB_150'][0];
		  var placeHolder = document.getElementById('nb150_max_dia');
		  placeHolder.innerHTML=data.name['Delishus_NB_150'][1];
		  var placeHolder = document.getElementById('nb150_ovality');
		  placeHolder.innerHTML=data.name['Delishus_NB_150'][2];
		  var placeHolder = document.getElementById('nb150_over_baked');
		  placeHolder.innerHTML=data.name['Delishus_NB_150'][3];
		  var placeHolder = document.getElementById('nb150_under_baked');
		  placeHolder.innerHTML=data.name['Delishus_NB_150'][4];
		  var placeHolder = document.getElementById('nb150_almond_area');
		  placeHolder.innerHTML=data.name['Delishus_NB_150'][5];
		  
		  var placeHolder = document.getElementById('nb75_min_dia');
		  placeHolder.innerHTML=data.name['Delishus_NB_75'][0];
		  var placeHolder = document.getElementById('nb75_max_dia');
		  placeHolder.innerHTML=data.name['Delishus_NB_75'][1];
		  var placeHolder = document.getElementById('nb75_ovality');
		  placeHolder.innerHTML=data.name['Delishus_NB_75'][2];
		  var placeHolder = document.getElementById('nb75_over_baked');
		  placeHolder.innerHTML=data.name['Delishus_NB_75'][3];
		  var placeHolder = document.getElementById('nb75_under_baked');
		  placeHolder.innerHTML=data.name['Delishus_NB_75'][4];
		  var placeHolder = document.getElementById('nb75_almond_area');
		  placeHolder.innerHTML=data.name['Delishus_NB_75'][5];
		  
		   var placeHolder = document.getElementById('nr150_min_dia');
		  placeHolder.innerHTML=data.name['Delishus_NR_150'][0];
		  var placeHolder = document.getElementById('nr150_max_dia');
		  placeHolder.innerHTML=data.name['Delishus_NR_150'][1];
		  var placeHolder = document.getElementById('nr150_ovality');
		  placeHolder.innerHTML=data.name['Delishus_NR_150'][2];
		  var placeHolder = document.getElementById('nr150_over_baked');
		  placeHolder.innerHTML=data.name['Delishus_NR_150'][3];
		  var placeHolder = document.getElementById('nr150_under_baked');
		  placeHolder.innerHTML=data.name['Delishus_NR_150'][4];
		  var placeHolder = document.getElementById('nr150_almond_area');
		  placeHolder.innerHTML=data.name['Delishus_NR_150'][5];
		  
		  var placeHolder = document.getElementById('nr75_min_dia');
		  placeHolder.innerHTML=data.name['Delishus_NR_75'][0];
		  var placeHolder = document.getElementById('nr75_max_dia');
		  placeHolder.innerHTML=data.name['Delishus_NR_75'][1];
		  var placeHolder = document.getElementById('nr75_ovality');
		  placeHolder.innerHTML=data.name['Delishus_NR_75'][2];
		  var placeHolder = document.getElementById('nr75_over_baked');
		  placeHolder.innerHTML=data.name['Delishus_NR_75'][3];
		  var placeHolder = document.getElementById('nr75_under_baked');
		  placeHolder.innerHTML=data.name['Delishus_NR_75'][4];
		  var placeHolder = document.getElementById('nr75_almond_area');
		  placeHolder.innerHTML=data.name['Delishus_NR_75'][5];
        }
      );
    });
  });