// JavaScript Document
function pilih(){
    var pil=document.getElementById("form1").pic.value;
     if (pil=="1")
       {
           document.getElementById("img").innerHTML="<img src='IMG/Kucing.jpeg'>";
           window.alert("Ini Adalah Gambar kucing.jpg");
       }
       else if (pil=="2")
       {
           document.getElementById("img").innerHTML="<img src='IMG/kelinci.jpg'>";
           window.alert("Ini Adalah Gambar kelinci.jpg");
       }
       else if (pil=="3")
       {
           document.getElementById("img").innerHTML="<img src='IMG/ikan.jpg'>";
           window.alert("Ini Adalah Gambar ikan.jpg");
       }
       else if (pil=="4")
       {
           document.getElementById("img").innerHTML="<img src='IMG/sapi.jpg'>";
           window.alert("Ini Adalah Gambar sapi.jpg");
       }
       else if (pil=="5")
       {
           document.getElementById("img").innerHTML="<img src='IMG/domba.jpg'>";
           window.alert("Ini Adalah Gambar domba.jpg");
       }
       else if (pil=="6")
       {
           document.getElementById("img").innerHTML="<img src='IMG/zebra.jpg'>";
           window.alert("Ini Adalah Gambar zebra.jpg");
       }
       else if (pil=="7")
       {
           document.getElementById("img").innerHTML="<img src='IMG/jerapa.jpg'>";
           window.alert("Ini Adalah Gambar jerapa.jpg");
       }
       else{
           document.getElementById("img").innerHTML="<img src='IMG/Pilih.jpg'>";
       }
       
   }