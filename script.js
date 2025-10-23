* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #000;
    color: #fff;
    overflow: hidden;
}

/* Sidebar */
.sidebar {
    position: fixed;
    left: 0;
    top: 0;
    width: 230px;
    height: calc(100vh - 90px);
    background-color: #000;
    padding: 24px 12px;
    overflow-y: auto;
}

.logo {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 30px;
    padding: 0 12px;
}

.logo i {
    color: #1DB954;
}

.nav-menu {
    list-style: none;
    margin-bottom: 30px;
}

.nav-menu li {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 12px;
    cursor: pointer;
    border-radius: 4px;
    transition: all 0.3s;
    font-size: 14px;
    font-weight: 600;
    color: #b3b3b3;
}

.nav-menu li:hover {
    color: #fff;
}

.nav-menu li.active {
    color: #fff;
}

.nav-menu i {
    font-size: 20px;
}

.playlists {
    border-top: 1px solid #282828;
    padding-top: 20px;
}

.playlists p {
    padding: 8px 12px;
    cursor: pointer;
    font-size: 14px;
    color: #b3b3b3;
    transition: all 0.3s;
}

.playlists p:hover {
    color: #fff;
}

/* Main Content */
.main-content {
    margin-left: 230px;
    margin-bottom: 90px;
    height: calc(100vh - 90px);
    overflow-y: auto;
    background: linear-gradient(180deg, #1e3a5f 0%, #121212 100%);
}

.topbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 32px;
    background-color: rgba(0, 0, 0, 0.5);
    position: sticky;
    top: 0;
    z-index: 10;
}

.nav-buttons {
    display: flex;
    gap: 16px;
}

.nav-btn {
    background-color: rgba(0, 0, 0, 0.7);
    border: none;
    color: #fff;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.3s;
}

.nav-btn:hover {
    background-color: rgba(0, 0, 0, 0.9);
}

.user-profile {
    display: flex;
    align-items: center;
    gap: 8px;
    background-color: rgba(0, 0, 0, 0.7);
    padding: 4px 12px 4px 4px;
    border-radius: 23px;
    cursor: pointer;
    transition: all 0.3s;
}

.user-profile:hover {
    background-color: rgba(0, 0, 0, 0.9);
}

.profile-icon {
    width: 28px;
    height: 28px;
    background-color: #333;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.content {
    padding: 24px 32px;
}

.content h1 {
    margin-bottom: 24px;
    font-size: 32px;
}

/* Song Grid */
.song-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 24px;
}

.song-card {
    background-color: #181818;
    padding: 16px;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s;
}

.song-card:hover {
    background-color: #282828;
}

.song-image {
    position: relative;
    margin-bottom: 16px;
}

.song-image img {
    width: 100%;
    border-radius: 8px;
    display: block;
}

.play-btn {
    position: absolute;
    bottom: 8px;
    right: 8px;
    width: 48px;
    height: 48px;
    background-color: #1DB954;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transform: translateY(8px);
    transition: all 0.3s;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
}

.song-card:hover .play-btn {
    opacity: 1;
    transform: translateY(0);
}

.play-btn i {
    color: #000;
    font-size: 20px;
    margin-left: 3px;
}

.song-card h3 {
    font-size: 16px;
    margin-bottom: 8px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.song-card p {
    font-size: 14px;
    color: #b3b3b3;
}

/* Music Player */
.music-player {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 90px;
    background-color: #181818;
    border-top: 1px solid #282828;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
    z-index: 100;
}

.player-left {
    display: flex;
    align-items: center;
    gap: 14px;
    width: 30%;
}

.player-left img {
    width: 56px;
    height: 56px;
    border-radius: 4px;
}

.song-info p:first-child {
    font-size: 14px;
    font-weight: 500;
}

.song-info p:last-child {
    font-size: 12px;
    color: #b3b3b3;
}

.player-left i {
    color: #b3b3b3;
    cursor: pointer;
    transition: all 0.3s;
}

.player-left i:hover {
    color: #1DB954;
}

.player-center {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40%;
}

.player-controls {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 8px;
}

.player-controls i {
    color: #b3b3b3;
    cursor: pointer;
    font-size: 16px;
    transition: all 0.3s;
}

.player-controls i:hover {
    color: #fff;
}

.play-pause-btn {
    width: 32px;
    height: 32px;
    background-color: #fff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s;
}

.play-pause-btn:hover {
    transform: scale(1.06);
}

.play-pause-btn i {
    color: #000;
    font-size: 14px;
}

.play-pause-btn .fa-play {
    margin-left: 2px;
}

.progress-bar {
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;
}

.progress-bar span {
    font-size: 12px;
    color: #b3b3b3;
}

.progress-container {
    flex: 1;
    height: 4px;
    background-color: #4d4d4d;
    border-radius: 2px;
    position: relative;
    cursor: pointer;
}

.progress {
    height: 100%;
    background-color: #1DB954;
    border-radius: 2px;
    width: 0%;
    position: relative;
}

.progress::after {
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 12px;
    height: 12px;
    background-color: #fff;
    border-radius: 50%;
    opacity: 0;
    transition: opacity 0.3s;
}

.progress-container:hover .progress::after {
    opacity: 1;
}

#progress-bar {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
}

.player-right {
    display: flex;
    align-items: center;
    gap: 16px;
    width: 30%;
    justify-content: flex-end;
}

.player-right i {
    color: #b3b3b3;
    cursor: pointer;
    font-size: 16px;
    transition: all 0.3s;
}

.player-right i:hover {
    color: #fff;
}

.volume-bar {
    width: 100px;
}

.volume-bar input {
    width: 100%;
    cursor: pointer;
}

input[type="range"] {
    -webkit-appearance: none;
    background: transparent;
}

input[type="range"]::-webkit-slider-track {
    background-color: #4d4d4d;
    height: 4px;
    border-radius: 2px;
}

input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    background-color: #fff;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    margin-top: -4px;
    opacity: 0;
}

input[type="range"]:hover::-webkit-slider-thumb {
    opacity: 1;
}

input[type="range"]::-webkit-slider-runnable-track {
    background: linear-gradient(to right, #1DB954 0%, #1DB954 var(--progress, 0%), #4d4d4d var(--progress, 0%), #4d4d4d 100%);
    height: 4px;
    border-radius: 2px;
}

/* Scrollbar */
::-webkit-scrollbar {
    width: 12px;
}

::-webkit-scrollbar-track {
    background: #000;
}

::-webkit-scrollbar-thumb {
    background: #282828;
    border-radius: 6px;
}

::-webkit-scrollbar-thumb:hover {
    background: #3e3e3e;
}

/* Responsive */
@media (max-width: 768px) {
    .sidebar {
        width: 80px;
    }

    .sidebar span {
        display: none;
    }

    .main-content {
        margin-left: 80px;
    }

    .song-grid {
        grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    }

    .player-right .volume-bar {
        display: none;
    }
}
