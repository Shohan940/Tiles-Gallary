import TileImage from "./TileImage";
import TileInformation from "./TileInformation";

export default function TileDetails({ tile }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

      <TileImage
        image={tile.image}
        title={tile.title}
      />

      <TileInformation tile={tile} />

    </div>
  );
}