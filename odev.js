// var gelenMusteri = document.querySelector("#inputGelen").value;
// var gidenMusteri = document.querySelector("#inputGiden").value;
// var bekleyenMusteri = document.querySelector("#inputBekleyen").value;
// var btnOturt = document.querySelector("#btnOturt");
// var btnGonder = document.querySelector("#btnGonder");
// var parMusterisayisi = document.querySelector("#parMusterisayisi");
var bekleyenler = 0;
var icerdekiMusteri = 0;
var gelenMusteri = 0;
var gidenMusteri = 0;

function Oturt() {
  icerdekiMusteri += Number(document.querySelector("#inputGelen").value);

  if (icerdekiMusteri <= 90) {
    document.querySelector("#parMusterisayisi").innerHTML =
      "Icerideki musteri sayisi: " + icerdekiMusteri + " 'dir.";
  } else if (icerdekiMusteri > 90) {
    document.querySelector("#parMusterisayisi").innerHTML =
      "Icerideki musteri sayisi: " + 90 + " 'dir.";
    bekleyenler += icerdekiMusteri - 90;
    document.querySelector("#inputBekleyen").innerHTML =
      "Bekleyen musteri sayisi: " + bekleyenler + " 'dir.";
  }
}

function Kaldir() {
  icerdekiMusteri -= Number(document.querySelector("#inputGiden").value);

  if (icerdekiMusteri <= 90) {
    document.querySelector("#parMusterisayisi").innerHTML =
      "Icerideki musteri sayisi: " + icerdekiMusteri + " 'dir.";
  } else if (icerdekiMusteri > 90) {
    if (
      icerdekiMusteri > 90 &&
      bekleyenler - Number(document.querySelector("#inputGiden").value) <
        90 - icerdekiMusteri
    ) {
      bekleyenler =
        bekleyenler - Number(document.querySelector("#inputGiden").value);
      document.querySelector("#parMusterisayisi").innerHTML =
        "Icerideki musteri sayisi: " + bekleyenler + " 'dir.";
    } else {
      document.querySelector("#inputBekleyen").innerHTML =
        "Bekleyen musteri sayisi: " +
        (bekleyenler = icerdekiMusteri - 90) +
        " 'dir.";

      document.querySelector("#parMusterisayisi").innerHTML =
        "Icerideki musteri sayisi: " +
        (icerdekiMusteri - bekleyenler) +
        " 'dir.";
    }
  }
}
// function Masayaal() {
//   icerdekiMusteri += Number(document.querySelector("#inputBekleyen").value);

//   if (icerdekiMusteri <= 90 && bekleyenler >= 90 - icerdekiMusteri) {
//     document.querySelector("#parMusterisayisi").innerHTML =
//       "Icerideki musteri sayisi: " + icerdekiMusteri + " 'dir.";
//   } else if (icerdekiMusteri > 90) {
//     document.querySelector("#parMusterisayisi").innerHTML =
//       "Icerideki musteri sayisi: " + 90 + " 'dir.";
//     bekleyenler = icerdekiMusteri - 90;
//     document.querySelector("#inputBekleyen").innerHTML =
//       "Bekleyen musteri sayisi: " + bekleyenler + " 'dir.";
//   }
// }
// function count() {
//   var icerdekiMusteri += gelenMusteri - gidenMusteri;
//   document.getElementById("musteriSayisi").innerHTML =
//     "Musteri sayisi: " + icerdekiMusteri;
// }
//
