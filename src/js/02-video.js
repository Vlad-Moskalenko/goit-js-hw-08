import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const STORAGE_KEY = "videoplayer-current-time";

const iframe = document.querySelector('iframe');
const player = new Player(iframe)

player.on('timeupdate', throttle(getCurrentTime, 1000))

window.addEventListener('load', onPlayCurrentTime)

function getCurrentTime({seconds}) {
  localStorage.setItem(STORAGE_KEY, seconds)
};

function onPlayCurrentTime() {
  const currentTime = localStorage.getItem(STORAGE_KEY) || 0;

  player.setCurrentTime(currentTime)
}
