
// Ouverture des menus déroulants
function nav_open(x) {                                     //
  document.getElementById("deroulant_"+ x).hidden = false; // Lorsque la fonction est active, elle affiche le déroulants 'x' avec un ID commencant par 'deroulant_'
}
function nav_close(x){                                    //
  document.getElementById('deroulant_'+ x).hidden = true; // Même principe pour la fermeture
}

// Gif
function padoru_trigger() {                                                   //
  document.getElementById('padoru_gif').src="./images/gif/padoru_trigger.gif" // Lorsque le curseur est sur le GIF, la fonction remplace la source de celui-ci
}
function padoru_untrigger(){                                          //
  document.getElementById('padoru_gif').src="./images/gif/padoru.gif" // Lorsque le curseur quitte le GIF, il retourne à son état d'origine
}

// Ouverture d'une page dans une iframe
function open_page(x) {

  document.getElementById('ytframe').src=""; // Si une vidéo youtube est présente, elle est retirée

  document.getElementById('frame').src=x;  // On remplace la source de l'iframe d'ID 'frame' par la page d'url:'x' que l'on veut ouvrir
}

// Ouverture d'une vidéo youtube
function open_ytvideo(x){
  document.getElementById('frame').src=""; // Si une fenêtre est présente, elle est retirée

  document.getElementById('ytframe').src=x; // On remplace la source de l'iframe d'ID 'ytframe' par la vidéo d'url:'x' que l'on veut ouvrir
}

// Gestion Audio
function audio_play(x) {
  var audio = document.getElementById(x); // 'x' est l'ID de l'audio que l'on veut jouer

  audio.volume = 0.5; // On baisse le volume

  audio.play(); // On lance l'audio
}



function compte_open_close(x){
  var creer_fen=document.getElementById('Créer_fen');
  var connection_fen=document.getElementById('Connection_fen');
  var fen = document.getElementById(x);
  if (fen==creer_fen){          //
    connection_fen.hidden=true; //
    if ( fen.hidden==true ){
      fen.hidden=false;
    }else {
      fen.hidden=true;
    }
  }else {
    creer_fen.hidden=true;
    if ( fen.hidden==true ){  //
      fen.hidden=false;       //
    }else {
      fen.hidden=true;
    }
  }
}
