window.onSpotifyWebPlaybackSDKReady = () => {
    const token = "BQAcZ_qqSEW5R1JixhAqixYFna_CKH81tcFA7rNhkIUUEl2ep5B2RwOOEo0b1IJ8MbFw7a-3Kms_UVStQgHwLX8Ay6kYhSc4bo1Xg12i0l2txmUcoGj4ztXFVvWKyk0aGNcLUMI9nnINOkvrqcs6vyOjYAIBGiuphtXyfH67y9uehEvNxqyjrvG5tCpScPQwOic_G8QKLgsrp2WTufW_-wnL";
    const player = new Spotify.Player({
        name: 'Web Playback SDK Quick Start Player',
        getOAuthToken: cb => { cb(token); },
        volume: 0.5
    });

    // Ready
    player.addListener('ready', ({ device_id }) => {
        console.log('Ready with Device ID', device_id);
    });

    // Not Ready
    player.addListener('not_ready', ({ device_id }) => {
        console.log('Device ID has gone offline', device_id);
    });

    player.addListener('initialization_error', ({ message }) => {
        console.error(message);
    });

    player.addListener('authentication_error', ({ message }) => {
        console.error(message);
    });

    player.addListener('account_error', ({ message }) => {
        console.error(message);
    });

    document.getElementById('togglePlay').onclick = function() {
      player.togglePlay();
    };

    player.connect();
}