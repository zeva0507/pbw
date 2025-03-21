let name;
//variabel
name = "pertemuan 3";
name = "Abid Zeva";

let kelas;
kelas = "4A";

let prodi;
prodi = "Sistem Informasi"

console.log(name);
console.log(kelas);
console.log(prodi);

//konstanta
const phi = 3.14; 
const greet = "Good Morning"; 

console.log("Nilai phi adalah "+ phi); 
console.log(greet+" Abid Zeva"); 

//tipe data
let ipk = 3.90; 
let price = 15000; 
let celcius = -15; 

console.log(ipk); 
console.log(price); 
console.log(celcius);

//Array
let activity; 

activity = 'Hello FASILKOM'; 
console.log(activity); 

activity = "I'm learning javascript"; 
console.log(activity); 

activity = "2021"; 
console.log(activity);

let isSuccess = true; 
let isFailed = false;

console.log(isSuccess); 
console.log(isFailed);

let faculties = [ 
"Fakultas Ilmu Komputer", 
"Fakultas Hukum", 
"Fakultas Teknik", 
"Fakultas Ilmu Sosial dan Ilmu Politik", 
"Fakultas Agama Islam" 
]; 

console.log(faculties[0]); 
console.log(faculties[1]); 
console.log(faculties[2]); 
console.log(faculties[3]); 
console.log(faculties[4]); 

faculties[1]= "Ilmu Pemerintahan"
console.log(faculties);

faculties[4] = 50; 
console.log(faculties);

let coordinate = [ 
[0,3], 
[6,2], 
[9,8] 
]; 

console.log(coordinate[0][0]); 
console.log(coordinate[0][1]);

console.log(coordinate[1][0]); 
console.log(coordinate[1][1]);

console.log(coordinate[2][0]); 
console.log(coordinate[2][1]);

//Aritmatika
let penjumlahan = 9+10; 
console.log(penjumlahan); 

penjumlahan = 15-10; 
console.log(penjumlahan); 

//perbandingan
let perbandingan = 18 < 2; 
console.log(perbandingan); 

perbandingan = 10 > 3; 
console.log(perbandingan); 

perbandingan = 5 >= 10; 
console.log(perbandingan); 

//logika
let bool; 

bool = true && false; 
console.log(bool); 

bool = false || true; 
console.log(bool); 

bool = !false; 
console.log(bool);

bool = true || true || false; 
console.log(bool); 

bool = true && false || true; 
console.log(bool); 

//operator string
let firstName, lastName, fullName; 

firstName = "Abid"; 
lastName = "Zeva"; 
fullName = firstName +" "+ lastName; 

console.log(fullName); 

console.log("Halo, my name is "+fullName);

//spread
let male = ["Ujang Sanjaya","Kevin Alam","Dedi Wijaya"]; 
console.log(male); 

let female = ["Lilis Puspitasari","Ririn Noviyanti","Putri Wijaya"]; 
console.log(female); 

let students = [...male,...female]; 
console.log(students);

//percabangan dan perulangan
gender = 'L'; 
if(gender === 'L'){ 

console.log("I'm a man"); 
} 

gender = 'P'; 
if(gender === 'L'){

console.log("I'm a man"); 
}else{ 

console.log("I'm a woman"); 
}

let username, password; 

username = "Admin"; 
password = "Admin123"; 

if(username ==="Admin" && password === "Admin123"){ 
    alert("Login Sukses")
console.log(isSuccess); 

}else if(username === "Admin" && password !== "Admin123"){
    alert("Password Salah") 
console.log(isFailed); 

}else if(username !== "Admin" && password === "Admin123"){
    alert("Password Salah") 
console.log(isFailed); 

}else{ 
console.log(isSuccess); 
} 

let grade = 'A'; 
    switch(grade){ 
    case 'A': 
        console.log("Very good"); 
        break; 
    case 'B': 
        console.log("Good"); 
        break; 
    case 'C': 
        console.log("Enough"); 
        break; 
    case 'D': 
        console.log("Very Enough"); 
        break; 
    default: 
        console.log("No Grade"); 
        break; 
    } 

let age = 18; 

let result = (age >= 18) ? "Eligible for voting" : "Not eligible for voting"; 

console.log(result); 

for (let i = 0; i < 10; i++) { 
    console.log("halo javascript");   
    } 












