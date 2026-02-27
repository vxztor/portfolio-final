const galleries = {
  eletrica: {
    title: 'Serviços Elétricos',
    path: 'imagens/eletrica/',
    images: [
      'eletrica-01.jpg',
      'eletrica-02.jpg',
      'eletrica-03.jpg',
      'eletrica-04.jpg',
      'eletrica-05.jpeg',
      'eletrica-06.jpg',
      'eletrica-07.jpg',
      'eletrica-08.jpg',
      'eletrica-09.jpg',
      'eletrica-10.jpg',
      'eletrica-11.jpeg',
      'eletrica-12.jpg',
      'eletrica-15.jpg',
      'eletrica-16.jpg',
      'eletrica-17.jpg',
      'eletrica-18.jpg',
      'eletrica-19.jpg',
      'eletrica-20.webp',
      'eletrica-25.jpg',
      'eletrica-27.jpg',
      'eletrica-29.jpg',
      'eletrica-30.webp',
      'eletrica-31.jpg',
      'eletrica-32.webp',
      'eletrica-33.jpg',
      'eletrica-34.webp',
      'eletrica-35.jpg',
      'eletrica-37.jpg',
      'eletrica-38.webp',
      'eletrica-39.jpg',
      'eletrica-40.jpg',
      'eletrica-41.jpg',
      'eletrica-42.jpg',
      'eletrica-43.jpeg',
      'eletrica-44.webp',
      'eletrica-45.jpg',
      'eletrica-46.jpg',
      'eletrica-47.jpg',
      'eletrica-48.webp',
      'eletrica-49.jpg',
      'eletrica-50.jpg',
      'eletrica-51.jpeg',
      'eletrica-52.jpg',
      'eletrica-53.jpg',
      'eletrica-54.jpg',
      'eletrica-55.jpg',
      'eletrica-56.webp',
      'eletrica-57.jpg',
      'eletrica-58.jpg',
      'eletrica-59.jpg'
    ]
  },

comandos: {
  title: 'Comandos Elétricos',
  path: 'imagens/comandos-eletricos/',
  images: [
    'comando-01.webp',
    'comando-02.jpg',
    'comando-03.jpg',
    'comando-04.jpg',
    'comando-05.jpg',
    'comando-06.jpg',
    'comando-07.jpg',
    'comando-08.jpeg',
    'comando-09.jpg',
    'comando-10.jpeg',
    'comando-11.jpg',
    'comando-12.jpg',
    'comando-13.jpg',
    'comando-14.jpg',
    'comando-15.jpg'
  ]
},

  ar: {
    title: 'Refrigeração',
    path: 'imagens/ar-condicionado/',
    images: [
      'ar-condicionado-01.jpg',
      'ar-condicionado-02.jpg',
      'ar-condicionado-03.jpg',
      'ar-condicionado-04.jpg',
      'ar-condicionado-05.jpg',
      'ar-condicionado-06.jpg',
      'ar-condicionado-07.jpg',
      'ar-condicionado-08.jpg',
      'ar-condicionado-09.jpg',
      'ar-condicionado-10.jpg',
      'ar-condicionado-11.webp',
      'ar-condicionado-12.jpg',
      'ar-condicionado-13.jpg',
      'ar-condicionado-14.jpg',
      'ar-condicionado-15.jpg',
      'ar-condicionado-16.jpeg',
      'ar-condicionado-17.jpeg',
      'ar-condicionado-18.jpg',
      'ar-condicionado-19.jpg',
      'ar-condicionado-20.jpg',
      'ar-condicionado-21.jpg',
      'ar-condicionado-22.webp',
      'ar-condicionado-23.jpg',
      'ar-condicionado-24.jpeg',
      'ar-condicionado-25.jpg',
      'ar-condicionado-26.jpg',
      'ar-condicionado-27.jpeg',
      'ar-condicionado-28.jpg',
      'ar-condicionado-29.jpg',
      'ar-condicionado-30.jpg',
      'ar-condicionado-31.jpg',
      'ar-condicionado-32.webp',
      'ar-condicionado-33.jpg',
      'ar-condicionado-34.jpg',
      'ar-condicionado-35.jpg',
      'ar-condicionado-36.jpeg',
      'ar-condicionado-37.jpg'
    ]
  },


  outros: {
    title: 'Outros Serviços',
    path: 'imagens/outros/',
    images: [
      'outros-01.jpg',
      'outros-02.jpeg',
      'outros-03.jpg',
      'outros-04.jpg',
      'outros-05.jpeg',
      'outros-06.jpg',
      'outros-07.jpg',
      'outros-08.jpg',
      'outros-09.jpg',
      'outros-10.jpg',
      'outros-11.jpg',
      'outros-12.jpg',
      'outros-13.jpg',
      'outros-14.jpg'
    ]
  }
};

let lightbox = GLightbox({
  selector: '.glightbox',
  loop: true,
  zoomable: true,
  draggable: true,
  touchNavigation: true,
  closeButton: true,
  preload: true,
  openEffect: 'zoom',
  closeEffect: 'fade',
  slideEffect: 'slide',
});


function showGallery(type) {
  const modal = document.getElementById('galleryModal');
  const data = galleries[type];
  const gallery = document.getElementById('gallery');

  if (!data) return;

  gallery.innerHTML = '';

  data.images.forEach(img => {
    const a = document.createElement('a');
    a.href = data.path + img;
    a.className = 'glightbox'; // Importante para o script reconhecer
    a.setAttribute('data-gallery', 'portfolio'); // Mesma categoria para navegar entre elas

    const image = document.createElement('img');
    image.src = data.path + img;
    image.loading = "lazy"; // Ajuda a carregar mais rápido

    a.appendChild(image);
    gallery.appendChild(a);
  });

  modal.style.display = 'block';

  // Destrói a instância antiga e cria uma nova com os recursos ativados
  if (window.myLightbox) window.myLightbox.destroy();
  
  window.myLightbox = GLightbox({
    selector: '.glightbox',
    loop: true,
    zoomable: true,
    draggable: true
  });
}

function closeGallery() {
  document.getElementById('galleryModal').style.display = 'none';
}

lightbox.reload();

// Funções para o Modal de História
function openHistory() {
  const modal = document.getElementById('historyModal');
  modal.style.display = 'flex'; // Usa flex para centralizar
}

function closeHistory() {
  const modal = document.getElementById('historyModal');
  modal.style.display = 'none';
}

// Fecha o modal se clicar fora da caixinha
window.onclick = function(event) {
  const modal = document.getElementById('historyModal');
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}