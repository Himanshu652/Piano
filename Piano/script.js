/*let btn = document.getElementById('btn');
let song = document.getElementById('music');

function playMusic(){
    if(song.paused){
        song.play();
    }else{
        song.pause();
    }
    
       
}

btn.addEventListener('click', playMusic);*/

let pianoKeys = document.querySelectorAll('.keys');
let hide = document.querySelector('.hide');
let effect = document.querySelector('.animate');
//let aNote = document.getElementById('A');
//let audio = document.querySelectorAll('audio');


function playMusic(){
    pianoKeys.forEach(key => {
        key.addEventListener('click', e => {
            console.log(e.target.innerHTML);
           let audio = document.createElement('audio');
           audio.src = `/tones/${e.target.innerHTML}.wav`;
           audio.id = `${e.target.innerHTML}`;
           hide.appendChild(audio);
           audio.play();
           effect.classList.add('show');
           setTimeout(function(){
            effect.classList.remove('show');
           },1000)
        });
    });
}

playMusic();

