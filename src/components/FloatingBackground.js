import React from "react";
import { FaRocket } from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";
import "../App.css";
import { IconRobot } from '@tabler/icons-react';
import { IconDatabasePlus } from '@tabler/icons-react';


const bubbleCount = 30;
const iconCount = 20;

const icons = [<IconRobot stroke={2} size={50}/>, <FaRocket />,<IconDatabasePlus stroke={2} size={60}/>, <GiArtificialIntelligence />];
const bubbleColors = ["#00aaffa5", "#c1519cb1", "#b1812189", "#00ffaa6c", "#0d7a96ff"];

const FloatingBackground = () => {
  const bubbles = Array.from({ length: bubbleCount }, (_, i) => {
    const size = Math.random() * 20 + 10; // 10-30px
    const left = Math.random() * 100;
    const duration = Math.random() * 10 + 5; // 5-15s
    const delay = Math.random() * 5;
    const color = bubbleColors[Math.floor(Math.random() * bubbleColors.length)];

    return (
      <div
        key={`bubble-${i}`}
        className="bubble"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          left: `${left}%`,
          backgroundColor: color,
          animationDuration: `${duration}s`,
          animationDelay: `${delay}s`,
        }}
      />
    );
  });

  const floatingIcons = Array.from({ length: iconCount }, (_, i) => {
    const size = Math.random() * 80 + 20; // 20-60px
    const top = Math.random() * 90; // 0%-90%
    const left = Math.random() * 90; // 0%-90%
    const duration = Math.random() * 15 + 5;
    const delay = Math.random() * 5;
    const icon = icons[Math.floor(Math.random() * icons.length)];
    const iconcolor = bubbleColors[Math.floor(Math.random() * bubbleColors.length)];
    return (
      <div
        key={`icon-${i}`}
        className="floating-icon"
        style={{
          color: `${iconcolor}`,
          top: `${top}%`,
          left: `${left}%`,
          fontSize: `${size}px`,
          animationDuration: `${duration}s`,
          animationDelay: `${delay}s`,
        }}
      >
        {icon}
      </div>
    );
  });

  return <div className="floating-background">{bubbles}{floatingIcons}</div>;
};

export default FloatingBackground;
