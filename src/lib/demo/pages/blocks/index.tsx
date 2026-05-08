import React from 'react';
import { ListsSection, ListSectionItem } from '../../blocks/sections/lists';
import { TablesSection, TableDataItem } from '../../blocks/sections/tables';
import {
  ArticlesSection,
  ArticleCardItem,
  ArticleContentSection,
} from '../../blocks/sections/articles';
import {
  BannersSection,
  StripBannerItem,
  FullBannerItem,
} from '../../blocks/sections/banners';
import { BiographySection } from '../../blocks/sections/biography';
import { CodeBlock } from '@ui/CodeBlock';
import { libraryInstallCommands } from '@pages/utils/install-commands';
import { Card, CardContent } from '@kapwa/card';
import SEO from '@ui/SEO';

const Blocks: React.FC = () => {
  const searchResults: ListSectionItem[] = [
    {
      id: 1,
      title: 'National ID Registration',
      category: 'Citizenship',
      description:
        'The Philippine Identification System (PhilSys) provides a single national ID for all Filipino citizens and resident aliens. Registration is free and can be done at any PSA registration center or at designated sites in your municipality.',
    },
    {
      id: 2,
      title: 'Business Permit Application',
      category: 'Business',
      description:
        'Secure your business permit from your local government unit (LGU). Requirements include a filled-out application form, proof of business address, DTI or SEC registration, and barangay clearance.',
    },
    {
      id: 3,
      title: 'Passport Renewal',
      category: 'Travel',
      description:
        'Renew your Philippine passport through DFA online appointment. Bring your current passport, PSA birth certificate, and one valid government-issued ID. Processing takes 12 working days for regular and 6 for expedited.',
    },
  ];

  const tableData: TableDataItem[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'Pending' },
    {
      id: 3,
      name: 'Bob Johnson',
      email: 'bob@example.com',
      status: 'Inactive',
    },
  ];

  const articleCards: ArticleCardItem[] = [
    {
      id: 1,
      image:
        'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg',
      imageAlt: 'Article thumbnail',
      category: 'News',
      title: 'Digital Government Initiatives',
      description:
        "Latest updates on the government's digital transformation projects and e-services.",
      hasOverlay: false,
    },
    {
      id: 2,
      image:
        'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg',
      imageAlt: 'Article with overlay',
      category: 'Tourism',
      title: 'Exploring Philippine Islands',
      description: 'Discover the beauty of the Philippine archipelago.',
      hasOverlay: true,
    },
  ];

  const articleContent: ArticleContentSection[] = [
    { id: 1, type: 'heading', level: 1, content: 'Article Title' },
    {
      id: 2,
      type: 'paragraph',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    { id: 3, type: 'heading', level: 2, content: 'Section Heading' },
    {
      id: 4,
      type: 'paragraph',
      content:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
  ];

  const stripBanner: StripBannerItem = {
    id: 1,
    emoji: '🚀',
    mainText: 'Join the #CivicTech Revolution',
    subText:
      'Help build the future of the Philippines and governance through technology',
    primaryButton: {
      text: 'Join Now',
      className:
        'bg-gray-100 text-gray-800 px-4 py-1.5 rounded-full text-sm font-semibold hover:bg-gray-200',
      href: '#',
    },
    secondaryLink: {
      text: 'Discord',
      className: 'text-xs text-orange-200 underline',
      href: '#',
    },
  };

  const fullBanner: FullBannerItem = {
    id: 1,
    title: 'Join the',
    highlightedWord: '#CivicTech',
    description:
      'Help build the future of the Philippines and governance through technology.',
    highlightedPhrase: 'Volunteer-led. Open source. Community-driven.',
    primaryButton: {
      text: 'Join Our Movement',
      className:
        'bg-white text-gray-900 px-6 py-3 rounded-lg font-bold hover:bg-gray-100',
      href: '#',
    },
    secondaryButton: {
      text: 'Join Discord',
      className:
        'border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900',
      href: '#',
    },
  };

  return (
    <>
      <SEO title='Blocks' description='' keywords={['blocks']} />
      <div className='min-h-screen bg-gray-50 py-12'>
        <div className='container mx-auto px-4'>
          <h1 className='text-3xl font-bold text-gray-900 mb-8'>Blocks</h1>
          <ListsSection
            title='Search Results'
            headerTitle='Lists'
            headerSubtitle='Different list styles and search results'
            listItems={searchResults}
            externalLinkText='View'
          />

          <Card className='mb-8'>
            <CardContent>
              <div className='grid grid-cols-1 mb-8'>
                <p className='text-sm font-semibold'>
                  Importing the component:
                </p>
                <CodeBlock>{libraryInstallCommands.list.import}</CodeBlock>
              </div>
            </CardContent>
          </Card>

          <TablesSection
            title='Tables'
            subtitle='Table styles for data presentation'
            tableData={tableData}
          />

          <Card className='mb-8'>
            <CardContent>
              <div className='grid grid-cols-1 mb-8'>
                <p className='text-sm font-semibold'>
                  Importing the component:
                </p>
                <CodeBlock>{libraryInstallCommands.table.import}</CodeBlock>
              </div>
            </CardContent>
          </Card>

          <ArticlesSection
            headerTitle='Article Components'
            headerSubtitle='Article cards and content styles'
            articleCardTitle='Article Card'
            articleCards={articleCards}
            showArticleContent={true}
            articleContentTitle='Article Content'
            articleContent={articleContent}
          />

          <Card className='mb-8'>
            <CardContent>
              <div className='grid grid-cols-1 mb-8'>
                <p className='text-sm font-semibold'>
                  Importing the components:
                </p>
                <div className='space-y-4'>
                  <CodeBlock>{libraryInstallCommands.article.import}</CodeBlock>
                </div>
              </div>
            </CardContent>
          </Card>

          <BannersSection
            headerTitle='Banner Components'
            headerSubtitle='Banner and call-to-action components for community engagement'
            stripBannerTitle='Strip Banner'
            stripBanner={stripBanner}
            fullBannerTitle='Full CivicTech Banner'
            fullBanner={fullBanner}
          />

          <Card className='mb-8'>
            <CardContent>
              <div className='grid grid-cols-1 mb-8'>
                <p className='text-sm font-semibold'>
                  Importing the components:
                </p>
                <div className='space-y-4'>
                  <CodeBlock>
                    {libraryInstallCommands.stripBanner.import}
                  </CodeBlock>
                  <CodeBlock>
                    {libraryInstallCommands.civicTechBanner.import}
                  </CodeBlock>
                </div>
              </div>
            </CardContent>
          </Card>
          <BiographySection
            headerTitle='Official Biography'
            headerSubtitle='Government official profile and official biography layout'
          />
          <Card className='mb-8'>
            <CardContent>
              <div className='grid grid-cols-1 mb-8'>
                <p className='text-sm font-semibold'>
                  Importing the component:
                </p>
                <CodeBlock>
                  {libraryInstallCommands.officialBiography.import}
                </CodeBlock>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Blocks;
