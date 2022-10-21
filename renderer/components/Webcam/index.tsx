import React, { useState } from 'react'
import Webcam from 'react-webcam'
import {
  Button
} from "@chakra-ui/react";

// const videoConstraints = {
//   width: 990,
//   height: 557,
//   facingMode: 'user',
// };

const WebcamCapture = () => {
  const [image, setImage] = useState()
  const webcamRef = React.useRef(null)
  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot()
    setImage(imageSrc)
  }, [webcamRef])

  return (
    <div>
      {image ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <img src={image} />
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}
          >
            <Button
              style={{ borderRadius: 8, cursor: 'pointer' }}
              onClick={() => setImage(null)}
            >
              Delete photo
            </Button>
            <Button style={{ borderRadius: 8, cursor: 'pointer' }}>
              <a
                style={{
                  textDecoration: 'none',
                  color: 'black',
                }}
                download="foto_teste.jpeg"
                href={webcamRef?.current?.getScreenshot()}
              >
                Download photo
              </a>
            </Button>
          </div>
        </div>
      ) : (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <Webcam
            audio={false}
            ref={webcamRef}
            mirrored
            screenshotFormat="image/png"
            // videoConstraints={videoConstraints}
          />
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button
              style={{
                borderRadius: 24,
                height: 30,
                width: 30,
                cursor: 'pointer',
              }}
              onClick={capture}
            ></button>
          </div>
        </div>
      )}
    </div>
  )
}

export default WebcamCapture;
