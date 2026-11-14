export default function TileImage({ image, title }) {
  return (
    <div>
      <img
        src={image}
        alt={title}
        className="w-full h-[400px] object-cover rounded-2xl"
      />
    </div>
  );
}