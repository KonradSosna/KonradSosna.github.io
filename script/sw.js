const FILE_NAME = '/script/sw.js';

self.addEventListener('fetch', event => {
    // Checking if the url matches the audio file.
    // This is actually not really needed right now, we could just check if the request is
    // cached (for any file) and return it. If you decide to put the response from the network
    // fetch into the cache then this check might be valueble to only store the audio files.
    if (event.request.url.indexOf(FILE_NAME) === 0) {
        console.log('Audio file requested!')

        event.respondWith(
            caches.match(event.request).then(function (response) {
                console.log(Boolean(response) ? 'Serving from cache' : 'Fetching from network');
                return response || fetch(event.request);
            })
        );
    } else {
        event.respondWith(fetch(event.request));
    }
});