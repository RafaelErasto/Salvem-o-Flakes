var motivos = [
    " Ele é perfeito",
    "Da fullbox",
    "ja ganhou world cup",
    "Ele tem a melhor skin do jogo",
      "Dono da Hero Base"
  ];
  
  var imagens = [ "https://pm1.aminoapps.com/6740/8cddd4476329e57003a8c5a8feac9b1994e99b4fv2_hq.jpg",
    "https://static.wikia.nocookie.net/fortnite/images/7/74/Flakes_Power_-_Outfit_-_Fortnite.png/revision/latest?cb=20230221142121",
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fthirstymag.com%2Fconjunto-e-campeonato-do-Flakes-Power-fortnite-3415115.html&psig=AOvVaw28Puak9_vwW_HGoaDo6ONq&ust=1710598907614000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJjAyda79oQDFQAAAAAdAAAAABAa","https://pm1.aminoapps.com/6685/81d3c49965dca2231ea90b6dff1bff696e81ed1c_hq.jpg",
    "https://conteudo.imguol.com.br/c/entretenimento/21/2020/06/15/flakes-power-fortnite-1592242894312_v2_1x1.png",
    "https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2019/10/21/1a0b8ae2-edda-45db-9276-94e68b718bde/games-flakes-entrevista-rapida",
                 
  ];
  
  var i = 0;
  function proximo() {  document.getElementById("album").src = imagens[i];
      document.getElementById("texto").innerHTML = motivos[i];
      
      i++;  
     if(i>4){
       i=0;
     }
  }