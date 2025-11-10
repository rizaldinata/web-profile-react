type ProjectCardProps = {
    title: string;
    description: string;
    techStack: string;
    imageUrl: string;
}

export default function ProjectCard({title, description, techStack, imageUrl}: ProjectCardProps) {
    return (
        <div className="bg-white rounded-lg shadow-xl overflow-hidden transform-all duration 300 hover:scale-105">
            <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
            <div className="P-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-900">
                    {title}
                </h3>
                <p className="text-gray-700 mb-4">
                    {description}
                </p>
                <p className="text-sm font-medium text-cyan-600">
                    {techStack}
                </p>
            </div>
        </div>
    );
}