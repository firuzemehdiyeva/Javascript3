//1.Her defe ferqli rengde ekrana cixmali (console.log(${gun} gun ${saat} saat ${deqiqe} deqiqe ${saniye} saniye);)


// function ferqlireng(gun, saat, deqiqe, saniye) { 
// }
// setInterval(() => {
//     let date = new Date();
//     let gun = date.getDate();
//     let saat = date.getHours();
//     let deqiqe = date.getMinutes();
//     let saniye = date.getSeconds();
//     let colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange','black'];
//     let randomColor = colors[Math.floor(Math.random() * colors.length)];
//     console.log(`%c${gun} gün ${saat} saat ${deqiqe} saniye ${saniye} saniye`, `color: ${randomColor};`);

//   ferqlireng(gun, saat, deqiqe, saniye);
// }, 1000);





// //2.Evde yazdiginiz students datasinda searching yazmaq. Prompt-da telebenin adini yazacam eger ele bir telebe varsa mene onu qaytarmalidir. 

  
// let studentsData = {
//   "Firuze": {"soyad": "Mehdiyeva", 
//              "yas": 19
//             },
//     "Fidan" :{
//              "soyad": "Valiyeva", 
//              "yas": 20
//     }  ,  
//     "Sehla" :{
//              "soyad": "Bagirova", 
//              "yas": 25
//     }  ,
//     "Turqay" :{
//              "soyad": "Bagirov", 
//              "yas": 20
//     } , 
//     "Turay" :{
//              "soyad": "Zeynalova", 
//              "yas": 20
//           }        
//           };
          
// let studentName = prompt("Adi daxil edin:");


// if (studentsData.hasOwnProperty(studentName)) {
//   console.log(`${studentName} yasi: ${studentsData[studentName].yas}`);
//   console.log(`${studentName}  ${studentsData[studentName].soyad }`);
// } else {
  
//   console.log("Bele bir ad yoxdur");
// }



// 3. Prompt ile daxil olunan her soz asagidaki kimi console-da cixmalidir:
  //Ornek: hello
  //h
  //he
  //hel
  //hell
  //hello
  //hell
  //hel
  //he
  //h
  
  
// function printWordPyramid(yazi){
//     for( let i=0; i<yazi.length*2-1;i++){
//         let substrLength = i<yazi.length ? i+1 : yazi.length*2-i-1;
//         console.log(yazi.substring(0,substrLength));
//     }
// }
// let yazi = prompt("Soz daxil et:");
//     printWordPyramid(yazi);
   
