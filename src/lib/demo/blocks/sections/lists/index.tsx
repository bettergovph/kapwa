import React from 'react';
import { List } from '@kapwa/list';
import { Card, CardContent } from '@kapwa/card';

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

const ListsSection: React.FC<ListsSectionProps> = ({
  title,
  headerTitle,
  headerSubtitle,
  externalLinkText,
  listItems,
}: ListsSectionProps) => {
  return (
    <Card className='mb-2'>
      <CardContent>
        <List
          title={title}
          headerTitle={headerTitle}
          headerSubtitle={headerSubtitle}
          externalLinkText={externalLinkText}
          listItems={listItems}
        />
      </CardContent>
    </Card>
  );
};

export { ListsSection };
export type { ListSectionItem, ListsSectionProps };
