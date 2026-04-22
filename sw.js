const CACHE_NAME = "tempo-parou-v1";
const ASSETS = [
  "./",
  "index.html",
  "styles.css",
  "app.js",
  "manifest.webmanifest",
  "assets/icons/icon.svg",
  "assets/imagens/tela-inicial.svg",
  "assets/imagens/desafio-final.svg",
  "assets/imagens/acerto.jpg",
  "assets/imagens/derrota-final.jpg",
  "assets/imagens/erro.jpg",
  "assets/imagens/narrativa-1.jpg",
  "assets/imagens/narrativa-3.jpg",
  "assets/imagens/narrativa-4.jpg",
  "assets/imagens/narrativa.2.jpg",
  "assets/imagens/pista-bloqueada.jpg",
  "assets/imagens/pista-liberada.jpg",
  "assets/imagens/tempo-esgotado.jpg",
  "assets/imagens/vitoria-final.jpg",
  "assets/sons/acerto.mp3",
  "assets/sons/derrota-final.mp3",
  "assets/sons/erro.mp3",
  "assets/sons/musica.mp3",
  "assets/sons/tempo-esgotado.mp3",
  "assets/sons/tic-tac.mp3",
  "assets/sons/vitoria-final.mp3"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))
    )
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => cachedResponse || fetch(event.request))
  );
});
