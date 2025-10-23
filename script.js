// Song database with real working audio and images
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

// Get elements
const audioPlayer = document.getElementById('audio-player');
const playPauseBtn = document.getElementById('play-pause-btn');
const playIcon = document.getElementById('play-icon');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const progressBar = document.getElementById('progress-bar');
const progress = document.getElementById('progress');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
const volumeBar = document.getElementById('volume-bar');
const currentSongImg = document.getElementById('current-song-img');
const currentSongName = document.getElementById('current-song-name');
const currentArtistName = document.getElementById('current-artist-name');
const songCards = document.querySelectorAll('.song-card');

let currentSongIndex = 0;
let isPlaying = false;

// Load song
function loadSong(index) {
    currentSongIndex = index;
    const song = songs[index];
    
    audioPlayer.src = song.audio;
    currentSongImg.src = song.img;
    currentSongName.textContent = song.name;
    currentArtistName.textContent = song.artist;
    
    // Update active state on cards
    updateActiveCard();
}

// Update active card styling
function updateActiveCard() {
    songCards.forEach((card, index) => {
        if (index === currentSongIndex) {
            card.style.backgroundColor = '#282828';
        } else {
            card.style.backgroundColor = '#181818';
        }
    });
}

// Play song
function playSong() {
    isPlaying = true;
    audioPlayer.play();
    playIcon.classList.remove('fa-play');
    playIcon.classList.add('fa-pause');
    
    // Update play button icons on cards
    updatePlayButtonIcons();
}

// Pause song
function pauseSong() {
    isPlaying = false;
    audioPlayer.pause();
    playIcon.classList.remove('fa-pause');
    playIcon.classList.add('fa-play');
    
    updatePlayButtonIcons();
}

// Update play button icons on song cards
function updatePlayButtonIcons() {
    songCards.forEach((card, index) => {
        const playBtn = card.querySelector('.play-btn i');
        if (index === currentSongIndex && isPlaying) {
            playBtn.classList.remove('fa-play');
            playBtn.classList.add('fa-pause');
        } else {
            playBtn.classList.remove('fa-pause');
            playBtn.classList.add('fa-play');
        }
    });
}

// Play/Pause toggle
playPauseBtn.addEventListener('click', () => {
    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
});

// Previous song
prevBtn.addEventListener('click', () => {
    currentSongIndex--;
    if (currentSongIndex < 0) {
        currentSongIndex = songs.length - 1;
    }
    loadSong(currentSongIndex);
    playSong();
});

// Next song
nextBtn.addEventListener('click', () => {
    currentSongIndex++;
    if (currentSongIndex > songs.length - 1) {
        currentSongIndex = 0;
    }
    loadSong(currentSongIndex);
    playSong();
});

// Update progress bar
audioPlayer.addEventListener('timeupdate', () => {
    const { duration, currentTime } = audioPlayer;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
    progressBar.value = progressPercent;

    // Update time
    currentTimeEl.textContent = formatTime(currentTime);
    if (duration) {
        durationEl.textContent = formatTime(duration);
    }
});

// Set progress bar
progressBar.addEventListener('input', (e) => {
    const value = e.target.value;
    const time = (value / 100) * audioPlayer.duration;
    audioPlayer.currentTime = time;
    progress.style.width = `${value}%`;
});

// Volume control
volumeBar.addEventListener('input', (e) => {
    const volume = e.target.value / 100;
    audioPlayer.volume = volume;
    e.target.style.setProperty('--progress', `${e.target.value}%`);
});

// Set initial volume
audioPlayer.volume = 0.7;
volumeBar.style.setProperty('--progress', '70%');

// Format time
function formatTime(time) {
    if (isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

// Song card click events
songCards.forEach((card, index) => {
    card.addEventListener('click', (e) => {
        // If clicking on the same song that's playing, toggle play/pause
        if (index === currentSongIndex && isPlaying) {
            pauseSong();
        } else if (index === currentSongIndex && !isPlaying) {
            playSong();
        } else {
            // Load and play new song
            loadSong(index);
            playSong();
        }
    });
});

// Auto play next song
audioPlayer.addEventListener('ended', () => {
    nextBtn.click();
});

// Handle loading errors
audioPlayer.addEventListener('error', (e) => {
    console.error('Error loading audio:', e);
    alert('Error loading this song. Trying next song...');
    nextBtn.click();
});

// Load first song on page load
loadSong(0);

// Update song cards with dynamic content
function updateSongCards() {
    songCards.forEach((card, index) => {
        if (songs[index]) {
            const img = card.querySelector('.song-image img');
            const title = card.querySelector('h3');
            const artist = card.querySelector('p');
            
            img.src = songs[index].img;
            img.alt = songs[index].name;
            title.textContent = songs[index].name;
            artist.textContent = songs[index].artist;
        }
    });
}

// Initialize
updateSongCards();
