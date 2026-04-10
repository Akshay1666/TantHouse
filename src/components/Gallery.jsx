const Gallery = () => {
  const imgs = [
  "/Home1.jpg",
  "/Home1.jpg",
  "/Home1.jpg",
  "/Home1.jpg",
   "/Home1.jpg",
  "/Home1.jpg",
];

  return (
    <section className="p-10">
      <h2 className="text-3xl text-center font-bold mb-6">Gallery</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {imgs.map((img, i) => (
          <img
            key={i}
            src={img}
            className="rounded-lg hover:scale-110 transition"
          />
        ))}
      </div>
    </section>
  );
};

export default Gallery;