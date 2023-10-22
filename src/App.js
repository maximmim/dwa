import React, { useRef } from 'react';
import Webcam from 'react-webcam';

function App() {
  const webcamRef = useRef(null);

  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: 'user', // 'environment' for rear camera
  };

  const captureImage = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    // Handle the captured image as needed (e.g., display it, save it, etc.)
    console.log(imageSrc);
  };

  return (
    <div>
      <Webcam
        audio={false}
        height={720}
        width={1280}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints}
      />
      <button onClick={captureImage}>Capture Image</button>
    </div>
  );
}

export default App;
