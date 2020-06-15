$(document).ready(function(){
	
	/*расчет скорости  V*/	
    $("#run").click(function(){

         $("#train").animate({opacity: "1", left: "=10"}, "slow");
		var valueSforV=$("#SforV").val();
		var valuetforV=$("#tforV").val();
		var resultV=parseFloat(valueSforV)/parseFloat(valuetforV);
		 $("#content").html("При відстані "+valueSforV+" за час " + valuetforV +"швидкість дорівнює = " + resultV).show("slow");
    });
	
	
	/*расчет расстояния  S*/
	$("#findS").click(function(){
	
//		$("#AtoB").animate({width:"500px"},"slow");
		$("#AtoB").css({width:"500px"});
		
		var valueVforS=$("#VforS").val();
		var valuetforS=$("#tforS").val();
		var resultS=parseFloat(valueVforS)*parseFloat(valuetforS);
		$("#contentForS").html("При швидкості "+valueVforS+" за час "+valuetforS+" відстань дорівнює = "+resultS).show(1000);
	});
	
		/*расчет времени  t*/
	$("#findt").click(function(){
		
		$("#clock").show("slow");
		var valueSfort=$("#Sfort").val();
		
		var valueVfort=$("#Vfort").val();
		
		var resultt=parseFloat(valueSfort)/parseFloat(valueVfort);
		
		$("#contentFort").html("При швидкості "+valueVfort+" долаючи відстань "+valueSfort+" час дорівнює = "+resultt).show(1000);
	});
	
	var arr = new Map([
  ['Черепаха пройшла відстань 15 м за 3 хв. З якою швидкістю вона рухалася?', 'Відстань (S) = 15. Час(t) = 3. Щоб знайти швидкість (V), треба S/t . Отже, 15/3 = 5. Відповідь: 5.'],
  ['key2', 'value2'],
  ['key3', 'value3']
]);
	for (let pair of arr.entries()) {
  // pair - это массив [key, values]
  console.log(pair[0]); // ключ
  console.log(pair[1]); // значение

		
}
//	задача 1
	$("#check").click(function(){
		
		var ch1=$("#checkCar").val();
		if (ch1!=80){
			
			$("#perevir").show("slow").append("<p style='color:red'>Не правильно!</p>")
		}
		else{$("#perevir").show("slow").append("<p style='color:green'>Правильно!</p>");}
			
		
	});
	
//	задача2
	
	$("#check2").click(function(){
		
		var ch1=$("#checkPlane").val();
		if (ch1!=360){
			
			$("#perevir2").show("slow").append("<p style='color:red'>Не правильно!</p>")
		}
		else{$("#perevir2").show("slow").append("<p style='color:green'>Правильно!</p>");}
			
		
	});
	//	задача2
	
	$("#check3").click(function(){
		
		var ch1=$("#checkPlane3").val();
		if (ch1!=4){
			
			$("#perevir3").show("slow").append("<p style='color:red'>Не правильно!</p>")
		}
		else {$("#perevir3").show("slow").append("<p style='color:green'>Правильно!</p>");}
			
		
	});
	
	
    }); 
	