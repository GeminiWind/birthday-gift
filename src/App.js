import React, { useEffect } from "react";
import moment from 'moment';
import { Play, CountDown } from "./screen";
import { Text, ImageViewer } from './components';
import "./index.css";
import Images1 from './assets/images/1.jpg';
import Images2 from './assets/images/2.jpg';
import Images3 from './assets/images/3.jpg';
import Images4 from './assets/images/4.jpg';
import Images5 from './assets/images/5.jpg';
import Images6 from './assets/images/6.jpg';
import Images7 from './assets/images/7.jpg';
import Images8 from './assets/images/8.jpg';
import HappyBirthdaySong from './assets/audio/happy_birthday.mp3'

const images = [
  Images1,
  Images2,
  Images3,
  Images4,
  Images5,
  Images6,
  Images7,
  Images8
]

const App = () => {

  const [showClock, setShowClock] = React.useState(false);
  const [showVideo, setShowVideo] = React.useState(false);
  const [showImageViewer, setShowImageViewer] = React.useState(false);

  const [audio] = React.useState(new Audio(HappyBirthdaySong));

  useEffect(() => {
     if (moment().isBefore('2021-10-09T17:00:00.000Z')) {
      setShowClock(true);
      setShowVideo(false);
    } else {
      setShowClock(false);
      setShowVideo(true);
    }
  }, []);

  const handleCountdownFinished = () => {
    setShowClock(false);
    setShowVideo(true);
  };

  const handlePlayClick = () => {
    audio.play();
    setShowVideo(false);
    setShowImageViewer(true);
  }

  const handleCloseImageViewer = () => {
    setShowVideo(true);
    setShowImageViewer(false);
    audio.pause();
  }

  if (showClock) {
    return (
      <>
        <Text styles={{ fontSize: '72px', textAlign: 'center' }}>Chưa mở được đâu nhé em chờ đến đúng ngày nhé</Text>
        <CountDown endTime={new Date('2021-10-09T17:00:00.000Z')} onCountDownFinished={handleCountdownFinished} isVisible={showClock} />
      </>
    )
  }

  if (showVideo) {
    return (
      <>
        <Text styles={{ fontSize: '72px', textAlign: 'center' }}>Ấn vào nút dưới đây sẽ có điều bất ngờ cho e nhé</Text>
        <Text styles={{ fontSize: '72px', textAlign: 'center' }}>Hi vọng e sẽ thích mòn quà nhỏ này ❤️</Text>
        <Play isVisible={showVideo} onClick={handlePlayClick} />
      </>
    )
  }

  if (showImageViewer) {
    return (
      <ImageViewer
        images={images}
        isOpen={showImageViewer}
        onClose={handleCloseImageViewer}
      />
    )
  }

  return <></>;
};

export default App;
