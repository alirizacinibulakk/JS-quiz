alert("10 soruluk yazılım testine hoşgeldiniz!\nBaşlamak için lütfen butona tıklayın.");

let correctAnswer = 0;
let wrongCount = 0

let question1 = prompt("1. Soru: Yazılım nedir?\nA: Donanım\nB: İşlemci\nC: Programlar\nD: Ağ bileşeni\nSeçtiğiniz şıkkı giriniz:");

if (question1 === "C" || question1 === "c") {
    correctAnswer++;
    console.log("Doğru cevap: " + correctAnswer); // hoca tarafından kontrol ederken sistem çalışıyor mu diye kolaylık açısından yazılmıştır.
} else {
    wrongCount++; 
    alert("Doğru cevap: C) Programlar");
    console.log("Yanlış cevap: " + wrongCount); // hoca tarafından kontrol ederken, sistem çalışıyor mu diye kolaylık açısından yazılmıştır.
}
let question2 = prompt("2. Soru: Programlama dili nedir?\nA: Donanım dili\nB: İnsan dili\nC: Komutlar bütünü\nD: Web dili\nSeçtiğiniz şıkkı giriniz:");

if (question2 === "C" || question2 === "c") {
    correctAnswer++; 
    console.log("Doğru cevap: " + correctAnswer); // hoca tarafından kontrol ederken, sistem çalışıyor mu diye kolaylık açısından yazılmıştır.
} else {
    wrongCount++; 
    alert("Doğru cevap: C) Komutlar bütünü");
    console.log("Yanlış cevap: " + wrongCount); // hoca tarafından kontrol ederken, sistem çalışıyor mu diye kolaylık açısından yazılmıştır.
}
let question3 = prompt("3. Soru: Algoritma nedir?\nA: Bir web sayfasını tasarlama yöntemi\nB: Bilgisayarın belleğini arttıran işlem\nC: Bir dosyayı kaydetme yöntemi\nD: Bir problemi çözmek için adım adım işlemler dizisi\nSeçtiğiniz şıkkı giriniz:");

if (question3 === "D" || question3 === "d") {
    correctAnswer++; 
    console.log("Doğru cevap: " + correctAnswer); // hoca tarafından kontrol ederken, sistem çalışıyor mu diye kolaylık açısından yazılmıştır.
} else {
    wrongCount++; 
    alert("Doğru cevap: D) Bir problemi çözmek için adım adım işlemler dizisi");
    console.log("Yanlış cevap: " + wrongCount); // hoca tarafından kontrol ederken, sistem çalışıyor mu diye kolaylık açısından yazılmıştır.
}
let question4 = prompt("4. Soru: Değişken nedir??\nA: Verileri saklamak için kullanılan bir yazılım geliştirme aracı\nB: Bilgisayara dışarıdan bağlanan bir cihaz\nC: Bir yazılımın güncelleme işlemi\nD: Bilgisayarın belleğinde verileri depolayan birim\nSeçtiğiniz şıkkı giriniz:");

if (question4 === "D" || question4 === "d") {
    correctAnswer++; 
    console.log("Doğru cevap: " + correctAnswer); // hoca tarafından kontrol ederken, sistem çalışıyor mu diye kolaylık açısından yazılmıştır.
} else {
    wrongCount++; 
    alert("Doğru cevap: D) Bilgisayarın belleğinde verileri depolayan birim");
    console.log("Yanlış cevap: " + wrongCount); // hoca tarafından kontrol ederken, sistem çalışıyor mu diye kolaylık açısından yazılmıştır.
}
let question5 = prompt("5. Soru: Döngü (loop) nedir?\nA: Aynı kod bloğunun tekrar tekrar çalıştırılması için kullanılan yapı\nB: Bir dosyayı tekrar yüklemek için kullanılan işlem\nC: Bilgisayarın açılış işlemi\nD: Programı durduran bir komut\nSeçtiğiniz şıkkı giriniz:");

if (question5 === "A" || question5 === "a") {
    correctAnswer++; 
    console.log("Doğru cevap: " + correctAnswer); // hoca tarafından kontrol ederken, sistem çalışıyor mu diye kolaylık açısından yazılmıştır.
} else {
    wrongCount++; 
    alert("Doğru cevap: A) Aynı kod bloğunun tekrar tekrar çalıştırılması için kullanılan yapı");
    console.log("Yanlış cevap: " + wrongCount); // hoca tarafından kontrol ederken, sistem çalışıyor mu diye kolaylık açısından yazılmıştır.
}
let question6 = prompt("6. Soru: if ve else yapısı ne işe yarar?\nA: Bilgisayarı yeniden başlatır\nB: Koşullara göre farklı kodların çalışmasını sağlar\nC: Ekrana metin yazdırmak için kullanılır\nD: Verileri bir dosyaya kaydeder\nSeçtiğiniz şıkkı giriniz:");

