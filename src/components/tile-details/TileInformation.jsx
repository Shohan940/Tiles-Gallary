export default function TileInformation({ tile }) {
  return (
    <div>
      <p className="text-sm text-[#B87955] font-semibold">
        {tile.category}
      </p>

      <h1 className="text-4xl font-bold mt-3">
        {tile.title}
      </h1>

      <p className="text-gray-600 mt-5 leading-7">
        {tile.description}
      </p>

      <div className="mt-6 space-y-3">
        <p>
          <strong>Price:</strong> ${tile.price}
        </p>

        <p>
          <strong>Material:</strong> {tile.material}
        </p>

        <p>
          <strong>Dimensions:</strong> {tile.dimensions}
        </p>

        <p>
          <strong>Availability:</strong>{" "}
          {tile.inStock ? "In Stock" : "Out of Stock"}
        </p>
      </div>
    </div>
  );
}