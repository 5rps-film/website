type YouTubeProps = {
  videoId: string;
  title: string;
};

const YouTube = ({ videoId, title }: YouTubeProps) => (
  <div className="my-8 w-full max-w-full overflow-hidden rounded-lg bg-black shadow-sm">
    <iframe
      className="aspect-video w-full border-0"
      src={`https://www.youtube-nocookie.com/embed/${encodeURIComponent(videoId)}`}
      title={title}
      loading="lazy"
      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    />
  </div>
);

export default YouTube;
