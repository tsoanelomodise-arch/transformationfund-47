// Search trigger button for the navigation header
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SearchTriggerProps {
  onClick: () => void;
  variant?: 'desktop' | 'mobile';
}

export function SearchTrigger({ onClick, variant = 'desktop' }: SearchTriggerProps) {
  if (variant === 'mobile') {
    return (
      <Button
        variant="ghost"
        size="icon"
        onClick={onClick}
        className="h-9 w-9"
        aria-label="Open search"
      >
        <Search className="h-5 w-5 text-gray-700" />
      </Button>
    );
  }

  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 px-3 py-1.5 text-sm text-muted-foreground bg-muted/50 hover:bg-muted border border-border rounded-md transition-colors min-w-[200px] lg:min-w-[280px]"
      aria-label="Open search dialog. Press Command K to open search."
    >
      <Search className="h-4 w-4 shrink-0" />
      <span className="truncate text-left flex-1 text-gray-500">
        Search eligibility, FAQs...
      </span>
      <kbd className="hidden sm:inline-flex items-center gap-1 px-1.5 py-0.5 text-xs bg-background border border-border rounded font-mono">
        <span className="text-xs">⌘</span>K
      </kbd>
    </button>
  );
}
