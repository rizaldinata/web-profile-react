import ProjectCard from "@/components/ProjectCard";

const myProjects = [
    {
        id: 1,
        title: "Aplikasi Internal Perusahaan",
        description: "Aplikasi mobile untuk manajemen internal perusahaan.",
        techStack: "Flutter, Laravel, MySQL",
        imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1470"
    },
    {
        id: 2,
        title: "Web Profile Pribadi",
        description: "Website ini! Dibuat untuk belajar dan memamerkan portofolio.",
        techStack: "Next.js, React, Tailwind CSS",
        imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1470"
    },
    {
        id: 3,
        title: "Proyek IoT (Coming Soon)",
        description: "Eksplorasi dengan ESP8266 untuk otomatisasi rumah.",
        techStack: "ESP8266, C++, Firebase",
        imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1470"
    }
];

export default function Projects() {
    return (
        <section id="proyek" className="text-black p-24">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center text-black mb-12">
                    Proyek Saya
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {myProjects.map((project) => (
                        <ProjectCard 
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            techStack={project.techStack}
                            imageUrl={project.imageUrl}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}