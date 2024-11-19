import axios from "axios";
import { FormEvent, useEffect, useState } from "react";
import '../styles/VideoGenerator.css';

function randomIntFromInterval(min: number, max: number, exclude?: number) {
  let random;
  do {
    random = Math.floor(Math.random() * (max - min + 1) + min);
  } while (random === exclude); // Avoid selecting the same index consecutively
  return random;
}

const VideoGenerator: React.FC = () => {
  const [url, setUrl] = useState<string>(''); // URL state for video generation
  const [loadingMessage, setLoadingMessage] = useState<string>(''); // Loading message state
  const [samples, setSamples] = useState<string[]>([]); // Sample videos
  const [activeSampleIndex, setActiveSampleIndex] = useState<number | null>(null); // Index of active sample

  // Fetch sample videos from the backend
  useEffect(() => {
    const fetchSamples = async () => {
      try {
        const response = await axios.get('http://localhost:8080/samples');
        setSamples(response.data);
      } catch (error) {
        console.error("Error fetching samples:", error);
        setLoadingMessage("Failed to load sample videos. Please refresh the page.");
      }
    };

    if (!samples.length) {
      fetchSamples();
    }
  }, [samples]);

  // Handle the random selection of sample videos
  useEffect(() => {
    if (samples.length) {
      randomSample();
      const interval = setInterval(randomSample, 3000); // Change sample every 3 seconds
      return () => clearInterval(interval); // Clear interval on component unmount
    }
  }, [samples]);

  // Function to choose a random sample video
  const randomSample = () => {
    setActiveSampleIndex((prev) =>
      randomIntFromInterval(0, samples.length - 1, prev ?? undefined)
    );
  };

  // Handle the form submission for video creation
  const handleSubmit = async (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    setLoadingMessage('Generating assets...');
    try {
      const assetsResponse = await axios.get(
        `http://localhost:8080/create-story?url=${encodeURIComponent(url)}`
      );
      const id = assetsResponse.data;
      setLoadingMessage('Preparing your video...');
      const videoResponse = await axios.get(`http://localhost:8080/build-video?id=${id}`);
      setLoadingMessage('');
      window.location.href = `http://localhost:8080/${videoResponse.data}`; // Redirect to the video
    } catch (error) {
      setLoadingMessage('Error generating video. Please try again.');
      console.error(error);
    }
  };

  return (
    <>
      {loadingMessage && (
        <div className="v-loading-message">
          <div className="v-spinner"></div>
          <p className="v-loading-text">{loadingMessage}</p>
        </div>
      )}
      <main className="v-main-container">
        <div className="v-form-container">
          <h1 className="v-main-heading">
            <span className="v-heading-gradient">URL to Video</span>
            <br />
            <span className="v-subheading">with the power of AI</span>
          </h1>
          <form onSubmit={handleSubmit} className="v-form">
            <input
              className="v-input-url"
              value={url}
              onChange={ev => setUrl(ev.target.value)}
              type="url"
              placeholder="Enter video URL..."
              required
              aria-label="Enter video URL"
            />
            <button className="v-submit-button" type="submit">
              Create Video
            </button>
          </form>
        </div>
        <div className="v-sample-videos-container">
          {samples.length > 0 &&
            samples.map((sample, index) => (
              <video
                key={index}
                playsInline
                muted
                controls={false}
                loop
                autoPlay
                className="v-sample-video"
                style={{
                  opacity: index === activeSampleIndex ? 1 : 0, // Only show the active sample
                }}
                src={`http://localhost:8080/${sample}/final.mp4`}
                aria-label={`Sample Video ${index + 1}`}
              />
            ))}
        </div>
      </main>
    </>
  );
};

export default VideoGenerator;
