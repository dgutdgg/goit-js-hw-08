import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

if (localStorage.getItem('videotime') != null) {
  player.setCurrentTime(localStorage.getItem('videotime'));
}

const throttledUpdateStorage = throttle(function (data) {
  localStorage.setItem('videotime', data.seconds);
  console.log('current video time!', data);
}, 1000);

player.on('timeupdate', function (data) {
  throttledUpdateStorage(data);
});
