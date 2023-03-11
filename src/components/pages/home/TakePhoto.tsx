import React, { useState, useRef } from "react";

const TakePhoto = () => {
  const [file, setFile] = useState<File | null>(null);
  const [fileUrl, setFileUrl] = useState<string | null>(null);
  const [dragging, setDragging] = useState<boolean>(false);
  const [navResult, setNavResult] = useState<any | null>(null);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragging(false);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragging(false);
    const uploadedFile = event.dataTransfer.files[0];
    setFile(uploadedFile);
    setFileUrl(URL.createObjectURL(uploadedFile));
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      const fileUrl = URL.createObjectURL(selectedFile);
      setFileUrl(fileUrl);
    }
  };

  const handleTakePhoto = () => {
    navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    });
  };
  const handleStopPhoto = async () => {
    if (videoRef.current) {
      //@ts-ignore
      const tracks = videoRef.current.srcObject.getTracks();
      //@ts-ignore
      tracks.forEach((track) => {
        track.stop();
      });
    }
  };

  const handleCapturePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");

      if (context) {
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        canvas.toBlob((blob) => {
          if (blob) {
            const file = new File([blob], "photo.jpg", {
              type: "image/jpeg",
              lastModified: Date.now(),
            });
            setFile(file);
            const fileUrl = URL.createObjectURL(file);
            setFileUrl(fileUrl);
          }
        }, "image/jpeg");
      }
    }
  };

  const handleUpload = () => {
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      // Call your API to upload the file here using axios or fetch
    }
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      style={{ border: dragging ? "2px dashed black" : "2px solid black" }}
    >
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <>
        <canvas
          ref={canvasRef}
          style={{ display: "none", width: "300px", height: "225px" }}
        />
        <video
          ref={videoRef}
          style={{ width: "300px", height: "225px" }}
          autoPlay
          muted
        />
        <button onClick={handleTakePhoto}>Use camera</button>
        <button onClick={handleCapturePhoto}>Capture</button>
        <button onClick={handleStopPhoto}>Stop</button>
      </>
      {fileUrl && <button onClick={handleUpload}>Upload</button>}
      {fileUrl && <img src={fileUrl} alt="Uploaded File" />}

      {fileUrl && (
        <button
          onClick={() => {
            setFile(null);
            setFileUrl(null);
          }}
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default TakePhoto;
