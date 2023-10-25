const Video = () => {
    return (
        <video
            className="absolute w-[1280px] h-[720px]"
            autoPlay
            controls={false}
        >
            <source src="/video.mp4" type="video/mp4" />
            Sorry, your browser doesn't support videos.
        </video>
    );
};

export default Video;
