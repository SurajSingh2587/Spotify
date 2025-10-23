// Song Database
const songs = [
    {
        name: "Inspire",
        artist: "Bensound",
        img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop",
        audio: "https://www.bensound.com/bensound-music/bensound-inspire.mp3"
    },
    {
        name: "Creative Minds",
        artist: "Bensound",
        img: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300&h=300&fit=crop",
        audio: "https://www.bensound.com/bensound-music/bensound-creativeminds.mp3"
    },
    {
        name: "Acoustic Breeze",
        artist: "Bensound",
        img: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop",
        audio: "https://www.bensound.com/bensound-music/bensound-acousticbreeze.mp3"
    },
    {
        name: "Sunny",
        artist: "Bensound",
        img: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=300&h=300&fit=crop",
        audio: "https://www.bensound.com/bensound-music/bensound-sunny.mp3"
    },
    {
        name: "Tenderness",
        artist: "Bensound",
        img: "https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=300&h=300&fit=crop",
        audio: "https://www.bensound.com/bensound-music/bensound-tenderness.mp3"
    },
    {
        name: "Once Again",
        artist: "Bensound",
        img: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=300&h=300&fit=crop",
        audio: "https://www.bensound.com/bensound-music/bensound-onceagain.mp3"
    },
    {
        name: "Sweet",
        artist: "Bensound",
        img: "https://images.unsplash.com/photo-1458560871784-56d23406c091?w=300&h=300&fit=crop",
        audio: "https://www.bensound.com/bensound-music/bensound-sweet.mp3"
    },
    {
        name: "Love",
        artist: "Bensound",
        img: "https://images.unsplash.com/photo-1476842384041-a57a4f124e2e?w=300&h=300&fit=crop",
        audio: "https://www.bensound.com/bensound-music/bensound-love.mp3"
    },
    {
        name: "Piano Moment",
        artist: "Bensound",
        img: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=300&h=300&fit=crop",
        audio: "https://www.bensound.com/bensound-music/bensound-pianomoment.mp3"
    },
    {
        name: "E.R.F",
        artist: "Bensound",
        img: "https://images.unsplash.com/photo-1485579149621-3123dd979885?w=300&h=300&fit=crop",
        audio: "https://www.bensound.com/bensound-music/bensound-erf.mp3"
    },
    {
        name: "Dreams",
        artist: "Bensound",
        img: "https://images.unsplash.com/photo-1446057032654-9d8885db76c6?w=300&h=300&fit=crop",
        audio: "https://www.bensound.com/bensound-music/bensound-dreams.mp3"
    },
    {
        name: "A Day To Remember",
        artist: "Bensound",
        img: "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=300&h=300&fit=crop",
        audio: "https://www.bensound.com/bensound-music/bensound-adaytoremember.mp3"
    }
];

// Get Elements
const audioPlayer = document.getElementById('audio-player');
const playPauseBtn = document.getElementById('play-pause-btn');
const playIcon = document.getElementById('play-icon');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const shuffleBtn = document.getElementById('shuffle-btn');
const repeatBtn = document.getElementById('repeat-btn');
const seekBar = document.getElementById('seek-bar');
const progressBar = document.getElementById('progress-bar');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
const volumeBar = document.getElementById('volume-bar');
const volumeBtn = document.getElementById('volume-btn');
const currentSongImg = document.getElementById('current-song-img');
const currentSongName = document.getElementById('current-song-name');
const currentArtistName = document.getElementById('current-artist-name');
const likeBtn = document.getElementById('like-btn');
const songCards = document.querySelectorAll('.song-card');
const playlistItems = document.querySelectorAll('.playlist-item');

let currentSongIndex = 0;
let isPlaying = false;
let isShuffle = false;
let repeatMode = 0; // 0: no repeat, 1: repeat all, 2: repeat one

// Initialize
function init() {
    loadSong(0);
    updateGreeting();
    setupEventListeners();
}

// Dynamic Greeting
function updateGreeting() {
    const hour = new Date().getHours();
    const greetingEl = document.getElementById('greeting');
    
    if (hour < 12) {
        greetingEl.textContent = 'Good Morning';
    } else if (hour < 18) {
        greetingEl.textContent = 'Good Afternoon';
    } else {
        greetingEl.textContent = 'Good Evening';
    }
}

// Load Song
function loadSong(index) {
    currentSongIndex = index;
    const song = songs[index];
    
    audioPlayer.src = song.audio;
    currentSongImg.src = song.img;
    currentSongName.textContent = song.name;
    currentArtistName.textContent = song.artist;
}

// Play Song
function playSong() {
    isPlaying = true;
    audioPlayer.play();
    playIcon.classList.remove('fa-play');
    playIcon.classList.add('fa-pause');
}

