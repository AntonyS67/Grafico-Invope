//Autor: Silva Rojas Antoni
//Codigo de alumno: 0201614024
function calcular(){
				a=document.forms["form1"];
				x1=a.elements[8].value;
				x2=a.elements[9].value;
				n1=a.elements[2].value;
				n2=a.elements[3].value;
				n3=a.elements[4].value;
				n4=a.elements[5].value;
				n5=a.elements[6].value;
				n6=a.elements[7].value;
				men="";
				if(x1>=0){
					p2=(n3-n1*(x1))/n2;
					p1=((n3-n2*(x2))/n1);
					men+="Primera Ecuacion";
					men+="<br>";
					men+="Puntos: <br>X1: "+x1+" X2: "+p2;
					men+="<br>";
					men+="X1: "+p1+"<br>X2: "+x2;
					p3=((n6-n5*(x2))/n4);
					p4=((n6-(n4*x1))/n5);
					men+="<br>";
					men+="---------------------------";
					men+="<br>";
					men+="Segunda Ecuacion";
					men+="<br>";
					men+="Puntos: <br>X1: "+x1+"<br>X2: "+p4;
					men+="<br>";
					men+="X1: "+p3+"<br>X2: "+x2;
					
				}
				if(n3>n6){
					xx=(n3*(n2-n5)-n2*(n3-n6))/((n1*n2)-(n1*n5)+n2*(n4-n1));
					yy=((n3-n6)+(n4-n1)*xx)/(n2-n5);
				}else{
					xx=(n3*(n2-n5)-n2*(n6-n3))/((n1*n2)-(n1*n5)+n2*(n4-n1));
					yy=((n6-n3)+(n4-n1)*xx)/(n2-n5);
				}
				int="Interseccion -> Optimo"+"<br>"+"X1: "+xx+"<br>X2: "+yy;
					op=(n6-p1)/n5;
				men+="---------------------------";
				men+="F("+x1+","+p2+")= ";
				document.getElementById("resultado").innerHTML="Solucion"+"<br>"+"---------------------------"+
				"<br>"+men+"<br>"+"---------------------------"+"<br>"+int;
}

//parte de la grafica
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(inicio);
function inicio() {
	var data=new google.visualization.DataTable();
	data.addColumn('number','x1');
	data.addColumn('number','f1');
	data.addColumn('number','f2');
	var opciones={'title':'Grafica Investigacion de Operaciones',
	'width':700,
	'height':500,
	};
	var grafica= new google.visualization.AreaChart(document.getElementById('charts'));
	grafica.draw(data,opciones);   
}

function mostrar(){
	google.charts.setOnLoadCallback(dibujar);
	function dibujar() {
		var data=new google.visualization.DataTable();
		data.addColumn('number','x1');
		data.addColumn('number','f1');
		data.addColumn('number','f2');
		data.addRows(
			[
			[0,p2,p4],
			[xx,yy,yy],
			[p1,0,op]
			]
		);
		var opciones={'title':'Grafica Investigacion de Operaciones',
		'width':700,
		'height':500,
		pointSize:20,
        pointShape: 'square'
		};
		var grafica= new google.visualization.AreaChart(document.getElementById('charts'));
		grafica.draw(data,opciones);
		document.getElementById("resultado").style.display='block';   
	}
}