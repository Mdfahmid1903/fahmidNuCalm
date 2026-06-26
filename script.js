const menu = document.querySelector('.menu');
const options = document.querySelector('.options');
const icon = document.querySelector('.fa-xmark');

menu.addEventListener('click', () => {
  options.classList.toggle('active');

  if (options.classList.contains('active')) {
    menu.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  } else {
    menu.innerHTML = '<i class="fa-solid fa-bars"></i>';
  }
});

function loadVideo() {
  const wrapper = document.getElementById('videoWrapper');
  const heroVideo = document.querySelector('.hero-video');

  if (heroVideo.classList.contains('display')) {
    heroVideo.classList.remove('display');
     heroVideo.innerHTML = ` <iframe
        title="vimeo-player"
        src="https://player.vimeo.com/video/1133224775?h=7e30dbcba3"
        width="640"
        height="360"
        frameborder="0"
        referrerpolicy="strict-origin-when-cross-origin"
        allow="
          autoplay;
          fullscreen;
          picture-in-picture;
          clipboard-write;
          encrypted-media;
          web-share;
        "
        allowfullscreen
      ></iframe>
      <i class="fa-solid fa-xmark" ></i>
      `;
  } else {
    heroVideo.classList.add('display');
    heroVideo.innerHTML = '';
  }
}

icon.addEventListener('click', () => {
  loadVideo();
});
