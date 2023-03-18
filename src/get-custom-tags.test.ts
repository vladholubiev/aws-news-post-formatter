import {getCustomTags} from './get-custom-tags';

it.each`
  headline                                                                                                                                                                           | expectedTags
  ${'Amazon MSK Serverless is now HIPAA eligible'}                                                                                                                                   | ${['hipaa']}
  ${'Amazon MemoryDB for Redis is now HIPAA eligible'}                                                                                                                               | ${['hipaa']}
  ${'AWS App Mesh achieves HIPAA eligibility'}                                                                                                                                       | ${['hipaa']}
  ${'Amazon EFS now a HIPAA-Eligible Service'}                                                                                                                                       | ${['hipaa']}
  ${'AWS CloudShell is now Health Insurance Portability and Accountability Act (HIPAA) eligible'}                                                                                    | ${['hipaa']}
  ${'Amazon Timestream can now be used for workloads subject to HIPAA, ISO, and PCI DSS'}                                                                                            | ${['hipaa', 'iso', 'pci-dss']}
  ${'Amazon EMR Serverless now supports HIPAA, HITRUST, SOC, and PCI DSS workloads'}                                                                                                 | ${['hipaa', 'hitrust', 'soc', 'pci-dss']}
  ${'Now You Can Use Amazon Cloud Directory to Help Maintain HIPAA and PCI Compliance in the AWS Cloud'}                                                                             | ${['hipaa', 'pci-dss']}
  ${'AWS Fargate Supports Container Workloads Regulated By ISO, PCI, SOC, and HIPAA'}                                                                                                | ${['iso', 'pci-dss', 'soc', 'hipaa']}
  ${'Amazon QuickSight adds support for Geospatial Visualizations, Tabular Reports, Private VPC Access, Calculations for SPICE datasets in analysis, and HIPAA compliant workloads'} | ${['hipaa']}
  ${'Quick Start deploys a reference architecture for HIPAA workloads on the AWS Cloud'}                                                                                             | ${['hipaa']}
  ${'Creating HIPAA-Compliant Medical Data Applications With AWS'}                                                                                                                   | ${['hipaa']}
  ${'AWS Network Firewall is now SOC compliant'}                                                                                                                                     | ${['soc']}
  ${'Amazon Textract is now SOC and ISO Compliant'}                                                                                                                                  | ${['soc', 'iso']}
  ${'AWS Resource Access Manager achieves ISO and SOC compliance'}                                                                                                                   | ${['soc', 'iso']}
  ${'AWS Certificate Manager Now SOC & PCI Eligible'}                                                                                                                                | ${['soc', 'pci-dss']}
  ${'Amazon FinSpace is now in scope for SOC 1, SOC 2, and SOC 3 compliance'}                                                                                                        | ${['soc']}
  ${'Amazon MQ Introduces Support for SOC Compliance Program'}                                                                                                                       | ${['soc']}
  ${'Amazon Timestream is now in scope for AWS SOC Reports'}                                                                                                                         | ${['soc']}
  ${'Amazon Connect Customer Profiles is now PCI compliant and in scope for SOC 1 and SOC 2'}                                                                                        | ${['soc', 'pci-dss']}
  ${'Amazon RDS for Oracle now supports Federal Information Processing Standard (FIPS) 140-2 for Secure Sockets Layer (SSL)'}                                                        | ${['fips']}
  ${'Amazon Cloud Directory Demonstrates SOC and ISO Compliance'}                                                                                                                    | ${['soc', 'iso']}
  ${'Use AWS Secrets Manager to help maintain SOC compliance in the AWS cloud'}                                                                                                      | ${['soc']}
  ${'Amazon DocumentDB (with MongoDB compatibility) is now SOC 1, 2, and 3 compliant'}                                                                                               | ${['soc']}
  ${'Amazon RDS for Oracle now supports ALLOW_WEAK_CRYPTO* parameters for the Oracle Native Network Encryption (NNE) option'}                                                        | ${['nne']}
`('returns expected custom tags given a headline', ({headline, expectedTags}) => {
  const customTags = getCustomTags(headline);

  expect(customTags.sort()).toEqual(expectedTags.sort());
});
