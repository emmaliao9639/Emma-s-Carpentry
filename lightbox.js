document.addEventListener('DOMContentLoaded', function () {
  var overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';
  overlay.innerHTML = '<button class="lightbox-close" aria-label="Close">&times;</button><img src="" alt="">';
  document.body.appendChild(overlay);

  var overlayImg = overlay.querySelector('img');
  var closeBtn = overlay.querySelector('.lightbox-close');

  function openLightbox(src, alt) {
    overlayImg.src = src;
    overlayImg.alt = alt || '';
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    overlay.classList.remove('active');
    overlayImg.src = '';
    document.body.style.overflow = '';
  }

  closeBtn.addEventListener('click', closeLightbox);
  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) closeLightbox();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeLightbox();
  });

  document.querySelectorAll('.lightbox-trigger').forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      var img = link.querySelector('img');
      openLightbox(link.getAttribute('href'), img ? img.alt : '');
    });
  });
});
