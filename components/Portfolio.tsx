export default function Portfolio() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl">Selected Work</h2>

      <div className="grid md:grid-cols-3 gap-6 mt-10">
        {[1,2,3,4,5,6].map((i) => (
          <div
            key={i}
            className="aspect-video bg-zinc-900 rounded-xl flex items-center justify-center"
          >
            Project {i}
          </div>
        ))}
      </div>
    </section>
  );
}