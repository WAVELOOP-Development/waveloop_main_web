import type { ReactNode } from "react";

export function Container({
  children,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string | undefined;
  as?: "div" | "section" | "header" | "footer" | "nav" | undefined;
}) {
  return (
    <Tag className={`mx-auto w-full max-w-[92rem] px-5 sm:px-8 lg:px-14 ${className ?? ""}`}>
      {children}
    </Tag>
  );
}

export function SectionLabel({
  children,
  className,
}: {
  children: ReactNode;
  className?: string | undefined;
}) {
  return (
    <span className={`label-xs inline-flex items-center gap-2.5 ${className ?? ""}`}>
      <span className="inline-block size-1.5 rounded-full bg-accent" />
      {children}
    </span>
  );
}
