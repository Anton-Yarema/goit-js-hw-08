import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player');

const STORAGE_KEY = 'videoplayer-current-time';

const onPlay = function (time) {
  localStorage.setItem(STORAGE_KEY, time.seconds);
};

const savedTime = localStorage.getItem(STORAGE_KEY);

player.on('timeupdate', throttle(onPlay, 1000));

player
  .setCurrentTime(50.465)
  .then(function (seconds) {
    player.setCurrentTime(savedTime);
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;

      default:
    }
  });
