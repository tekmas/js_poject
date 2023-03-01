let isim=prompt("adınız :")
let isimAlani=document.querySelector("#myName")
isimAlani.innerHTML=`${isim}`
let tarih = new Date();

var gunler = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"]

//innerHTML ile html sayfamıza dökelim..
let myClock = document.querySelector("#myClock")
myClock.innerHTML =`
${tarih.getHours()}:${tarih.getMinutes()}:${tarih.getSeconds()} ${gunler[tarih.getDay()]} 
`