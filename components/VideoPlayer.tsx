const VideoPlayer = () => {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-400">
        <video
          className="w-full max-w-2xl h-screen"
          src="/massage.mp4"
          autoPlay
          
          muted
          controls
        />
      </div>
    );
  };
  
  export default VideoPlayer;