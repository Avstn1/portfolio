interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  tags?: string[];
  emoji?: string;
}

export default function ProjectCard({ title, description, link, tags, emoji }: ProjectCardProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-2xl bg-charcoal border border-primary p-6 shadow-md transition hover:shadow-lg hover:border-accent min-h-[18rem] flex flex-col justify-between"
    >
      <div>
        {emoji && (
          <div className="text-4xl mb-2 select-none">
            {emoji}
          </div>
        )}

        <h3 className="text-2xl font-bold text-highlight group-hover:text-secondary mb-2">
          {title}
        </h3>

        <p className="text-foreground text-sm mb-4">
          {description}
        </p>
      </div>

      {tags && (
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="text-xs bg-secondary text-charcoal px-2 py-1 rounded-full font-semibold"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}
    </a>
  );
}
