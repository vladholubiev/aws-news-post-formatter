import {getCustomTags} from './get-custom-tags';

it.each`
  headline                                                                                        | expectedTags
  ${'Amazon MSK Serverless is now HIPAA eligible'}                                                | ${['hipaa']}
  ${'Amazon MemoryDB for Redis is now HIPAA eligible'}                                            | ${['hipaa']}
  ${'AWS App Mesh achieves HIPAA eligibility'}                                                    | ${['hipaa']}
  ${'Amazon EFS now a HIPAA-Eligible Service'}                                                    | ${['hipaa']}
  ${'AWS CloudShell is now Health Insurance Portability and Accountability Act (HIPAA) eligible'} | ${['hipaa']}
  ${'Amazon Timestream can now be used for workloads subject to HIPAA, ISO, and PCI DSS'}         | ${['hipaa', 'iso', 'pci-dss']}
  ${'Amazon EMR Serverless now supports HIPAA, HITRUST, SOC, and PCI DSS workloads'}              | ${['hipaa', 'histrust', 'soc', 'pci-dss']}
`('returns expected custom tags given a headline', ({headline, expectedTags}) => {
  const customTags = getCustomTags(headline);

  expect(customTags.sort()).toEqual(expectedTags.sort());
});
