import {videos} from '../data/videos.js';

function renderVideoGrid() {
  let html = '';

  videos.forEach((video) => {
    html += `
      <div class="video-preview">
        <a href=${video.url}>
          <div class="thumbnail-row">
            <img class="thumbnail" src="${video.thumbnail}">
            <div class="video-time">${video.length}</div>
          </div>
        </a>
        <div class=video-info-grid>
          <div class="channel-picture">
            <a href="${video.channel.url}">
              <img class="profile-picture" src="${video.channel.picture}">
            </a>
          </div>
          <div class="video-info">
            <a class="video-title-link" href="${video.url}">
              <p class="video-title">
                ${video.title}
              </p>
            </a>
            <a class="channel-link" href="${video.channel.url}">
              <p class="video-author">
                ${video.channel.name}
              </p>
            </a>
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
