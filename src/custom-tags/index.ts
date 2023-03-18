import hipaa from './hipaa';

type CustomTag = {
  tag: string;
  patterns: {
    headlineIncludes?: string[];
  }[];
};

const CUSTOM_TAGS: CustomTag[] = [
  {
    tag: 'hipaa',
    patterns: hipaa,
  },
];

export default CUSTOM_TAGS;
