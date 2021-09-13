let player;
const playerContainer = $('.player');
//let soundControl;


 


let eventsInit = () => {
  $('.player__start').click(e => {
    e.preventDefault();
  

    if (playerContainer.hasClass("paused")) {
      
      $('#pause').hide();
$('#play').show();
$('#player-bg').show();
      player.pauseVideo();
    } else {
      $('#play').hide();
$('#pause').show();
$('#player-bg').hide();
      player.playVideo();
    }
  });

 // document.addEventListener('DOMContentLoaded', e => {
  //  video = document.getElementById('player');
////soundControl = document.getElementById('volumeLevel');
//soundControl.addEventListener('click', changeSoundVolume);
//soundControl.addEventListener('mouseup', changeSoundVolume);

//soundControl.min = 0;
//soundControl.max = 10;

//soundControl.value = soundControl.min;

//function changeSoundVolume() {
//  video.volume = soundControl.value/10;
//}
//});


  
  $(".player__progressBar").click(e => {
    const bar = $(e.currentTarget);
    const clickedPosition = e.originalEvent.layerX;
    
    const newButtonPositionPercent = (clickedPosition / bar.width()) * 100;
    const newPlaybackPositionSec =
      (player.getDuration() / 100) * newButtonPositionPercent;
    
    $(".player__progressBar-reg").css({
      left: `${newButtonPositionPercent}%`
    });

    $(".player__progressBar").css({
      left: `${newButtonPositionPercent}%`
    });

    
    player.seekTo(newPlaybackPositionSec);
   });

   $(".player__splash").click(e => {
    player.playVideo();
    $('#player-bg').hide();

  })
 };


 $(".player__volume-level").click(e => {
  const volumeBar = $(e.currentTarget);
  const clickedPositionOnVolumeBar = e.originalEvent.layerX;
  const newRegPositionPercent = (clickedPositionOnVolumeBar / volumeBar.width()) * 100;
 
   $(".player__volume-reg").css({
    left: `${newRegPositionPercent}%`
  });
  
  
  player.setVolume(newRegPositionPercent);
 });

 $(".player__volume-icon").click(e => {
  e.preventDefault();
  

    if (player.isMuted()) {
      
      player.unMute();
    } else {
      player.mute();
    }

 });

 




 const onPlayerReady = () => {
  let interval;
  const durationSec = player.getDuration();
  
  
  interval = setInterval(() => {
    const completedSec = player.getCurrentTime();
    const completedPercent = (completedSec / durationSec) * 100;
  
    $(".player__progressBar-reg").css({
      left: `${completedPercent}%`
    });
  
    
  }, 1000);
 };
 
 
 const onPlayerStateChange = event => {
  /*
    -1 (воспроизведение видео не начато)
    0 (воспроизведение видео завершено)
    1 (воспроизведение)
    2 (пауза)
    3 (буферизация)
    5 (видео подают реплики).
  */
  switch (event.data) {
    case 1:
      playerContainer.addClass("active");
      playerContainer.addClass("paused");
      break;
  
    case 2:
      playerContainer.removeClass("active");
      playerContainer.removeClass("paused");
      break;
  }
 };
 



function onYouTubeIframeAPIReady() {
 player = new YT.Player("yt-player", {
   height: "392",
   width: "100%",
   videoId: "W86cTIoMv2U",
   events: {
   onReady: onPlayerReady,
   onStateChange: onPlayerStateChange
   },
   playerVars: {
    controls: 0,
    disablekb: 1,
    showinfo: 0,
    rel: 0,
    autoplay: 0,
    modestbranding: 1
  }
 });
}


eventsInit();