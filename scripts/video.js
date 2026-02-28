import {videos} from '../data/videos.js';

function renderVideoGrid() {
  let html = '';

  videos.forEach((video) => {
    html += `
      <div class="video-preview">
        <div class="thumbnail-row">
          <img class="thumbnail" src="${video.thumbnail}">
          <div class="video-time">${video.length}</div>
        </div>
        <div class=video-info-grid>
          <div class="channel-picture">
            <img class="profile-picture" src="${video.channel.picture}">
          </div>
          <div class="video-info">
            <p class="video-title">
              ${video.title}
            </p>
            <p class="video-author">
              ${video.channel.name}
            </p>
            <p class="video-stats">
              ${video.views} views &#183; ${video.date}
            </p>
          </div>
        </div>
      </div>
    `;
  });

  document.querySelector('.js-video-grid').innerHTML = html;
}

renderVideoGrid();
