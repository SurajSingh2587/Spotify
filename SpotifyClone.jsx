import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, Heart, Search, Home, Library, Plus, List, Shuffle, Repeat } from 'lucide-react';

const SpotifyClone = () => {
  const audioRef = useRef(null);
  const [currentSong, setCurrentSong] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [isMuted, setIsMuted] = useState(false);
  const [likedSongs, setLikedSongs] = useState(new Set());
  const [activeTab, setActiveTab] = useState('home');

  const songs = [
    {
      id: 1,
      title: "Summer Breeze",
      artist: "Chill Vibes",
      album: "Relaxation",
      duration: "3:24",
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop",
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
    },
    {
      id: 2,
      title: "Night Drive",
      artist: "Urban Beats",
      album: "Midnight Sessions",
      duration: "4:12",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop",
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
    },
    {
      id: 3,
      title: "Ocean Waves",
      artist: "Nature Sounds",
      album: "Peaceful Moments",
      duration: "5:18",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
    },
    {
      id: 4,
      title: "Electric Dreams",
      artist: "Synth Wave",
      album: "Neon Nights",
      duration: "3:56",
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300&h=300&fit=crop",
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3"
    },
    {
      id: 5,
      title: "Mountain Echo",
      artist: "Acoustic Soul",
      album: "Wilderness",
      duration: "4:45",
      image: "https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=300&h=300&fit=crop",
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3"
    },
    {
      id: 6,
      title: "City Lights",
      artist: "Jazz Collective",
      album: "Urban Stories",
      duration: "3:38",
      image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300&h=300&fit=crop",
      audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3"
    }
  ];

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    const handleEnded = () => {
      if (currentSong < songs.length - 1) {
        setCurrentSong(currentSong + 1);
      } else {
        setIsPlaying(false);
      }
    };

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [currentSong, songs.length]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
  }, [isPlaying, currentSong]);

  const togglePlay = () => setIsPlaying(!isPlaying);

  const handlePrevious = () => {
    if (currentSong > 0) {
      setCurrentSong(currentSong - 1);
      setIsPlaying(true);
    }
  };

  const handleNext = () => {
    if (currentSong < songs.length - 1) {
      setCurrentSong(currentSong + 1);
      setIsPlaying(true);
    }
  };

  const handleSeek = (e) => {
    const seekTime = (e.target.value / 100) * duration;
    audioRef.current.currentTime = seekTime;
    setCurrentTime(seekTime);
  };

  const toggleMute = () => setIsMuted(!isMuted);

  const toggleLike = (id) => {
    const newLiked = new Set(likedSongs);
    if (newLiked.has(id)) {
      newLiked.delete(id);
    } else {
      newLiked.add(id);
    }
    setLikedSongs(newLiked);
  };

  const formatTime = (time) => {
    if (isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const playSong = (index) => {
    setCurrentSong(index);
    setIsPlaying(true);
  };

  return (
    <div className="flex flex-col h-screen bg-black text-white">
      <audio ref={audioRef} src={songs[currentSong].audio} />
      
      {/* Main Container */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-64 bg-black p-6 flex flex-col">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-green-500">Spotify</h1>
          </div>
          
          <nav className="space-y-4 flex-1">
            <button 
              onClick={() => setActiveTab('home')}
              className={`flex items-center space-x-4 w-full p-2 rounded ${activeTab === 'home' ? 'bg-gray-800' : 'hover:bg-gray-900'}`}
            >
              <Home size={24} />
              <span className="font-semibold">Home</span>
            </button>
            <button 
              onClick={() => setActiveTab('search')}
              className={`flex items-center space-x-4 w-full p-2 rounded ${activeTab === 'search' ? 'bg-gray-800' : 'hover:bg-gray-900'}`}
            >
              <Search size={24} />
              <span className="font-semibold">Search</span>
            </button>
            <button 
              onClick={() => setActiveTab('library')}
              className={`flex items-center space-x-4 w-full p-2 rounded ${activeTab === 'library' ? 'bg-gray-800' : 'hover:bg-gray-900'}`}
            >
              <Library size={24} />
              <span className="font-semibold">Your Library</span>
            </button>
            
            <div className="pt-6">
              <button className="flex items-center space-x-4 w-full p-2 hover:bg-gray-900 rounded">
                <Plus size={24} />
                <span className="font-semibold">Create Playlist</span>
              </button>
              <button className="flex items-center space-x-4 w-full p-2 hover:bg-gray-900 rounded mt-2">
                <Heart size={24} className="text-purple-500" />
                <span className="font-semibold">Liked Songs</span>
              </button>
            </div>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-gradient-to-b from-gray-900 to-black overflow-y-auto">
          <div className="p-8">
            <h2 className="text-3xl font-bold mb-6">Good evening</h2>
            
            {/* Recently Played */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {songs.slice(0, 6).map((song, index) => (
                <button
                  key={song.id}
                  onClick={() => playSong(index)}
                  className="flex items-center bg-gray-800 hover:bg-gray-700 rounded transition-colors group"
                >
                  <img src={song.image} alt={song.title} className="w-20 h-20 rounded-l" />
                  <span className="px-4 font-semibold truncate">{song.title}</span>
                  <div className={`ml-auto mr-4 ${currentSong === index && isPlaying ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} transition-opacity`}>
                    <Play size={20} className="fill-current" />
                  </div>
                </button>
              ))}
            </div>

            {/* All Songs */}
            <h2 className="text-2xl font-bold mb-4">Your Playlist</h2>
            <div className="bg-gray-900 bg-opacity-40 rounded-lg p-4">
              <div className="grid grid-cols-12 gap-4 px-4 pb-2 text-gray-400 text-sm border-b border-gray-800">
                <div className="col-span-1">#</div>
                <div className="col-span-5">TITLE</div>
                <div className="col-span-3">ALBUM</div>
                <div className="col-span-2"></div>
                <div className="col-span-1">TIME</div>
              </div>
              
              {songs.map((song, index) => (
                <div
                  key={song.id}
                  className={`grid grid-cols-12 gap-4 px-4 py-2 rounded hover:bg-gray-800 group ${currentSong === index ? 'bg-gray-800' : ''}`}
                >
                  <div className="col-span-1 flex items-center">
                    {currentSong === index && isPlaying ? (
                      <div className="text-green-500">♫</div>
                    ) : (
                      <button
                        onClick={() => playSong(index)}
                        className="opacity-0 group-hover:opacity-100"
                      >
                        <Play size={16} className="fill-current" />
                      </button>
                    )}
                    <span className="group-hover:hidden">{index + 1}</span>
                  </div>
                  <div className="col-span-5 flex items-center space-x-3">
                    <img src={song.image} alt={song.title} className="w-10 h-10 rounded" />
                    <div>
                      <div className={`font-semibold ${currentSong === index ? 'text-green-500' : ''}`}>
                        {song.title}
                      </div>
                      <div className="text-sm text-gray-400">{song.artist}</div>
                    </div>
                  </div>
                  <div className="col-span-3 flex items-center text-gray-400">
                    {song.album}
                  </div>
                  <div className="col-span-2 flex items-center justify-end">
                    <button
                      onClick={() => toggleLike(song.id)}
                      className="opacity-0 group-hover:opacity-100"
                    >
                      <Heart
                        size={20}
                        className={likedSongs.has(song.id) ? 'fill-green-500 text-green-500' : ''}
                      />
                    </button>
                  </div>
                  <div className="col-span-1 flex items-center text-gray-400">
                    {song.duration}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Player Bar */}
      <div className="bg-gray-900 border-t border-gray-800 px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Current Song Info */}
          <div className="flex items-center space-x-4 w-1/4">
            <img
              src={songs[currentSong].image}
              alt={songs[currentSong].title}
              className="w-14 h-14 rounded"
            />
            <div>
              <div className="font-semibold text-sm">{songs[currentSong].title}</div>
              <div className="text-xs text-gray-400">{songs[currentSong].artist}</div>
            </div>
            <button
              onClick={() => toggleLike(songs[currentSong].id)}
              className="ml-4"
            >
              <Heart
                size={20}
                className={likedSongs.has(songs[currentSong].id) ? 'fill-green-500 text-green-500' : ''}
              />
            </button>
          </div>

          {/* Player Controls */}
          <div className="flex flex-col items-center w-2/4">
            <div className="flex items-center space-x-4 mb-2">
              <button className="hover:text-white text-gray-400">
                <Shuffle size={20} />
              </button>
              <button
                onClick={handlePrevious}
                disabled={currentSong === 0}
                className={`${currentSong === 0 ? 'text-gray-600' : 'hover:text-white text-gray-400'}`}
              >
                <SkipBack size={24} />
              </button>
              <button
                onClick={togglePlay}
                className="bg-white text-black rounded-full p-2 hover:scale-105 transition"
              >
                {isPlaying ? <Pause size={24} /> : <Play size={24} className="ml-0.5" />}
              </button>
              <button
                onClick={handleNext}
                disabled={currentSong === songs.length - 1}
                className={`${currentSong === songs.length - 1 ? 'text-gray-600' : 'hover:text-white text-gray-400'}`}
              >
                <SkipForward size={24} />
              </button>
              <button className="hover:text-white text-gray-400">
                <Repeat size={20} />
              </button>
            </div>
            
            {/* Progress Bar */}
            <div className="flex items-center space-x-2 w-full">
              <span className="text-xs text-gray-400">{formatTime(currentTime)}</span>
              <input
                type="range"
                min="0"
                max="100"
                value={(currentTime / duration) * 100 || 0}
                onChange={handleSeek}
                className="flex-1 h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #1db954 0%, #1db954 ${(currentTime / duration) * 100}%, #4b5563 ${(currentTime / duration) * 100}%, #4b5563 100%)`
                }}
              />
              <span className="text-xs text-gray-400">{formatTime(duration)}</span>
            </div>
          </div>

          {/* Volume Control */}
          <div className="flex items-center justify-end space-x-2 w-1/4">
            <button onClick={toggleMute}>
              {isMuted || volume === 0 ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </button>
            <input
              type="range"
              min="0"
              max="100"
              value={isMuted ? 0 : volume * 100}
              onChange={(e) => {
                setVolume(e.target.value / 100);
                setIsMuted(false);
              }}
              className="w-24 h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #1db954 0%, #1db954 ${isMuted ? 0 : volume * 100}%, #4b5563 ${isMuted ? 0 : volume * 100}%, #4b5563 100%)`
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpotifyClone;
