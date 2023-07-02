import React from "react";
import SoundList from "./SoundPlayer";

const SoundPlayer = () => {
  const sounds = [
    {
      src: "/sounds/rain_sound.mp3",
      title: "Rain",
      icon: "/images/rain-icon.svg",
    },
    {
      src: "/sounds/thunder_sound.mp3",
      title: "Thunder",
      icon: "/images/thunder-icon.svg",
    },
    {
      src: "/sounds/train_sound.mp3",
      title: "Train",
      icon: "/images/train-icon.svg",
    },
    {
      src: "/sounds/birds_sound.mp3",
      title: "Birds",
      icon: "/images/birds-icon.svg",
    },
    {
      src: "/sounds/fire_sound.mp3",
      title: "Fire",
      icon: "/images/fire-icon.svg",
    },
    {
      src: "/sounds/night_sound.mp3",
      title: "Night",
      icon: "/images/night-icon.svg",
    },
    {
      src: "/sounds/cafe_sound.mp3",
      title: "Cafe",
      icon: "/images/cafe-icon.svg",
    },
    {
      src: "/sounds/snow_sound.mp3",
      title: "Snow",
      icon: "/images/snow-icon.svg",
    },
    {
      src: "/sounds/airplane_sound.mp3",
      title: "Airplane",
      icon: "/images/airplane-icon.svg",
    },
    {
      src: "/sounds/fan_sound.mp3",
      title: "Fan",
      icon: "/images/fan-icon.svg",
    },
    {
      src: "/sounds/river_sound.mp3",
      title: "River",
      icon: "/images/river-icon.svg",
    },
    {
      src: "/sounds/leaves_sound.mp3",
      title: "Leaves",
      icon: "/images/leaves-icon.svg",
    },
    {
      src: "/sounds/wind_sound.mp3",
      title: "Wind",
      icon: "/images/wind-icon.svg",
    },
    {
      src: "/sounds/walk_sound.mp3",
      title: "Walk",
      icon: "/images/walk-icon.svg",
    },
    {
      src: "/sounds/waves_sound.mp3",
      title: "Waves",
      icon: "/images/waves-icon.svg",
    },
    {
      src: "/sounds/whitenoise_sound.mp3",
      title: "White Noise",
      icon: "/images/whitenoise-icon.svg",
    },
  ];
  return <SoundList sounds={sounds} />;
};

export default SoundPlayer;
