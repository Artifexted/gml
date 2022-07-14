// Contenido de la playlist
const aSongs = [
  { title: "Sympatico", author: "Stephen Kelly", url: "../assets/song/sympatico.mp3" },
  { title: "Cazador", author: "Germán Lucero", url: "../assets/song/cazador.mp3" },
  { title: "Corriendo desde atras", author: "Tomas Hernandez", url: "../assets/song/corriendo_desde_atras.mp3" },
  { title: "Darse cuenta", author: "The Black Ladies", url: "../assets/song/darse_cuenta.mp3" },
  { title: "El viento en la cara", author: "Kenio", url: "../assets/song/el_viento_en_la_cara.mp3" },
  { title: "Toc toc ja ja", author: "Germán Lucero", url: "../assets/song/toc_toc_ja_ja.mp3" },
  { title: "A la sombra", author: "Barbara Bluedeep", url: "../assets/song/a_la_sombra.mp3" },
  { title: "Confundido", author: "Sianestesia", url: "../assets/song/confundido.mp3" },
  { title: "En mi mambo", author: "Franco Parisi", url: "../assets/song/en_mi_mambo.mp3" },
  { title: "Estás acá", author: "Rodrigo", url: "../assets/song/estas_aca.mp3" },
  { title: "Fanter", author: "Lil Grow", url: "../assets/song/fanter.mp3" },
  { title: "Manisha", author: "Federico Moretto", url: "../assets/song/manisha.mp3" },
  { title: "No todo brilla y gira", author: "Elias Scutti", url: "../assets/song/no_todo_brilla_y_gira.mp3" },
  { title: "Otra oportunidad", author: "Francisco", url: "../assets/song/otra_oportunidad.mp3" },
  { title: "Paraguita", author: "ESCUDERO, Jose Nicolas", url: "../assets/song/paraguita.mp3" },
  { title: "Robar tu soledad", author: "Algo Natural", url: "../assets/song/robar_tu_soledad.mp3" },
  { title: "Si tu te vas", author: "Elias", url: "../assets/song/si_tu_te_vas.mp3" },
  { title: "Tu canción", author: "Rodrigo Villegas", url: "../assets/song/tu_cancion.mp3" },
  { title: "Ya no está", author: "Hijos de Apolo", url: "../assets/song/ya_no_esta.mp3" }
];

let htmlCodeProd = ``;

aSongs.forEach(function(song) {
    htmlCodeProd += `<li>
      <a href="${song.url}">
        ${song.title} - ${song.author}
      </a>
  </li>`
});

const sSongs = document.querySelector("#playlist");

sSongs.innerHTML = htmlCodeProd;

// Contenido de la playlist de BEATS
const aBeats = [
  { title: "Rabioso - Surfónico", url: "../assets/song/beats/rabioso.mp3" },
  { title: "Escape - Surfónico", url: "../assets/song/beats/escape.mp3" },
  { title: "Verte - Surfónico", url: "../assets/song/beats/verte.mp3" },
  { title: "Loop para app - Surfónico", url: "../assets/song/beats/loop_app.mp3" }
];

let htmlCodeBeats = ``;

aBeats.forEach(function(beat) {
    htmlCodeBeats += `<li>
      <a href="${beat.url}">
        ${beat.title}
      </a>
  </li>`
});

const sBeats = document.querySelector("#playlist_beats");

sBeats.innerHTML = htmlCodeBeats;

// Funcionalidad del reproductor
function init(){
    var audio = document.getElementById('audio');
    var playlist_prod = document.getElementById('playlist');
    var playlist_beats = document.getElementById('playlist_beats');
    var tracks_prod = playlist_prod.getElementsByTagName('a');
    var tracks_beats = playlist_beats.getElementsByTagName('a');
    audio.volume = 1;
    //audio.play();
    
    for(var track in tracks_prod) {
      var link = tracks_prod[track];
      if(typeof link === "function" || typeof link === "number") continue;
      
			link.addEventListener('click', function(e) {
      	e.preventDefault();
        var song = this.getAttribute('href');
       	run(song, audio, this);
      });
    }

    /*for(var track in tracks_beats) {
      var link = tracks_beats[track];
      if(typeof link === "function" || typeof link === "number") continue;
      
			link.addEventListener('click', function(e) {
      	e.preventDefault();
        var song = this.getAttribute('href');
       	run(song, audio, this);
      });
    }*/

}

let htmlMusicPlayer = `
<audio id="audio" preload="auto" tabindex="0" controls="" >
  <source src="${aSongs[Math.floor(Math.random()*aSongs.length)].url}">
</audio>`;

const drawMusicPlayer = document.querySelector("#player");

drawMusicPlayer.innerHTML = htmlMusicPlayer;

init();

/*
// Funcionalidad del reproductor de BEATS
function init_beats() {
  var audio_beats = document.getElementById('audio');
  var playlist_beats = document.getElementById('playlist_beats');
  var tracks = playlist_beats.getElementsByTagName('a');
  audio_beats.volume = 1;
  //audio.play();
  
  for(var track in tracks) {
    var link = tracks[track];
    if(typeof link === "function" || typeof link === "number") continue;
    
    link.addEventListener('click', function(e) {
      e.preventDefault();
      var song = this.getAttribute('href');
       run(song, audio, this);
    });
  }
  
  audio.addEventListener('ended',function(e) {
      for(var track in tracks) {
        var link = tracks[track];
        var nextTrack = parseInt(track) + 1;
        if(typeof link === "function" || typeof link === "number") continue;
        if(!this.src) this.src = tracks[0];
        if(track == (tracks.length - 1)) nextTrack = 0;
                                console.log(nextTrack);
        if(link.getAttribute('href') === this.src) {
          var nextLink = tracks[nextTrack];
          run(nextLink.getAttribute('href'), audio_beats, nextLink);
          break;
        }
      }
  });
}

init_beats();*/

/* Reproducir sonido */
function run(song, audio, link){
  var parent = link.parentElement;

  //quitar el active de todos los elementos de la lista
  var items = parent.parentElement.getElementsByTagName('li');
  for(var item in items) {
    if(items[item].classList)
      items[item].classList.remove("active");
  }
  
  //agregar active a este elemento
  parent.classList.add("active");
  
  //tocar la cancion
  audio.src = song;
  audio.load();
  audio.play();
}
