//fungsi untuk menghitung akar kuadrat
function quadraticRoots(a,b,c){
	const roots = document.getElementById("roots");
	const D = b**2 - 4*a*c;
	let penyelesaian = "";
	let charA = "";
	let charB = "";
	if(a != 0){
		if(D > 0){
			//dua akar penyelesaian
			let x1 = (-b + Math.sqrt(D))/(2*a);	
			let x2 = (-b - Math.sqrt(D))/(2*a);
			
			if(Math.sqrt(D) % 1 != 0){
				x1 = x1.toFixed(2);
				x2 = x2.toFixed(2);
			}
			if(a==1){
			if(x1 > 0){
				charA = -x1+")";
			}
			else{
				charA = "+"+ -x1+")";
			}
		} else if(a==-1){
			if(x1 > 0){
				charA = "+"+ -x1+")";
			}
			else{
				charA = -x1+")";
			}
		} else if(a<-1){
			if(x1 > 0){
				charA = a*x1+")";
			}
			else{
				charA = "+"+ a*x1+")";
			}
		}
		else{
			if(x1 > 0){
				charA = -a*x1+")";
			}
			else{
				charA = "+"+ -a*x1+")";
			}
		}
			if(x2 > 0){
				charB = -x2+")";
			}
			else{
				charB = "+"+ -x2+")";
			}
			if(a != 1){
				penyelesaian = "("+a+"x " + charA + "(x " + charB;	
			}
			else{
			penyelesaian = "(x " + charA + "(x " + charB;
			}
			let ans = penyelesaian + "<br>Karena D = " + D + ", maka akar - akarnya adalah " + x1 + " dan " + x2;
			roots.innerHTML = ans;

		}
		else if(D == 0){
			//akar penyelesaian sama
			let x = (-b + Math.sqrt(D))/(2*a);
			let ans = "Karena D = " + D + ", maka akarnya adalah " + x;
			roots.innerHTML = ans;
		}
		else{
			//akar imajiner
			roots.innerHTML = "Karena D < 0, maka akar - akarnya merupakan akar - akar imajiner!";
		}
	}
	else{
		//bukan persamaan kuadrat
	}
}

//fungsi untuk mengubah bentuk persamaan kuadrat
function createQuadraticStr(a,b,c,str){
	//untuk a
	if(a == 1){
		//hilangkan angkanya
		str = str.replace("a","");
	}
	else if(a == -1){
		//diberi tanda negatif
		str = str.replace("a","-");
	}
	else{
		//biasa
		str = str.replace("a",a);
	}

	//untuk b
	if(b == 0){
		//dihilangkan tanda + dan x
		str = str.replace("+ bx","");
	}
	else if(b == 1){
		//dihilangkan angkanya
		str = str.replace("b","");
	}
	else if(b < 0){
		//dinegatifkan dan hilang angkanya
		if(b == -1){
			str = str.replace("+ b","- ");
		}
		//dinegatifkan
		else{
			str = str.replace("+ b","- "+(b/-1));
		}
	}
	else{
		//biasa
		str = str.replace("b",b);
	}

	//untuk c
	if(c == 0){
		str = str.replace("+ c","");
	}
	else if(c < 0){
		str = str.replace("+ c","- "+(c/-1));
	}
	else{
		str = str.replace("c",c);
	}

	return str;
}

//fungsi validasi input
function validateInput(a,b,c){
	return !isNaN(a) && !isNaN(b) && !isNaN(c);
}

function find(){
	//koefisien hanya untuk integer
	let a = parseInt(document.getElementById("a").value);
	let b = parseInt(document.getElementById("b").value);
	let c = parseInt(document.getElementById("c").value);

	//validasi input dari user
	//jika bukan angka, beri alert
	const notif = document.getElementById("notif");
	if(validateInput(a,b,c)){
		//jika a bukan 0, maka merupakan pers. kuadrat
		if(a != 0){
			//deklarasi variabel
			const quadraticEq = document.getElementById("quadratic_equation");
			const answer = document.getElementById("answer");
			let quadratic_str = "ax<sup>2</sup> + bx + c = 0";

			//mengganti tampilan pers. kuadrat di jawaban
			quadratic_str = createQuadraticStr(a,b,c,quadratic_str);
			quadraticEq.innerHTML = quadratic_str;

			//mencari akar pers. kuadrat
			quadraticRoots(a,b,c);

			//menampilkan jawaban
			answer.style.display = "block";

		}
		else{
			notif.innerHTML = "Bukan persamaan kuadrat!";
			showModal();
			reset();
		}
	}
	else{
		notif.innerHTML = "Mohon masukan input yang benar, berupa angka!";
		showModal();
	}	
}

//fungsi untuk mereset halaman
function reset(){
	const answer = document.getElementById("answer");
	document.getElementById("a").value = "";
	document.getElementById("b").value = "";
	document.getElementById("c").value = "";
	answer.style.display = "none";
	document.getElementById("quadratic_equation").innerHTML = "ax<sup>2</sup> + bx + c = 0";
}


