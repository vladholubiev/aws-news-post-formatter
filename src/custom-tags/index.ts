import hipaa from './hipaa';
import iso from './iso';
import pciDSS from './pci-dss';
import hitrust from './hitrust';
import soc from './soc';
import fips from './fips';

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
    tag: 'hitrust',
    patterns: hitrust,
  },
  {
    tag: 'soc',
    patterns: soc,
  },
  {
    tag: 'fips',
    patterns: fips,
  },
];

export default CUSTOM_TAGS;
