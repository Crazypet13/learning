let player = require('play-sound')(opts = {})
 
function musicPlayer(audio){
    return new Promise((resolve, reject)=>{
        player.play(audio , function(err){
            if(err){
                reject(err);
            }else{
                resolve()
            }
          });
    });
};

musicPlayer('./audio.mp3').then(()=>{console.log('elindult a music')})
//     (()=>{})() ifi :3

(async()=>{
   await musicPlayer('./audio.mp3');
})();



musicPlayer('./audio.mp3').then(()=>{
    musicPlayer('./audio.mp3').then(()=>{console.log('elindult a music')})
})
