const VideoEmbed = ({ videoId }: { videoId: string }) => (
    <div className="flex justify-center py-10">
        <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="Vídeo explicatiu"
            allowFullScreen
            className="rounded-xl shadow-lg w-full max-w-3xl"
        ></iframe>
    </div>
);

export default VideoEmbed;
