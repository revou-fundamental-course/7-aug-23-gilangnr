// untuk menghitung luas segitiga
function hitungLuasSegitiga() {
  let alas = parseFloat(document.getElementById("alas-s").value);
  let tinggi = parseFloat(document.getElementById("tinggi-s").value);
  let luas = 0.5 * alas * tinggi;
  document.getElementById("luas-s").value = luas;
}
// untuk menghitung keliling segitiga
function hitungKelilingSegitiga() {
  let sisiA = parseFloat(document.getElementById("sisiA").value);
  let sisiB = parseFloat(document.getElementById("sisiB").value);
  let sisiC = parseFloat(document.getElementById("sisiC").value);
  let keliling = sisiA + sisiB + sisiC;
  document.getElementById("keliling-s").value = keliling;
}
// tombol reset segitiga
function resetSegitiga() {
  document.getElementById("alas-s").value = "";
  document.getElementById("tinggi-s").value = "";
  document.getElementById("luas-s").value = "";
  document.getElementById("sisiA").value = "";
  document.getElementById("sisiB").value = "";
  document.getElementById("sisiC").value = "";
  document.getElementById("keliling-s").value = "";
}
// untuk menghitung luas jajar genjang
function hitungLuasJajargenjang() {
  let alas = parseFloat(document.getElementById("alas-j").value);
  let tinggi = parseFloat(document.getElementById("tinggi-j").value);
  let luas = alas * tinggi;
  document.getElementById("luas-j").value = luas;
}
// untuk menghitung keliling jajar genjang
function hitungKelilingJajargenjang() {
  let sisiVertikal = parseFloat(document.getElementById("sisi-vertikal").value);
  let sisiHorizontal = parseFloat(document.getElementById("sisi-horizontal").value);
  let keliling = 2 * (sisiVertikal + sisiHorizontal);
  document.getElementById("keliling-j").value = keliling;
}
// tombol reset jajar genjang
function resetJajargenjang() {
  document.getElementById("alas-j").value = "";
  document.getElementById("tinggi-j").value = "";
  document.getElementById("luas-j").value = "";
  document.getElementById("sisi-vertikal").value = "";
  document.getElementById("sisi-horizontal").value = "";
  document.getElementById("keliling-j").value = "";
}
