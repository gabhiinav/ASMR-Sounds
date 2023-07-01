"use client";

import { SoundType } from "@/types/types";
import { Slider } from "@mui/material";
import { useEffect, useRef, useState } from "react";

const Sound = ({
  src,
  title,
  icon,
  isActive,
  isMuted,
  isPlaying,
  onPlay,
  onPause,
}: SoundType) => {
  const [volume, setVolume] = useState(0.5);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;

    if (audio) {
      audio.volume = isMuted ? 0 : volume;
    }
  }, [isMuted, volume]);

  useEffect(() => {
    const audio = audioRef.current;

    if (audio) {
      if (isActive && isPlaying) {
        audio.play();
        onPlay && onPlay();
      } else {
        audio.pause();
        onPause && onPause();
      }
    }
  }, [isActive, isPlaying]);

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio(src);
      audioRef.current.loop = true;
    }

    const audio = audioRef.current;

    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [isPlaying, src]);

  const handleSoundPlay = () => {
    if (isPlaying) {
      onPause && onPause();
    } else {
      onPlay && onPlay();
    }
  };

  const handleVolumeChange = (
    event: Event,
    value: number | number[],
    activeThumb: number
  ) => {
    const newVolume = value as number;
    setVolume(newVolume);

    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  return (
    <div className="relative">
      <div
        onClick={handleSoundPlay}
        className={`p-[3rem_5rem] border-[2px] cursor-pointer border-white rounded-lg flex flex-col gap-[.5rem] justify-center items-center hover:bg-[rgba(255,255,255,.05)] ${
          isPlaying ? "stop-sound" : "play-sound"
        }`}
      >
        <div className="text-white font-bold">{title}</div>
        <img src={icon} alt="" className="w-[75px] h-[75px]" />
      </div>
      {isPlaying && (
        <Slider
          min={0}
          step={0.01}
          max={1}
          onChange={handleVolumeChange}
          value={volume}
          aria-label="Volume"
          className="!absolute !left-1/2 !transform !-translate-x-1/2  !bottom-[20px] !w-[170px] !text-white"
        />
      )}
    </div>
  );
};

export default Sound;