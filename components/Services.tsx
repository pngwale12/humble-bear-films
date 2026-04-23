import { Film, Camera, Play } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Film />, title: "Music Video Direction"
    },
    {
      icon: <Camera />, title: "Videography"
    },
    {
      icon: <Play />, title: "Creative Direction"
    }
  ];

  return (
    <section className="py-20 bg-zinc-950 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl">What I Do</h2>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {services.map((s, i) => (
            <div key={i} className="p-6 border border-white/10 rounded-xl">
              {s.icon}
              <h3 className="mt-3 font-semibold">{s.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}