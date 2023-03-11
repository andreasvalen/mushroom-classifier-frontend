import React, { useState, useRef, useEffect } from "react";

const UploadComponent: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string>("");
  const [dragging, setDragging] = useState<boolean>(false);
  const [showVideo, setShowVideo] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(false);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files[0];
    setFile(file);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImageUrl(reader.result as string);
    };
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setFile(file);
    const reader = new FileReader();
    reader.readAsDataURL(file as File);
    reader.onloadend = () => {
      setImageUrl(reader.result as string);
    };
  };

  const handleTakePhoto = async () => {
    setShowVideo(true);
    if (videoRef.current) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: "environment" },
        });
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      } catch (error) {
        console.error("Error accessing camera", error);
      }
    }
  };

  const handleCapture = () => {
    if (videoRef.current && canvasRef.current) {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      if (context) {
        context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
        setShowVideo(false);
        const dataUrl = canvas.toDataURL();
        /* axios.post('https://example.com/api/upload', { image: dataUrl.split(',')[1] }, {
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(response => {
          console.log(response.data);
        }).catch(error => {
          console.error('Error uploading image', error);
        });*/
      }
    }
  };

  useEffect(() => {
    if (videoRef.current && showVideo) {
      videoRef.current.play();
    }
  }, [showVideo]);

  return (
    <div
      className={`image-uploader ${dragging ? "dragging" : ""}`}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      {showVideo ? (
        <video
          className="video-preview"
          ref={videoRef}
          onClick={handleCapture}
          width={300}
          height={300}
        />
      ) : (
        <canvas
          className="image-preview"
          ref={canvasRef}
          width={300}
          height={300}
        />
      )}
      {!imageUrl && !showVideo && (
        <div className="placeholder">
          <p>Drop or click to upload</p>
          <input
            type="file"
            id="file-input"
            onChange={handleFileChange}
            accept="image/*"
          />
          <label htmlFor="file-input">Choose a file</label>
          <button onClick={handleTakePhoto}>Take Photo</button>
        </div>
      )}
      {imageUrl && (
        <div className="image-preview-container">
          <img src={imageUrl} alt="Preview" className="image-preview" />
          <button
            onClick={() => {
              setFile(null);
              setImageUrl("");
            }}
          >
            Remove
          </button>
        </div>
      )}
    </div>
  );
};

export default UploadComponent;
