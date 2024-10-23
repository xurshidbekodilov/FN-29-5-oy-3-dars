//5 ta construktor funksiyaga oid misol yozish

//1-funksiya
// function Student(name,age,faculty,university){
//     this.name = name;
//     this.age = age;
//     this.faculty = faculty;
//     this.university = university;
// }
// let anvar = new Student('Anvar', 19, "Biology", "Cambridge");
// console.log(anvar);

//2-funksiya
// function Car(name,year,weight,color,cost){
//     this.name = name;
//     this.year = year;
//     this.weight = weight;
//     this.color = color;
//     this.cost = cost;
// }
// let bmw = new Car("BMW X7", 2024, 1500, "Gold", 120.000);
// console.log(bmw);

//3-funkiya
// function User(name,login,parol){
//     this.name = name;
//     this.login = login;
//     this.parol = parol;
// }
// let john = new User('John', 3922311, 12345678);
// console.log(john);

// 4-funksiya
// function Subjects(sub1, sub2, sub3){
//     this.sub1 = sub1;
//     this.sub2 = sub2;
//     this.sub3 = sub3;
// }
// let mondaySubjects = new Subjects('Math', 'English', 'Physics');
// console.log(mondaySubjects);

//5-funksiya
// function HotelReception(name,surname,time,room){
//     this.name = name;
//     this.surname = surname;
//     this.time = time;
//     this.room = room;
// }
// let client1 = new HotelReception('Sergio', 'Busquets', "16:22", 222);
// console.log(client1);



//5 ta class ga oid misol yozish

//1-funksiya
// class Student{
//     constructor(name,age,faculty,university){
//         this.name = name;
//         this.age = age;
//         this.faculty = faculty;
//         this.university = university;
//     }
// }
// let anvar = new Student('Anvar', 19, "Biology", "Cambridge");
// console.log(anvar);

//2-funksiya
// class Car{
//     constructor(name,year,weight,color,cost){
//         this.name = name;
//         this.year = year;
//         this.weight = weight;
//         this.color = color;
//         this.cost = cost;
//     }
// }
// let bmw = new Car('BMW X7', 2024, 1500, "Gold", 120.000);
// console.log(bmw);

//3-funksiya
// class User{
//     constructor(name,login,parol){
//         this.name = name;
//         this.login = login;
//         this.parol = parol;
//     }
// }
// let john = new User('john', 3922311, 12345678);
// console.log(john);

//4-funksiya
// class Subjects{
//     constructor(sub1,sub2,sub3){
//         this.sub1 = sub1;
//         this.sub2 = sub2;
//         this.sub3 = sub3;
//     }
// }
// let mondaySubjects = new Subjects("Math","English","Physics");
// console.log(mondaySubjects);

//5-funksiya
// class hotelReception{
//     constructor(name,surname,time,room){
//         this.name = name;
//         this.surname = surname;
//         this.time = time;
//         this.room = room;
//     }
// }
// let client1 = new hotelReception('Sergio', 19, "Busquets", "16:22", 222);
// console.log(client1);



// Massiv va obyektlar

// 1. **O'quvchilarni chiqarish**  
//    **Masala:** Berilgan o'quvchilar massivida har bir o'quvchining ism va yoshini ekranga chiqaruvchi funksiya yozing
// const oquvchilar = [
//     { ism: "Ali", yosh: 17 },
//     { ism: "O'ktam", yosh: 18 },
//     { ism: "Sardor", yosh: 19 }
// ];
// function oquvchilarniChiqarish(oquvchilar) {
//     oquvchilar.forEach(function(oquvchi) {
//         console.log(`Ism: ${oquvchi.ism}, Yosh: ${oquvchi.yosh}`);
//     });
// }
// oquvchilarniChiqarish(oquvchilar);

// 2. **Mahsulot narxini oshirish**  
//    **Masala:** Berilgan mahsulotlar massivida har bir mahsulotning narxini 20% ga oshirib yangi massiv yaratuvchi funksiya yozing.
// const mahsulotlar = [
//     { nom: "Olma", narx: 100 },
//     { nom: "Nok", narx: 150 },
//     { nom: "Banan", narx: 200 }
// ];
// function newCost(products) {
//     let result = products.map(function(product) {
//         return {
//             nom: product.nom,
//             narx: product.narx * 1.2
//         };
//     });
//     return result;
// }
// console.log(newCost(mahsulotlar));

