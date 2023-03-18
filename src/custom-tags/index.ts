import hipaa from './hipaa';
import iso from './iso';
import pciDSS from './pci-dss';
import hitrust from './hitrust';
import soc from './soc';
import fips from './fips';
import nne from './nne';
import irap from './irap';
import fedramp from './fedramp';
import disaStig from './disa-stig';
import pki from './pki';
import gxp from './gxp';
import govcloud from './govcloud';
import awsPopUp from './aws-pop-up';
import awsWellArchitected from './aws-well-architected';
import oracleDB from './oracle-db';
import quickStart from './quick-start';
import partnerNetwork from './partner-network';
import awsCompetency from './aws-competency';
import courses from './courses';
import awsMarketplace from './aws-marketplace';
import solutionConsulting from './solution-consulting';

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
  {
    tag: 'nne',
    patterns: nne,
  },
  {
    tag: 'irap',
    patterns: irap,
  },
  {
    tag: 'fedramp',
    patterns: fedramp,
  },
  {
    tag: 'disa-stig',
    patterns: disaStig,
  },
  {
    tag: 'pki',
    patterns: pki,
  },
  {
    tag: 'gxp',
    patterns: gxp,
  },
  {
    tag: 'govcloud',
    patterns: govcloud,
  },
  {
    tag: 'aws-pop-up',
    patterns: awsPopUp,
  },
  {
    tag: 'aws-well-architected',
    patterns: awsWellArchitected,
  },
  {
    tag: 'oracle-db',
    patterns: oracleDB,
  },
  {
    tag: 'quick-start',
    patterns: quickStart,
  },
  {
    tag: 'partner-network',
    patterns: partnerNetwork,
  },
  {
    tag: 'aws-competency',
    patterns: awsCompetency,
  },
  {
    tag: 'courses',
    patterns: courses,
  },
  {
    tag: 'aws-marketplace',
    patterns: awsMarketplace,
  },
  {
    tag: 'solution-consulting',
    patterns: solutionConsulting,
  },
];

export default CUSTOM_TAGS;
