function RandomAngkaAtoB(a,b){ 
	var r = a+Math.ceil(Math.random() * b);
	return r;
}
function RandomMyArray(Arr){
	for (var i=0; i<Arr.length; i++){
		var r = Math.floor(Math.random() * Arr.length);
		var a = Arr[i];
		Arr[i] = Arr[r];
		Arr[r] = a;
	}
	return Arr
}
function NoJawabanBenar(Arr, jwb){
	for (var i=0; i<Arr.length; i++){
		if (Arr[i]==jwb){
			return i;
			break;
		}
	}
}
function GetABCD(no){
	var ABCD = ["A","B","C","D"]
	return ABCD[no]
}
function BilAsliKurang(n){
	var bil = [];
	var i
	for(var i=1;i<n;i++) bil.push(i);
	return bil;
}
function BilGanjilKurang(n){
	var bil = [];
	var i
	for(var i=1;i<n;i++) if(Mods(i,2)==1) bil.push(i);
	return bil;
}
function BilPrimaKurang(n){
	var bil = [];
	var i
	for(var i=1;i<n;i++)	if(isPrime(i))	bil.push(i);
	return bil;
}
function Mods(m,n){
	var m0 = m;
	var m0b = m0;
	var ct = 0;
	do{
		m0b = m0;
		m0-=n;
		ct++;
	}while(m0>=0);
	
	var sisa = Math.abs(m0b);
	return sisa;
}
function isPrime(n){
	var ct = 0;
	var i
	for(var i=1;i<=n;i++){
		if(Mods(n,i)==0) ct++;
	}
	return ct==2;
}
function irisan(arrA,arrB){
	var arr = [];
	for(var i=0;i<arrA.length;i++){
		for(var j=0;j<arrB.length;j++){
			if(arrA[i]==arrB[j]){
				arr.push(arrA[i]);
			}
		}
	}
	return arr;
}
function gabungan(arrA,arrB){
	var arr = arrA.concat(arrB);
	arr.sort(function(a, b){return a-b});
	var fixArr = [];
	var cek=arr[0];
	fixArr.push(arr[0]);
	for(var i=1;i<arr.length;i++){
		if(arr[i]!==cek){
			fixArr.push(arr[i]);
			cek=arr[i];
		}
	}
	return fixArr;
}
function BilGenapAntara(a,b){
	var bil = [];
	var i
	for(var i=a;i<b;i++) if(Mods(i,2)==0) bil.push(i);
	return bil;
}
function BilGenapKurang(n){
	var bil = [];
	var i
	for(var i=1;i<n;i++) if(Mods(i,2)==0) bil.push(i);
	return bil;
}
function fact(n){
	if(n>1){
		return n*fact(n-1);
	}else{
		return 1;
	}
}
function nCr(n,r){
	var C1 = fact(n);
	var C2 = fact(r);
	var C3 = fact(n-r);
	var C = Math.abs(C1/(C2*C3));
	return C;
}
function kurangAB(arrA,arrB){
	var fixArr = [];
	var ct;
	for(var i=0;i<arrA.length;i++){
		ct=0;
		for(var j=0;j<arrB.length;j++){
			if(arrA[i]==arrB[j]){
				ct++;
			}
		}
		if(ct==0){
			fixArr.push(arrA[i]);
		}
	}
	return fixArr;
}
function BilAsliAntara(a,b){
	var bil = [];
	var i
	for(var i=a+1;i<b;i++) bil.push(i);
	return bil;
}
function BilGanjilAntara(a,b){
	var bil = [];
	var i
	for(var i=a;i<b;i++) if(Mods(i,2)==1) bil.push(i);
	return bil;
}
function BilPrimaAntara(a,b){
	var bil = [];
	var i
	for(var i=a+1;i<b;i++)	if(isPrime(i))	bil.push(i);
	return bil;
}