// 3. **18 yoshdan katta o'quvchilarni tanlash**  
//    **Masala:** O'quvchilar ro'yxatidagi barcha o'quvchilar 18 yoshdan katta bo'lsa, ularni tanlaydigan funksiya yozing
// const oquvchilar = [
//     { ism: "Dilorom", yosh: 20 },
//     { ism: "Shahrizoda", yosh: 17 },
//     { ism: "Akbar", yosh: 19 }
// ];
// function oldPupil(pupils){
//     let res = pupils.filter(function(pupil){
//         if(pupil.yosh > 18){
//             return pupil;
//         }
//     })
//     return res;
// }
// console.log(oldPupil(oquvchilar));

// 4. **Kitob mualliflarini formatlash**  
//    **Masala:** Berilgan kitoblar massivida kitoblarning mualliflarini bir xil qilib yozadigan funksiya yarating
// const kitoblar = [
//     { nom: "Kitob A", muallif: "Said Ahmad" },
//     { nom: "Kitob B", muallif: "Zokir Khoshimov" },
//     { nom: "Kitob C", muallif: "Murodjon Abduqodirov" }
// ];
// function changeAuthor(books, newAuthor) {
//     let result = books.map(function(book) {
//         return {
//             nom: book.nom,
//             muallif: newAuthor
//         };
//     });
//     return result;
// }
// const yangiKitoblar = changeAuthor(kitoblar, "Said Ahmad");
// console.log(yangiKitoblar);

// 5. **Ish haqini oshirish**  
//    **Masala:** Berilgan xodimlar massivida har bir xodimning ish haqini 10% ga oshiruvchi funksiya yozing va yangilangan ish haqlarini ekranga chiqaruvchi funksiya yarating
// const xodimlar = [
//     { ism: "Rashid", ishHaqi: 3000 },
//     { ism: "Dilshod", ishHaqi: 2500 },
//     { ism: "Farhod", ishHaqi: 4000 }
// ];
// function newSalary(workers){
//     let result = workers.map(function(worker){
//         return {
//             ism: worker.ism,
//             ishHaqi: worker.ishHaqi * 1.1
//         }
//     })
//     return result;
// }
// console.log(newSalary(xodimlar));

// 6. **Ism prefiksini qo'shish**  
//    **Masala:** O'quvchilar ro'yxatida ismlarini "Mr." prefiksi bilan ko'rsatadigan funksiya yozing.
// const oquvchilar = [
//     { ism: "Jasur", yosh: 21 },
//     { ism: "Sardorbek", yosh: 22 },
//     { ism: "Azizbek", yosh: 20 }
// ];
// function addWord(array){
//     array.forEach(function(element){
//         element.ism = "Mr "+ element.ism;
//     });
//     return array;
// }
// console.log(addWord(oquvchilar));

// 7. **Elektr avtomobillarini tanlash**  
//    **Masala:** Berilgan avtomobillar massividan faqat elektr avtomobillarini tanlaydigan funksiya yozing.
// const avtomobillar = [
//     { nom: "Tesla", tur: "elektr" },
//     { nom: "Toyota", tur: "benzin" },
//     { nom: "Nissan Leaf", tur: "elektr" }
// ];
// function choosingElectrCar(cars){
//     let result = cars.filter(function(car){
//         if(car.tur == "elektr"){
//             return car;
//         }
//     })
//     return result;
// }
// console.log(choosingElectrCar(avtomobillar));

// 8. **Foydalanuvchi ma'lumotlarini qaytarish**  
//    **Masala:** Berilgan foydalanuvchilar massivida foydalanuvchi ma'lumotlarini (ism, email) qaytaruvchi funksiya yarating
// const foydalanuvchilar = [
//     { ism: "Aziz", email: "aziz@example.com" },
//     { ism: "Nodir", email: "nodir@example.com" },
//     { ism: "Malika", email: "malika@example.com" }
// ];
// function getUserData(array) {
//     let result = array.map(function(user) {
//         return {
//             ism: user.ism,
//             email: user.email
//         };
//     });
//     return result;
// }
// console.log(getUserData(foydalanuvchilar));

// 9. **Eng yuqori mahsulotni topish**  
//    **Masala:** Berilgan mahsulotlar massivida narxi eng yuqori bo'lgan mahsulotni topuvchi funksiya yozing.
// const mahsulotlar = [
//     { nom: "Televizor", narx: 500 },
//     { nom: "Konditsioner", narx: 700 },
//     { nom: "Butler", narx: 300 }
// ];
// function findMostExpensiveProduct(products) {
//     let engYuqoriMahsulot = products[0];
//     for (let i = 1; i < products.length; i++) {
//         if (products[i].narx > engYuqoriMahsulot.narx) {
//             engYuqoriMahsulot = products[i];
//         }
//     }
//     return engYuqoriMahsulot;
// }
// const natija = findMostExpensiveProduct(mahsulotlar);
// console.log(natija);

