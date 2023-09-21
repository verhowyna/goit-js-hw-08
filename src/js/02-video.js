import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.getElementById('vimeo-player');
const player = new Vimeo.Player(iframe);

function saveCurrentTime(time) {
    localStorage.setItem('videoplayer-current-time', time);
}

