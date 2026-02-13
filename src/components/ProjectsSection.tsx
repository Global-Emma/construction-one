import { useState } from "react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";

const categories = ["All", "Residential", "Commercial", "Industrial"];

const projects = [
  { img: project1, name: "Modern Family Villa", category: "Residential" },
  { img: project2, name: "Corporate Office Complex", category: "Commercial" },
  { img: project3, name: "Luxury Pool House", category: "Residential" },
  { img: project4, name: "Industrial Warehouse", category: "Industrial" },
  { img: project5, name: "Contemporary Duplex", category: "Residential" },
  { img: project6, name: "Shopping Plaza", category: "Commercial" },
];

const ProjectsSection = () => {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-accent font-semibold tracking-widest uppercase text-sm">
            Portfolio
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            Our Completed Projects
          </h2>
          <p className="text-muted-foreground text-lg">
            A showcase of our finest work across residential, commercial, and industrial sectors.
          </p>
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                filter === cat
                  ? "bg-accent text-accent-foreground shadow-gold"
                  : "bg-secondary text-muted-foreground hover:bg-secondary/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <div
              key={p.name}
              className="group relative overflow-hidden rounded-xl shadow-card hover:shadow-card-hover transition-shadow duration-300"
            >
              <img
                src={p.img}
                alt={p.name}
                className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/70 transition-all duration-300 flex items-end">
                <div className="p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-accent text-xs font-semibold uppercase tracking-wider">
                    {p.category}
                  </span>
                  <h3 className="font-heading text-xl font-bold text-primary-foreground mt-1">
                    {p.name}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
