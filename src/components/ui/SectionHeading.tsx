interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-8 sm:mb-12 text-center">
      <h2 className="text-2xl sm:text-3xl font-bold mb-2">{title}</h2>
      {subtitle && (
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className="mt-4 w-16 h-1 bg-accent dark:bg-accent-dark mx-auto rounded-full" />
    </div>
  );
}
