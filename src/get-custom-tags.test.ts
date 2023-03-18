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
`('returns expected hipaa tags given a headline', ({headline, expectedTags}) => {
  const customTags = getCustomTags(headline);

  expect(customTags.sort()).toEqual(expectedTags.sort());
});

it.each`
  headline                                                                                    | expectedTags
  ${'AWS Network Firewall is now SOC compliant'}                                              | ${['soc']}
  ${'Amazon Textract is now SOC and ISO Compliant'}                                           | ${['soc', 'iso']}
  ${'AWS Resource Access Manager achieves ISO and SOC compliance'}                            | ${['soc', 'iso']}
  ${'AWS Certificate Manager Now SOC & PCI Eligible'}                                         | ${['soc', 'pci-dss']}
  ${'Amazon FinSpace is now in scope for SOC 1, SOC 2, and SOC 3 compliance'}                 | ${['soc']}
  ${'Amazon MQ Introduces Support for SOC Compliance Program'}                                | ${['soc']}
  ${'Amazon Timestream is now in scope for AWS SOC Reports'}                                  | ${['soc']}
  ${'Amazon Connect Customer Profiles is now PCI compliant and in scope for SOC 1 and SOC 2'} | ${['soc', 'pci-dss']}
  ${'Amazon Cloud Directory Demonstrates SOC and ISO Compliance'}                             | ${['soc', 'iso']}
  ${'Use AWS Secrets Manager to help maintain SOC compliance in the AWS cloud'}               | ${['soc']}
  ${'Amazon DocumentDB (with MongoDB compatibility) is now SOC 1, 2, and 3 compliant'}        | ${['soc']}
`('returns expected soc tags given a headline', ({headline, expectedTags}) => {
  const customTags = getCustomTags(headline);

  expect(customTags.sort()).toEqual(expectedTags.sort());
});

it.each`
  headline                                                                                                                                                             | expectedTags
  ${'Amazon RDS for Oracle now supports Federal Information Processing Standard (FIPS) 140-2 for Secure Sockets Layer (SSL)'}                                          | ${['fips']}
  ${'AWS Key Management Service now supports FIPS 140-2 enabled interface VPC endpoint'}                                                                               | ${['fips']}
  ${'AWS announces that all AWS Federal Information Processing Standard (FIPS) endpoints now only accept a minimum of Transport Layer Security (TLS) 1.2 connections'} | ${['fips']}
  ${'New AWS Service Catalog Connector for ServiceNow supports Budgets integration and FIPS endpoints'}                                                                | ${['fips']}
  ${'Four Additional AWS Services Now Offer FIPS Compliant End Points in AWS GovCloud (US)'}                                                                           | ${['fips', 'govcloud']}
`('returns expected fips tags given a headline', ({headline, expectedTags}) => {
  const customTags = getCustomTags(headline);

  expect(customTags.sort()).toEqual(expectedTags.sort());
});

it.each`
  headline                                                                                                   | expectedTags
  ${'AWS Network Firewall achieves PCI DSS Compliance'}                                                      | ${['pci-dss']}
  ${'Amazon MWAA is now PCI DSS compliant'}                                                                  | ${['pci-dss']}
  ${'AWS Achieves PCI DSS Level 1 Compliance'}                                                               | ${['pci-dss']}
  ${'PCI DSS Standardized Architecture on the AWS Cloud: Quick Start Reference Deployment'}                  | ${['pci-dss']}
  ${'AWS WAF is now Included in the set of Services that are PCI DSS 3.2 Level 1 Compliant.'}                | ${['pci-dss']}
  ${'AWS Cloud Map achieves PCI DSS Certification'}                                                          | ${['pci-dss']}
  ${'AWS Security Hub Automated Response and Remediation adds support for PCI-DSS v3.2.1 Security Standard'} | ${['pci-dss']}
  ${'Amazon Textract is now PCI DSS certified and extracts even more data from tables and forms'}            | ${['pci-dss']}
  ${'AWS SSO Expands Support for Customer Compliance with PCI-DSS and IRAP'}                                 | ${['pci-dss', 'irap']}
`('returns expected pci-dss tags given a headline', ({headline, expectedTags}) => {
  const customTags = getCustomTags(headline);

  expect(customTags.sort()).toEqual(expectedTags.sort());
});

it.each`
  headline                                                                                                                                      | expectedTags
  ${'AWS Transfer Family is now FedRAMP compliant'}                                                                                             | ${['fedramp']}
  ${'AWS Storage Gateway achieves FedRAMP compliance'}                                                                                          | ${['fedramp']}
  ${'AWS Network Firewall achieves FedRAMP High compliance'}                                                                                    | ${['fedramp']}
  ${'Amazon Keyspaces now is in scope for FedRAMP Moderate compliance to help you run highly regulated Apache Cassandra workloads more easily'} | ${['fedramp']}
  ${'Amazon EKS is now FedRAMP-High Compliant'}                                                                                                 | ${['fedramp']}
  ${'Amazon MQ is now authorized as FedRAMP Moderate'}                                                                                          | ${['fedramp']}
  ${'AWS Managed Services (AMS) achieves FedRAMP High Authorization'}                                                                           | ${['fedramp']}
  ${'AWS AppConfig achieves FedRAMP High Authority To Operate'}                                                                                 | ${['fedramp']}
  ${'AWS Outposts now FedRAMP authorized'}                                                                                                      | ${['fedramp']}
  ${'AWS Security Hub achieves FedRAMP High authorization to enable security posture management for high-impact workloads'}                     | ${['fedramp']}
  ${'AWS Achieves FedRAMP℠ Compliance'}                                                                                                         | ${['fedramp']}
  ${'New AWS Solutions Consulting Offer - Accelerated Cloud Engineering FedRAMP Launchpad'}                                                     | ${['fedramp']}
  ${'AWS GovCloud (US) Receives FedRAMP High Baseline P-ATO from the JAB'}                                                                      | ${['fedramp', 'govcloud']}
