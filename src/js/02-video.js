import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const STORAGE_KEY = 'videoplayer-current-time'
const iframe = document.getElementById('vimeo-player');
const player = new Player(iframe);

function saveCurrentTime({seconds}) {
    localStorage.setItem(STORAGE_KEY, seconds);
 }
player.on('timeupdate', throttle(saveCurrentTime, 1000))

player.setCurrentTime(localStorage.getItem(STORAGE_KEY) ?? 0) 
