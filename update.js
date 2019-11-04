// mulai...........
var waktu=new Date()
var hari=waktu.getDay()
var tanggal=waktu.getDate()
var bulan=waktu.getMonth()
var tahun=waktu.getFullYear()
if (tanggal < 7) {tanggal="0"+tanggal}
var hariarray=new Array("UPDATE HARGA : MINGGU","UPDATE HARGA : SENIN","UPDATE HARGA : SELASA","UPDATE HARGA : RABU","UPDATE HARGA : KAMIS","UPDATE HARGA : JUMAT","UPDATE HARGA : SABTU")
var bulanarray=new Array("JANUARI","FEBRUARI","MARET","APRIL","MEI","JUNI","JULI","AGUSTUS","SEPTEMBER","OKTOBER","NOVEMBER","DESEMBER")
document.write(hariarray[hari]+", "+tanggal+" "+bulanarray[bulan]+" "+tahun)
