import hipaa from './hipaa';
import iso from './iso';
import pciDSS from './pci-dss';
import histrust from './histrust';
import soc from './soc';

type CustomTag = {
  tag: string;
  patterns: {
    headlineIncludes?: string[];
    headlineMatches?: RegExp[];
  }[];
};

const CUSTOM_TAGS: CustomTag[] = [
  {
    tag: 'hipaa',
    patterns: hipaa,
  },
  {
    tag: 'iso',
    patterns: iso,
  },
  {
    tag: 'pci-dss',
    patterns: pciDSS,
  },
  {
    tag: 'histrust',
    patterns: histrust,
  },
  {
    tag: 'soc',
    patterns: soc,
  },
];

export default CUSTOM_TAGS;