`('returns expected fedramp tags given a headline', ({headline, expectedTags}) => {
  const customTags = getCustomTags(headline);

  expect(customTags.sort()).toEqual(expectedTags.sort());
});

it.each`
  headline                                                                       | expectedTags
  ${'GxP Compliance Now on AWS'}                                                 | ${['gxp']}
  ${'AWS Audit Manager now offers a new standard framework for GxP EU Annex 11'} | ${['gxp']}
`('returns expected gxp tags given a headline', ({headline, expectedTags}) => {
  const customTags = getCustomTags(headline);

  expect(customTags.sort()).toEqual(expectedTags.sort());
});

it.each`
  headline                                 | expectedTags
  ${'New AWS Pop-up Loft Opens in Berlin'} | ${['aws-pop-up']}
`('returns expected gxp tags given a headline', ({headline, expectedTags}) => {
  const customTags = getCustomTags(headline);

  expect(customTags.sort()).toEqual(expectedTags.sort());
});

it.each`
  headline                                                                                                                                                                       | expectedTags
  ${'Amazon SES is now in the AWS GovCloud (US-West) Region'}                                                                                                                    | ${['govcloud']}
  ${'Amazon EC2 vCPU-based On-Demand Instance Limits are Now Available in GovCloud (US) Regions'}                                                                                | ${['govcloud']}
  ${'AWS VPC Flow Logs now available in the GovCloud (US) region'}                                                                                                               | ${['govcloud']}
  ${'Amazon Athena is now available in GovCloud (US-East)'}                                                                                                                      | ${['govcloud']}
  ${'Amazon SQS FIFO Queues are Now Available in the AWS China Beijing (BJS) Region (Operated by SINNET), Asia Pacific (Hong Kong), GovCloud (US-East), and GovCloud (US-West)'} | ${['govcloud']}
  ${'AWS Storage Gateway Available in GovCloud (US)'}                                                                                                                            | ${['govcloud']}
  ${'Amazon RDS now supports M4 instances in GovCloud for MySQL, MariaDB, PostgreSQL, and Oracle engines'}                                                                       | ${['govcloud']}
  ${'Now Available: Hardware MFA for GovCloud'}                                                                                                                                  | ${['govcloud']}
`('returns expected govcloud tags given a headline', ({headline, expectedTags}) => {
  const customTags = getCustomTags(headline);

  expect(customTags.sort()).toEqual(expectedTags.sort());
});

it.each`
  headline                                                                                                                                                           | expectedTags
  ${'Amazon RDS for Oracle now supports ALLOW_WEAK_CRYPTO* parameters for the Oracle Native Network Encryption (NNE) option'}                                        | ${['nne']}
  ${'Amazon RDS for Oracle Now Supports Transparent Data Encryption and Native Network Encryption'}                                                                  | ${['nne']}
  ${'Amazon Location Service is now HITRUST CSF certified'}                                                                                                          | ${['hitrust']}
  ${'AWS Network Firewall achieves ISO compliance'}                                                                                                                  | ${['iso']}
  ${'AWS Wavelength is now ISO 9001, 27001, 27017 and 27018 compliant'}                                                                                              | ${['iso']}
  ${'Amazon Keyspaces is now in scope for AWS ISO and CSA STAR certifications and services to help you run highly regulated Apache Cassandra workloads more easily'} | ${['iso']}
  ${'Amazon Kendra is now IRAP assessed at PROTECTED level'}                                                                                                         | ${['irap']}
  ${'New Quick Start deploys the Compliance IRAP PROTECTED Reference Architecture on the AWS Cloud'}                                                                 | ${['irap']}
  ${'Introducing new Amazon EC2 Windows Server AMIs for DISA STIG compliance'}                                                                                       | ${['disa-stig']}
  ${'AWS Private Certificate Authority publishes Matter PKI Compliance Customer Guide'}                                                                              | ${['pki']}
`('returns expected custom tags given a headline', ({headline, expectedTags}) => {
  const customTags = getCustomTags(headline);

  expect(customTags.sort()).toEqual(expectedTags.sort());
});

// quick start
// solutions
// consulting
