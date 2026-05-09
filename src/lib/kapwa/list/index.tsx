import { useState } from 'react';
import { Button } from '@kapwa/button';
import { Card, CardHeader, CardContent } from '@kapwa/card';
import { cn } from '@kapwa/utils';
import { ChevronDown, ExternalLink } from 'lucide-react';

type ListSectionItem = {
  id: number;
  title: string;
  category: string;
  description?: string;
};

type ListsSectionProps = {
  title: string;
  headerTitle: string;
  headerSubtitle?: string;
  externalLinkText?: string;
  listItems: ListSectionItem[];
};

const List = ({
  headerTitle,
  headerSubtitle,
  externalLinkText,
  listItems,
  title,
}: {
  title: string;
  headerTitle: string;
  headerSubtitle?: string;
  externalLinkText?: string;
  listItems: ListSectionItem[];
}) => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggle = (id: number) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  return (
    <Card>
      <CardHeader>
        <h2 className='text-2xl font-semibold'>{headerTitle}</h2>
        {headerSubtitle && (
          <p className='text-[var(--color-kapwa-text-support)]'>
            {headerSubtitle}
          </p>
        )}
      </CardHeader>
      <CardContent>
        <div className='space-y-8'>
          <div>
            <h3 className='font-medium mb-4'>{title}</h3>
            <div className='space-y-4'>
              {listItems.map(item => {
                const isExpanded = expandedId === item.id;
                const descriptionId = `list-item-desc-${item.id}`;

                return (
                  <div
                    key={item.id}
                    className='rounded-lg border border-[var(--color-kapwa-border-weak)] bg-[var(--color-kapwa-bg-surface)] p-4 transition-colors hover:border-[var(--color-kapwa-border-brand)]'
                  >
                    {/* Title row: title + category badge + right-side action */}
                    <div className='flex items-start justify-between gap-4'>
                      <div className='min-w-0 flex-1'>
                        <h4 className='text-lg font-medium text-[var(--color-kapwa-text-strong)]'>
                          {item.title}
                        </h4>
                        <span className='mt-2 inline-block rounded-sm bg-[var(--color-kapwa-bg-gray-default)] px-2 py-1 text-xs font-medium text-[var(--color-kapwa-text-support)]'>
                          {item.category}
                        </span>
                      </div>
                      {externalLinkText && (
                        <Button variant='ghost' size='sm' className='flex-none'>
                          {externalLinkText}
                          <ExternalLink className='ml-2 h-4 w-4' />
                        </Button>
                      )}
                    </div>

                    {/* Collapsible description disclosure */}
                    {item.description && (
                      <div className='mt-3'>
                        <p
                          id={descriptionId}
                          className={cn(
                            'text-sm text-[var(--color-kapwa-text-support)]',
                            !isExpanded && 'line-clamp-3'
                          )}
                        >
                          {item.description}
                        </p>
                        <button
                          type='button'
                          aria-expanded={isExpanded}
                          aria-controls={descriptionId}
                          onClick={() => toggle(item.id)}
                          className='mt-2 inline-flex items-center gap-1 rounded text-sm font-medium text-[var(--color-kapwa-text-brand)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-kapwa-border-focus)] focus-visible:ring-offset-1'
                        >
                          {isExpanded ? 'Show less' : 'Show more'}
                          <ChevronDown
                            className={cn(
                              'h-4 w-4 transition-transform duration-150 ease-in-out',
                              isExpanded && 'rotate-180'
                            )}
                          />
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export { List };
export type { ListsSectionProps, ListSectionItem };
