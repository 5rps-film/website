type VideoProps = {
  src: string;
  poster?: string;
  title: string;
};

export default function Video({ src, poster, title }: VideoProps) {
  return (
    <video
      aria-label={title}
      className="h-auto w-full bg-black"
      controls
      playsInline
      poster={poster}
      preload="metadata"
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video element.
    </video>
  );
}