// 10. **O'quvchi ballarini tenglashtirish**  
//    **Masala:** O'quvchilar ro'yxatida har bir o'quvchining ballarini umumiy qiymatga tenglashtiruvchi funksiya yozing
// const oquvchilar = [
//     { ism: "Zarina", ball: 85 },
//     { ism: "Doston", ball: 90 },
//     { ism: "Gulbahor", ball: 95 }
// ];
// function equalizeScores(students) {
//     let maxBall = 0;
//     for (let i = 0; i < students.length; i++) {
//         if (students[i].ball > maxBall) {
//             maxBall = students[i].ball;
//         }
//     }
//     for (let i = 0; i < students.length; i++) {
//         students[i].ball = maxBall;
//     }
//     return students;
// }
// const natija = equalizeScores(oquvchilar);
// console.log(natija);



//String metodiga oid masalalar

// 1. **Satrni kichik harflarga o‘girish**  
//    Berilgan satrni kichik harflarga o‘girish va natijani ekranga chiqaruvchi funksiya yozing
// function toLowerCase(string){
//     return string.toLowerCase();
// }
// let str = 'HeLlo WorLD!';
// console.log(toLowerCase(str));

// 2. **Satrning uzunligini hisoblash**  
//    Berilgan satrning uzunligini hisoblaydigan funksiya yozing va natijani ekranga chiqaring
// function calculateLength(string){
//     return string.length;
// }
// let str = 'salom hammaga';
// console.log(calculateLength(str));

// 3. **Satrning boshlanishi va tugashi**  
//    Berilgan satrning "Hello" bilan boshlanishi va "!" bilan tugashi haqida ma'lumot beruvchi funksiya yozing


// 3. **Satrning boshlanishi va tugashi**  
//    Berilgan satrning "Hello" bilan boshlanishi va "!" bilan tugashi haqida ma'lumot beruvchi funksiya yozing
// function modifyString(string) {
//     let strArray = Array.from(string);
//     strArray.unshift("H", "e", "l", "l", "o");
//     strArray.push("!");
//     return strArray.join("");
// }
// let str = " world";
// let modifiedString = modifyString(str);
// console.log(modifiedString);

// 4. **Satrni qisqartirish**  
//    Berilgan satrni 10 ta belgidan iborat qilib qisqartiruvchi funksiya yozing
// function shortString(string) {
//     let result = "";
//     let strArray = Array.from(string);
//     strArray.forEach((value, index) => {
//         if (index < 10) {
//             result += value;
//         }
//     });
//     return result;
// }
// let originalString = "salom hammaga yahshimisizlar";
// let shortenedString = shortString(originalString);
// console.log(shortenedString);

// 5. **Satr ichidagi belgilarni almashtirish**  
//    Berilgan satrda "a" harfini "o" harfiga almashtiruvchi funksiya yozing
// function replacestr(string) {
//     let result = [];
//     string.split('').forEach(function(value) {
//         if (value === 'a') {
//             result.push('o');
//         } else {
//             result.push(value);
//         }
//     });
//     return result.join('');
// }
// let originalString = "salomat";
// let modifiedString = replacestr(originalString);
// console.log(modifiedString);

// 6. **Satrning ma'lum bir indeksidagi belgi**  
//    Berilgan satrning 5-indeksidagi belgi haqida ma'lumot beruvchi funksiya yozing
// function finElementAtIndex(string, index) {
//     if (index >= 0 && index < string.length) {
//         return `Satrning ${index}-indeksidagi belgi: '${string[index]}'`;
//     } else {
//         return `Index ${index} to'g'ri emas. Satrning uzunligi ${string.length}.`;
//     }
// }
// let str = "hammaga salom";
// let index = 5;
// let result = finElementAtIndex(str, index);
// console.log(result);

// 7. **Satr ichida qidiruv**  
//    Berilgan satrda "JavaScript" so'zining mavjudligini tekshiruvchi funksiya yozing va natijani ekranga chiqaring
// function searchWordInString(string, word) {
//     let wordsArray = string.split(' ');
//     let found = false;
//     wordsArray.forEach((arrElement) => {
//         if (arrElement === word) {
//             found = true;
//         }
//     });h
//     if (found) {
//         console.log("Mavjud");
//     } else {
//         console.log("Mavjud emas");
//     }
// }
// let str = "Men JavaScript dasturlash tilida kod yozaman.";
// let wordToSearch = "JavaScript";
// searchWordInString(str, wordToSearch);