// Pause Song
function pauseSong() {
    isPlaying = false;
    audioPlayer.pause();
    playIcon.classList.remove('fa-pause');
    playIcon.classList.add('fa-play');
}

// Previous Song
function prevSong() {
    currentSongIndex--;
    if (currentSongIndex < 0) {
        currentSongIndex = songs.length - 1;
    }
    loadSong(currentSongIndex);
    playSong();
}

// Next Song
function nextSong() {
    if (isShuffle) {
        currentSongIndex = Math.floor(Math.random() * songs.length);
    } else {
        currentSongIndex++;
        if (currentSongIndex >= songs.length) {
            currentSongIndex = 0;
        }
    }
    loadSong(currentSongIndex);
    playSong();
}

// Toggle Shuffle
function toggleShuffle() {
    isShuffle = !isShuffle;
    shuffleBtn.classList.toggle('active');
}

// Toggle Repeat
function toggleRepeat() {
    repeatMode = (repeatMode + 1) % 3;
    
    if (repeatMode === 0) {
        repeatBtn.classList.remove('active');
        repeatBtn.querySelector('i').classList.remove('fa-repeat-1');
    } else if (repeatMode === 1) {
        repeatBtn.classList.add('active');
        repeatBtn.querySelector('i').classList.remove('fa-repeat-1');
    } else {
        repeatBtn.classList.add('active');
        repeatBtn.querySelector('i').classList.add('fa-repeat-1');
    }
}

// Update Progress
function updateProgress() {
    const { duration, currentTime } = audioPlayer;
    const progressPercent = (currentTime / duration) * 100;
    progressBar.style.width = `${progressPercent}%`;
    seekBar.value = progressPercent;
    
    currentTimeEl.textContent = formatTime(currentTime);
    if (duration) {
        durationEl.textContent = formatTime(duration);
    }
}

// Set Progress
function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audioPlayer.duration;
    audioPlayer.currentTime = (clickX / width) * duration;
}

// Format Time
function formatTime(time) {
    if (isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

// Volume Control
function updateVolume() {
    const volume = volumeBar.value / 100;
    audioPlayer.volume = volume;
    
    // Update volume icon
    const volumeIcon = volumeBtn.querySelector('i');
    volumeIcon.classList.remove('fa-volume-high', 'fa-volume-low', 'fa-volume-off', 'fa-volume-xmark');
    
    if (volume === 0) {
        volumeIcon.classList.add('fa-volume-xmark');
    } else if (volume < 0.5) {
        volumeIcon.classList.add('fa-volume-low');
    } else {
        volumeIcon.classList.add('fa-volume-high');
    }
    
    // Update volume bar gradient
    volumeBar.style.background = `linear-gradient(to right, white 0%, white ${volumeBar.value}%, #4d4d4d ${volumeBar.value}%, #4d4d4d 100%)`;
}

// Toggle Mute
function toggleMute() {
    if (audioPlayer.volume > 0) {
        audioPlayer.volume = 0;
        volumeBar.value = 0;
    } else {
        audioPlayer.volume = 0.7;
        volumeBar.value = 70;
    }
    updateVolume();
}

// Like Song
function toggleLike() {
    const heart = likeBtn.querySelector('i');
    heart.classList.toggle('fa-regular');
    heart.classList.toggle('fa-solid');
    likeBtn.classList.toggle('active');
}

// Setup Event Listeners
function setupEventListeners() {
    // Playback controls
    playPauseBtn.addEventListener('click', () => {
        isPlaying ? pauseSong() : playSong();
    });
    
    prevBtn.addEventListener('click', prevSong);
    nextBtn.addEventListener('click', nextSong);
    shuffleBtn.addEventListener('click', toggleShuffle);
    repeatBtn.addEventListener('click', toggleRepeat);
    
    // Progress
    audioPlayer.addEventListener('timeupdate', updateProgress);
    seekBar.addEventListener('input', (e) => {
        const time = (e.target.value / 100) * audioPlayer.duration;
        audioPlayer.currentTime = time;
    });
    
    // Volume
    volumeBar.addEventListener('input', updateVolume);
    volumeBtn.addEventListener('click', toggleMute);
    
    // Like button
    likeBtn.addEventListener('click', toggleLike);
    
    // Song ended
    audioPlayer.addEventListener('ended', () => {
        if (repeatMode === 2) {
            playSong();
        } else if (repeatMode === 1 || currentSongIndex < songs.length - 1) {
            nextSong();
        } else {
            pauseSong();
        }
    });
    
    // Song cards
    songCards.forEach((card, index) => {
        card.addEventListener('click', () => {
            loadSong(parseInt(card.dataset.song));
            playSong();
        });
    });
    
    // Playlist items
    playlistItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            loadSong(parseInt(item.dataset.song));
            playSong();
        });
    });
    
    // Initialize volume
    updateVolume();
}

// Initialize app
init();