if (question6 === "B" || question6 === "b") {
    correctAnswer++; 
    console.log("Doğru cevap: " + correctAnswer); // hoca tarafından kontrol ederken, sistem çalışıyor mu diye kolaylık açısından yazılmıştır.
} else {
    wrongCount++; 
    alert("Doğru cevap: B: Koşullara göre farklı kodların çalışmasını sağlar");
    console.log("Yanlış cevap: " + wrongCount); // hoca tarafından kontrol ederken, sistem çalışıyor mu diye kolaylık açısından yazılmıştır.
}
let question7 = prompt("7. Soru: Fonksiyon nedir?\nA: Programın bir bölümünü tekrar çalıştıran yapı\nB: Yazılımda verileri saklamak için kullanılan alan\nC: Belirli bir görevi yerine getiren ve tekrar kullanılabilen kod parçası\nD: Bir programı silmek için kullanılan komut\nSeçtiğiniz şıkkı giriniz:");

if (question7 === "C" || question7 === "c") {
    correctAnswer++; 
    console.log("Doğru cevap: " + correctAnswer); // hoca tarafından kontrol ederken, sistem çalışıyor mu diye kolaylık açısından yazılmıştır.
} else {
    wrongCount++; 
    alert("Doğru cevap: C: Belirli bir görevi yerine getiren ve tekrar kullanılabilen kod parçası");
    console.log("Yanlış cevap: " + wrongCount); // hoca tarafından kontrol ederken, sistem çalışıyor mu diye kolaylık açısından yazılmıştır.
}
let question8 = prompt("8. Soru: Yığın (stack) ve kuyruk (queue) arasındaki fark nedir?\nA: Yığın FIFO, kuyruk LIFO prensibiyle çalışır\nB: Yığın LIFO, kuyruk FIFO prensibiyle çalışır\nC: Yığın verileri depolar, kuyruk ise dosyaları siler\nD: Yığın bellek yönetimini, kuyruk ise ağ yönetimini sağlar\nSeçtiğiniz şıkkı giriniz:");

if (question8 === "B" || question8 === "b") {
    correctAnswer++; 
    console.log("Doğru cevap: " + correctAnswer); // hoca tarafından kontrol ederken, sistem çalışıyor mu diye kolaylık açısından yazılmıştır.
} else {
    wrongCount++; 
    alert("Doğru cevap: B: Yığın LIFO, kuyruk FIFO prensibiyle çalışır");
    console.log("Yanlış cevap: " + wrongCount); // hoca tarafından kontrol ederken, sistem çalışıyor mu diye kolaylık açısından yazılmıştır.
}
let question9 = prompt("9. Soru: Nesne yönelimli programlama (OOP) nedir?\nA: Sadece internet üzerinde çalışan bir programlama dili\nB: Bilgisayarın ağ bağlantılarını kontrol eden yapı\nC: Yazılımı nesneler aracılığıyla modelleyen programlama paradigması\nD: Veritabanı yönetim sistemi\nSeçtiğiniz şıkkı giriniz:");

if (question9 === "C" || question9 === "c") {
    correctAnswer++; 
    console.log("Doğru cevap: " + correctAnswer); // hoca tarafından kontrol ederken, sistem çalışıyor mu diye kolaylık açısından yazılmıştır.
} else {
    wrongCount++; 
    alert("Doğru cevap: C: Yazılımı nesneler aracılığıyla modelleyen programlama paradigması");
    console.log("Yanlış cevap: " + wrongCount); // hoca tarafından kontrol ederken, sistem çalışıyor mu diye kolaylık açısından yazılmıştır.
}
let question10 = prompt("10. Soru: Yazılım geliştirmede hata ayıklama (debugging) nedir?\nA: Yazılımı güncelleme süreci\nB: Programdaki hataları bulma ve düzeltme süreci\nC: Programı çalıştırma komutu\nD: Bilgisayarı kapatma işlemi\nSeçtiğiniz şıkkı giriniz:");

if (question10 === "B" || question10 === "b") {
    correctAnswer++; 
    console.log("Doğru cevap: " + correctAnswer); // hoca tarafından kontrol ederken, sistem çalışıyor mu diye kolaylık açısından yazılmıştır.
} else {
    wrongCount++; 
    alert("Doğru cevap: B: Programdaki hataları bulma ve düzeltme süreci");
    console.log("Yanlış cevap: " + wrongCount); // hoca tarafından kontrol ederken, sistem çalışıyor mu diye kolaylık açısından yazılmıştır.
}

alert("Testi Bitirdiniz!\nDoğru Cevap Sayısı: " + correctAnswer + "\nYanlış Cevap Sayısı: " + wrongCount);

