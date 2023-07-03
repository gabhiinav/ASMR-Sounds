import React from "react";
import SoundList from "./SoundPlayer";

const SoundPlayer = () => {
  const sounds = [
    {
      src: "/sounds/box.mp3",
      title: "Box Tapping",
      icon: "/images/box.png",
    },
    {
      src: "/sounds/bristles.mp3",
      title: "Bristles",
      icon: "/images/bristles.png",
    },
    {
      src: "/sounds/coarsepad.mp3",
      title: "Coarse Pad",
      icon: "/images/coarse.png",
    },
    {
      src: "/sounds/coaster.mp3",
      title: "Coaster Tapping",
      icon: "/images/coaster.png",
    },
    {
      src: "/sounds/fingerflutter.mp3",
      title: "Finger Flutter",
      icon: "/images/fingerflutter.png",
    },
    {
      src: "/sounds/gluelid.mp3",
      title: "Glue Lid",
      icon: "/images/gluelid.png",
    },
    {
      src: "/sounds/hairbrushing.mp3",
      title: "Hair Brushing",
      icon: "/images/hairbrushing.png",
    },
    {
      src: "/sounds/hatscratching.mp3",
      title: "Summer Hat",
      icon: "/images/summerhat.png",
    },
    {
      src: "/sounds/keybaord.mp3",
      title: "Keyboard",
      icon: "/images/keyboard.png",
    },
    {
      src: "/sounds/micbrushing.mp3",
      title: "Mic Brushing",
      icon: "/images/micbrush.png",
    },
    {
      src: "/sounds/micscratching.mp3",
      title: "Mic Scratching",
      icon: "/images/micscratch.png",
    },
    {
      src: "/sounds/mouse.mp3",
      title: "Mouse",
      icon: "/images/mouse.png",
    },
    {
      src: "/sounds/pages.mp3",
      title: "Pages",
      icon: "/images/pageflip.png",
    },
    {
      src: "/sounds/pencils.mp3",
      title: "Pencils",
      icon: "/images/pencils.png",
    },
    {
      src: "/sounds/spongecrinkles.mp3",
      title: "Bath Sponges",
      icon: "/images/bathsponge.png",
    },
    {
      src: "/sounds/woodentoothrushes.mp3",
      title: "Wooden Brushes",
      icon: "/images/woodbrush.png",
    },
  ];
  return <SoundList sounds={sounds} />;
};

export default SoundPlayer;
