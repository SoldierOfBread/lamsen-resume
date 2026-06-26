interface FooterProps {
  copyright: string;
  builtWith: string;
}

export function Footer({ copyright, builtWith }: FooterProps) {
  return (
    <footer className="border-t border-primary/10 bg-surface">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-2 px-4 py-6 sm:flex-row sm:justify-between sm:px-6">
        <p className="text-sm text-primary/50">
          &copy; {new Date().getFullYear()} {copyright}. All rights reserved.
        </p>
        <p className="text-sm text-primary/40">
          {builtWith}
        </p>
      </div>
    </footer>
  );
}
