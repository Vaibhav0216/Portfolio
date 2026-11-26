interface SkillBadgeProps {
  name: string;
}

export function SkillBadge({ name }: SkillBadgeProps) {
  return (
    <span className="inline-block px-3 py-1 text-sm font-mono bg-gray-100 dark:bg-gray-800 text-foreground dark:text-foreground-dark rounded-md border border-border dark:border-border-dark">
      {name}
    </span>
  );
}
