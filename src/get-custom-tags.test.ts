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
  ${'Amazon RDS for Oracle now supports Federal Information Processing Standard (FIPS) 140-2 for Secure Sockets Layer (SSL)'}                                          | ${['fips', 'oracle-db']}
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
  ${'PCI DSS Standardized Architecture on the AWS Cloud: Quick Start Reference Deployment'}                  | ${['pci-dss', 'quick-start']}
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
  ${'New AWS Solutions Consulting Offer - Accelerated Cloud Engineering FedRAMP Launchpad'}                                                     | ${['fedramp', 'solution-consulting']}
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
`('returns expected aws-pop-up tags given a headline', ({headline, expectedTags}) => {
  const customTags = getCustomTags(headline);

  expect(customTags.sort()).toEqual(expectedTags.sort());
});

it.each`
  headline                                                                                                                                                              | expectedTags
  ${'Amazon RDS now Supports Oracle Database 11.2.0.3'}                                                                                                                 | ${['oracle-db']}
  ${'Amazon RDS Oracle on t1.micro, starting at just $30 a month'}                                                                                                      | ${['oracle-db']}
  ${'Amazon RDS for Oracle Now Supports Data Pump'}                                                                                                                     | ${['oracle-db']}
  ${'Amazon RDS Custom for Oracle is now available in Asia Pacific (Seoul) and Asia Pacific (Osaka) AWS Regions'}                                                       | ${['oracle-db', 'regional-expansion']}
  ${'AWS Database Migration Service Officially Supports SSL for Oracle databases'}                                                                                      | ${['oracle-db']}
  ${'Oracle Database on the AWS Cloud: Quick Start Reference Deployment'}                                                                                               | ${['oracle-db', 'quick-start']}
  ${'Amazon RDS now supports Oracle 12.1.0.2, April PSU patches, improved CloudHSM integration'}                                                                        | ${['oracle-db']}
  ${'AWS Schema Conversion Tool Adds Support for Migrating Oracle ETL Jobs to AWS Glue'}                                                                                | ${['oracle-db']}
  ${'SQLT Diagnostics Tool Version 12.2.180331 is Now Available for Amazon for Oracle'}                                                                                 | ${['oracle-db']}
  ${'Modifiable sqlnet.ora Parameters for RDS Oracle'}                                                                                                                  | ${['oracle-db']}
  ${'AWS Schema Conversion Tool now supports conversions from Oracle DW and Teradata to Amazon Redshift, Embedded Code Conversion, and Cloud native Code Optimization'} | ${['oracle-db']}
`('returns expected oracle-db tags given a headline', ({headline, expectedTags}) => {
  const customTags = getCustomTags(headline);

  expect(customTags.sort()).toEqual(expectedTags.sort());
});

it.each`
  headline                                                                         | expectedTags
  ${'AWS Well-Architected Tool improves workload discovery and speeds up reviews'} | ${['aws-well-architected']}
`('returns expected aws-well-architected tags given a headline', ({headline, expectedTags}) => {
  const customTags = getCustomTags(headline);

  expect(customTags.sort()).toEqual(expectedTags.sort());
});

it.each`
  headline                                                                                            | expectedTags
  ${'AWS Partner Network Launches New Competency, Government Partner Solutions'}                      | ${['partner-network', 'aws-competency']}
  ${'APN Navigate Security Track'}                                                                    | ${['partner-network']}
  ${'APN Program 2019 Changes'}                                                                       | ${['partner-network']}
  ${'New APN Partners to help with database migrations to AWS'}                                       | ${['partner-network']}
  ${'Announcing the APN Foundations Advanced Navigate track'}                                         | ${['partner-network']}
  ${'New AWS Professional Services Delivery Bootcamp for APN Partners'}                               | ${['partner-network']}
  ${'Introducing the APN Navigate Foundations Path'}                                                  | ${['partner-network']}
  ${'Introducing a new benefit for APN Consulting Partners, APN Immersion Days'}                      | ${['partner-network']}
  ${'Announcing APN Service Delivery Program for AWS Partners with Service Catalog Expertise'}        | ${['partner-network']}
  ${'Introducing AWS Lambda Ready Partners'}                                                          | ${['partner-network']}
  ${'Introducing AWS Graviton Delivery Partners'}                                                     | ${['partner-network']}
  ${'Introducing Amazon RDS Ready Partners'}                                                          | ${['partner-network']}
  ${'New partner integrations available for AWS Security Hub'}                                        | ${['partner-network']}
  ${'New partner training on migration, cloud governance, and machine learning'}                      | ${['partner-network']}
  ${'AWS Solutions Training for Partners: Foundations'}                                               | ${['partner-network']}
  ${'AWS announces a new AWS Training Partner program'}                                               | ${['partner-network']}
  ${'Amazon Lightsail Partners with GoDaddy to Simplify WordPress Management'}                        | ${['partner-network']}
  ${'Announcing the AWS SaaS Partner Program'}                                                        | ${['partner-network']}
  ${'New AWS GameDay Benefits for Differentiated Partners'}                                           | ${['partner-network']}
  ${'AWS Security Hub adds five new partners'}                                                        | ${['partner-network']}
  ${'AWS Security Hub releases integrations with 4 new partners'}                                     | ${['partner-network']}
  ${'AWS Partners: Learn how to engage customers in ML and AI opportunities!'}                        | ${['partner-network']}
  ${'AWS Direct Connect Service Delivery Partners'}                                                   | ${['partner-network']}
  ${'AWS Security Hub launches five controls and one new integration partner'}                        | ${['partner-network']}
  ${'Announcing AWS Outposts Ready Partners'}                                                         | ${['partner-network']}
  ${'AWS Security Hub launches 13 controls and two partners for security posture monitoring'}         | ${['partner-network']}
  ${'AWS PrivateLink Now Available for Customer and Partner Services'}                                | ${['partner-network']}
  ${'AWS AI for data analytics (AIDA) partner solutions'}                                             | ${['partner-network']}
  ${'AWS and partners of the Open 3D Foundation announce the first Stable release of Open 3D Engine'} | ${['partner-network']}
`('returns expected partner-network tags given a headline', ({headline, expectedTags}) => {
  const customTags = getCustomTags(headline);

  expect(customTags.sort()).toEqual(expectedTags.sort());
});

it.each`
  headline                                              | expectedTags
  ${'New AWS Solutions Consulting Offer - AMI Factory'} | ${['solution-consulting']}
  ${'Introducing AWS Solutions Consulting Offers'}      | ${['solution-consulting']}
`('returns solution-consulting tags given a headline', ({headline, expectedTags}) => {
  const customTags = getCustomTags(headline);

  expect(customTags.sort()).toEqual(expectedTags.sort());
});

it.each`
  headline                                                                                            | expectedTags
  ${'AWS Organizations Now Supports Tagging and Untagging of AWS Accounts'}                           | ${['tagging']}
  ${'Introducing Tagging Support for AWS Storage Gateway'}                                            | ${['tagging']}
  ${'Tag Your AWS Batch Spot Managed Compute Environments'}                                           | ${['tagging']}
  ${'AWS IoT Now Supports Resource Tagging'}                                                          | ${['tagging']}
  ${'AWS Elemental MediaConvert Now Supports Resource Tags'}                                          | ${['tagging']}
  ${'Amazon EFS Now Supports Tag-on-Create'}                                                          | ${['tagging']}
  ${'Amazon VPC Endpoints and Endpoint Services now support Tag-On Create'}                           | ${['tagging']}
  ${'Amazon VPC Resources Now Support Tag on Create'}                                                 | ${['tagging']}
  ${'AWS Support enables tagging capabilities for Trusted Advisor'}                                   | ${['tagging']}
  ${'Announcing Tagging for AWS Elastic Beanstalk'}                                                   | ${['tagging']}
  ${'Announcing Cost Allocation Tagging for AWS Directory Service'}                                   | ${['tagging']}
  ${'Amazon DynamoDB now Supports Cost Allocation Tags'}                                              | ${['tagging']}
  ${'Amazon EBS Adds Support for Tagging EBS Snapshots Upon Creation and Resource-Level Permissions'} | ${['tagging']}
  ${'Now you can tag Amazon DynamoDB tables when you create them'}                                    | ${['tagging']}
  ${'Amazon EC2 Dedicated Hosts now Supports Tags'}                                                   | ${['tagging']}
  ${'Amazon ECR now allows Repository Tagging'}                                                       | ${['tagging']}
  ${'Tagging now Available with the Amazon Machine Learning API'}                                     | ${['tagging']}
  ${'Elastic Load Balancing Introduces Support for Tagging'}                                          | ${['tagging']}
  ${'Copy Tags from an Amazon Aurora PostgreSQL Cluster to a Database Snapshot'}                      | ${['tagging']}
  ${'AWS Service Catalog Announces Tag Updating'}                                                     | ${['tagging']}
  ${'Now Use Tags to Track and Allocate Amazon SageMaker Studio Notebooks Costs'}                     | ${['tagging']}
  ${'Resource Groups Tagging API Supports Additional AWS Services'}                                   | ${['tagging']}
  ${'Resource Groups Tagging API launches ResourceARNList parameter for the GetResources operation'}  | ${['tagging']}
  ${'Tag Auto Scaling Groups in the AWS Management Console'}                                          | ${['tagging']}
  ${'Bottlerocket now supports network bonding and VLAN tagging'}                                     | ${['tagging']}
`('returns tagging tags given a headline', ({headline, expectedTags}) => {
  const customTags = getCustomTags(headline);

  expect(customTags.sort()).toEqual(expectedTags.sort());
});

it.each`
  headline                                                                                                                  | expectedTags
  ${'AWS Marketplace launches Discovery API, making it easier to discover relevant third-party software and data products'} | ${['aws-marketplace']}
`('returns aws-marketplace tags given a headline', ({headline, expectedTags}) => {
  const customTags = getCustomTags(headline);

  expect(customTags.sort()).toEqual(expectedTags.sort());
});

it.each`
  headline                                                                                            | expectedTags
  ${'AWS IAM Console Now Available In German, Portuguese, Spanish, Italian, and Traditional Chinese'} | ${['language-expansion']}
  ${'The AWS Organizations Console is Now Available in Eight New Languages'}                          | ${['language-expansion']}
  ${'The Amazon Builders’ Library is Now Available in 16 Languages'}                                  | ${['language-expansion']}
  ${'Amazon Connect adds support for seven new languages'}                                            | ${['language-expansion']}
`('returns language-expansion tags given a headline', ({headline, expectedTags}) => {
  const customTags = getCustomTags(headline);

  expect(customTags.sort()).toEqual(expectedTags.sort());
});

it.each`
  headline                                                                                                                                                                          | expectedTags
  ${'AWS App Mesh is now available in Europe (Milan) Region'}                                                                                                                       | ${['regional-expansion']}
  ${'Amazon EC2 G4 Instances with NVIDIA T4 Tensor Core GPUs, now available in 6 additional regions'}                                                                               | ${['regional-expansion']}
  ${'Amazon Data Lifecycle Manager Now Available in the EU (Paris) Region'}                                                                                                         | ${['regional-expansion']}
  ${'Amazon Data Lifecycle Manager Now Available in the EU (Stockholm) Region'}                                                                                                     | ${['regional-expansion']}
  ${'Amazon EC2 D3 instances with dense local HDD storage now available in Europe (London) region'}                                                                                 | ${['regional-expansion']}
  ${'Amazon EC2 C6i instances are now available in an additional region'}                                                                                                           | ${['regional-expansion']}
  ${'Amazon EC2 C6i instances are now available in 10 additional regions'}                                                                                                          | ${['regional-expansion']}
  ${'Amazon EC2 M5d Instances are Now Available in Additional Regions'}                                                                                                             | ${['regional-expansion']}
  ${'Amazon EC2 R4 instances are now available in new regions'}                                                                                                                     | ${['regional-expansion']}
  ${'Amazon GuardDuty Now Available in AWS Middle East (Bahrain) Region'}                                                                                                           | ${['regional-expansion']}
  ${'Announcing the AWS China (Beijing) Region'}                                                                                                                                    | ${['regional-expansion']}
  ${'Announcing the AWS Europe (London) Region'}                                                                                                                                    | ${['regional-expansion']}
  ${'Announcing the new AWS Africa (Cape Town) Region'}                                                                                                                             | ${['regional-expansion']}
  ${'Announcing the newly expanded AWS Asia Pacific (Osaka) Region'}                                                                                                                | ${['regional-expansion']}
  ${'Third AZ in EU (Frankfurt) Region'}                                                                                                                                            | ${['regional-expansion']}
  ${'Sixth AZ in US East (N. Virginia) Region'}                                                                                                                                     | ${['regional-expansion']}
  ${'AQUA for Amazon Redshift launches in three additional AWS regions'}                                                                                                            | ${['regional-expansion']}
  ${'AWS CloudTrail Adds S3 Data Events in Canada (Central) and EU (London) Regions'}                                                                                               | ${['regional-expansion']}
  ${'Amazon Chime Voice Connector adds the US West (Oregon) AWS region and redundant call routing'}                                                                                 | ${['regional-expansion']}
  ${'Amazon RDS adds Multi-AZ support for SQL Server in US East Region'}                                                                                                            | ${['regional-expansion']}
  ${'AWS Console Mobile Application adds support for Asia Pacific (Jakarta) region'}                                                                                                | ${['regional-expansion']}
  ${'AWS Elemental Link adds features and service regions'}                                                                                                                         | ${['regional-expansion']}
  ${'AWS Backup is now available for Amazon Elastic File System (Amazon EFS) in 4 additional regions'}                                                                              | ${['regional-expansion']}
  ${'AWS CloudTrail launch in Beijing China Region'}                                                                                                                                | ${['regional-expansion']}
  ${'AWS Security Hub launches in AWS Europe (Milan) Region'}                                                                                                                       | ${['regional-expansion']}
  ${'Route 53 Resolver for Hybrid Cloud Expands to Seven New AWS Regions'}                                                                                                          | ${['regional-expansion']}
  ${'SageMaker Region expansion to Bahrain'}                                                                                                                                        | ${['regional-expansion']}
  ${'Introducing Amazon VPC Endpoints for Amazon S3 in China (Beijing) Region'}                                                                                                     | ${['regional-expansion']}
  ${'Coming Soon — Amazon Connect in the Asia Pacific (Tokyo) AWS Region'}                                                                                                          | ${['regional-expansion']}
  ${'AWS Asia Pacific (Mumbai) Region Adds Third Availability Zone'}                                                                                                                | ${['regional-expansion']}
  ${'AWS Launches the Northern California Region'}                                                                                                                                  | ${['regional-expansion']}
  ${'AWS to Launch Standard AWS Region in Osaka in Early 2021'}                                                                                                                     | ${['regional-expansion']}
  ${'Amazon QuickSight supports Seoul region, dashboard printing and more'}                                                                                                         | ${['regional-expansion']}
  ${'EC2 Hibernation feature is now available to customers in the Middle East (Bahrain) AWS Region'}                                                                                | ${['regional-expansion']}
  ${'Announcing the new US West (Oregon) Region'}                                                                                                                                   | ${['regional-expansion']}
  ${'PartiQL for DynamoDB now is supported in 23 AWS Regions'}                                                                                                                      | ${['regional-expansion']}
  ${'Amazon Chime now uses 14 AWS regions to host meetings closer to participants'}                                                                                                 | ${['regional-expansion']}
  ${'Amazon Sumerian Regional and Feature Expansion'}                                                                                                                               | ${['regional-expansion']}
  ${'Announcing New Regions for Amazon WorkSpaces Application Manager'}                                                                                                             | ${['regional-expansion']}
  ${'Announcing New Region and Features for Amazon WorkSpaces Application Manager'}                                                                                                 | ${['regional-expansion']}
  ${'Announcing Second Availability Zone in Tokyo Region'}                                                                                                                          | ${['regional-expansion']}
  ${'Announcing Three New Additions to the South America (Sao Paulo) Region'}                                                                                                       | ${['regional-expansion']}
  ${'Announcing the South America (Sao Paulo) Region'}                                                                                                                              | ${['regional-expansion']}
  ${'Announcing the availability of Snowball in EU (Frankfurt) region'}                                                                                                             | ${['regional-expansion']}
  ${'AWS Amplify CLI and Admin UI is now generally available in US West (N. California), Europe (Paris), Europe (Stockholm), South America (São Paulo), and Middle East (Bahrain)'} | ${['regional-expansion']}
  ${'VMware Cloud on AWS is now available in Africa (Cape Town)'}                                                                                                                   | ${['regional-expansion']}
  ${'Amazon Polly NTTS voices now available in Canada (Central), and Asia Pacific (Seoul)'}                                                                                         | ${['regional-expansion']}
  ${'Amazon Personalize is now available in Frankfurt'}                                                                                                                             | ${['regional-expansion']}
  ${'Amazon Inspector is now available in US West (Northern California)'}                                                                                                           | ${['regional-expansion']}
  ${'Amazon WorkSpaces Available in Japan'}                                                                                                                                         | ${['regional-expansion']}
  ${'Amazon WorkSpaces Available in Singapore'}                                                                                                                                     | ${['regional-expansion']}
  ${'Amazon WorkSpaces Available in Sydney!'}                                                                                                                                       | ${['regional-expansion']}
  ${'Amazon Redshift and Amazon EC2 High Storage Instances available in EU West (Ireland)'}                                                                                         | ${['regional-expansion']}
  ${'Amazon RDS Enhanced Monitoring is now available in South America (Sao Paulo) and China (Beijing)'}                                                                             | ${['regional-expansion']}
  ${'AWS IoT Device Defender Now Available in AWS Middle East (Bahrain)'}                                                                                                           | ${['regional-expansion']}
  ${'AWS Service Catalog is now available in (Jakarta) Indonesia'}                                                                                                                  | ${['regional-expansion']}
  ${'AWS Service Catalog is now available in Hong Kong and Bahrain'}                                                                                                                | ${['regional-expansion']}
  ${'AWS Service Catalog is now available in Osaka'}                                                                                                                                | ${['regional-expansion']}
  ${'Amazon EMR is now available in the AWS Local Zone in Los Angeles'}                                                                                                             | ${['regional-expansion']}
  ${'Amazon EKS Available in Ireland'}                                                                                                                                              | ${['regional-expansion']}
  ${'Amazon MQ is Now Available in Mumbai and Paris'}                                                                                                                               | ${['regional-expansion']}
  ${'AWS Elastic Disaster Recovery is now available in Israel (Tel Aviv)'}                                                                                                          | ${['regional-expansion']}
  ${'Announcing Amazon CodeCatalyst’s Launch in Europe (Ireland)'}                                                                                                                  | ${['regional-expansion']}
  ${'Announcing the general availability of AWS Local Zones in Hamburg and Warsaw'}                                                                                                 | ${['regional-expansion']}
  ${'Announcing the General Availability of AWS Local Zones in Las Vegas, New York City, and Portland'}                                                                             | ${['regional-expansion']}
`('returns regional-expansion tags given a headline', ({headline, expectedTags}) => {
  const customTags = getCustomTags(headline);

  expect(customTags.sort()).toEqual(expectedTags.sort());
});

it.each`
  headline                                                                                                            | expectedTags
  ${'Announcing Three New Digital Courses for AWS Snowcone'}                                                          | ${['courses']}
  ${'New Digital Course on edX for Building Applications That Use Amazon DynamoDB'}                                   | ${['courses']}
  ${'New Classroom Course: Media Essentials for IT Business Decision Makers'}                                         | ${['courses']}
  ${'New digital training course for Amazon Managed Blockchain'}                                                      | ${['courses']}
  ${'New self-paced course about designing data lakes on edX and Coursera'}                                           | ${['courses']}
  ${'Updated Training Course: Big Data on AWS'}                                                                       | ${['courses']}
  ${'New Course on edX: AWS IoT: Developing and Deploying an Internet of Things'}                                     | ${['courses']}
  ${'New AWS Training Course - “Big Data on AWS”'}                                                                    | ${['courses']}
  ${'New AWS Fundamentals: Building Serverless Applications Course on Coursera'}                                      | ${['courses']}
  ${'Major Updates to Two AWS Classroom Training Courses'}                                                            | ${['courses']}
  ${'New AWS Business Professional course for APN Partner Accreditation'}                                             | ${['courses', 'partner-network']}
  ${'Take AWS Training Courses on edX and Udemy'}                                                                     | ${['courses']}
  ${'Announcing New and Updated Exam Readiness Courses for AWS Certifications'}                                       | ${['courses']}
  ${'6 new training courses for Amazon Connect'}                                                                      | ${['courses']}
  ${'APN Partner Accreditation Courses Available in More Languages'}                                                  | ${['courses', 'partner-network']}
  ${'New Courses Available to Help You Grow and Accelerate Your AWS Cloud Skills'}                                    | ${['courses']}
  ${'New course available: MLOps Engineering on AWS'}                                                                 | ${['courses']}
  ${'New instructor-led course: Developing Serverless Solutions on AWS'}                                              | ${['courses']}
  ${'Major Updates to AWS Technical Essentials and Architecting on AWS Courses'}                                      | ${['courses']}
  ${'New course for Amazon Elastic Kubernetes Service (Amazon EKS)'}                                                  | ${['courses']}
  ${'Announcing new AWS Developer Specializations on Coursera'}                                                       | ${['courses']}
  ${'Announcing new on-demand training courses for Media Services'}                                                   | ${['courses']}
  ${'Announcing the first technical course just for APN Technology Partners'}                                         | ${['courses']}
  ${'Announcing 4 new and updated courses for APN Partners'}                                                          | ${['courses', 'partner-network']}
  ${'Announcing 3 new courses for APN Partners on IoT and data analytics'}                                            | ${['courses', 'partner-network']}
  ${'Introducing our new Solutions Training for Partners: Sales Best Practices courses'}                              | ${['courses']}
  ${'3 New APN Partner Courses on Machine Learning, VMware & Containers'}                                             | ${['courses', 'partner-network']}
  ${'AWS Educate: Students and Educators Can Access AWS Technology, Cloud Courses, Training and Collaboration Tools'} | ${['courses']}
  ${'AWS Training and Certification and edX Launch New Course on Amazon Sagemaker'}                                   | ${['courses']}
  ${'AWS and Coursera Offer New Course, AWS Fundamentals: Going Cloud-Native'}                                        | ${['courses']}
  ${'AWS announces new course for practical decision making using no-code ML with Amazon SageMaker Canvas'}           | ${['courses']}
  ${'New 4-course series on Coursera teaches vital product-management skills'}                                        | ${['courses']}
  ${'Updated AWS Business Professional and Technical Professional Accreditation Courses'}                             | ${['courses']}
  ${'AWS Developer Series Relaunched on edX'}                                                                         | ${['courses']}
  ${'Announcing a new digital curriculum: Break Free of Legacy Databases'}                                            | ${['courses']}
  ${'Announcing the AWS Game Tech Starter Pack Digital Training Curriculum'}                                          | ${['courses']}
`('returns expected courses tags given a headline', ({headline, expectedTags}) => {
  const customTags = getCustomTags(headline);

  expect(customTags.sort()).toEqual(expectedTags.sort());
});

it.each`
  headline                                                                                   | expectedTags
  ${'AWS Container Competency'}                                                              | ${['aws-competency']}
  ${'New AWS Competency Program differentiates AWS Partners with Energy Industry Expertise'} | ${['aws-competency', 'partner-network']}
  ${'New End User Computing Competency Solutions'}                                           | ${['aws-competency']}
  ${'Introducing the Smart City Competency program'}                                         | ${['aws-competency']}
`('returns expected aws-competency tags given a headline', ({headline, expectedTags}) => {
  const customTags = getCustomTags(headline);

  expect(customTags.sort()).toEqual(expectedTags.sort());
});

it.each`
  headline                                                                                                | expectedTags
  ${'New Quick Start deploys Axomo on AWS'}                                                               | ${['quick-start']}
  ${'Quick Start Update: Deploy NGINX Plus on the AWS Cloud'}                                             | ${['quick-start']}
  ${'New Quick Start: Build a data lake on the AWS Cloud with Talend Big Data Platform and AWS services'} | ${['quick-start']}
  ${'New Quick Start Implements Security Configurations to Support CIS AWS Foundations Benchmark'}        | ${['quick-start']}
  ${'Deploy TIBCO Data Science on AWS with New Quick Start'}                                              | ${['quick-start']}
  ${'Magento on the AWS Cloud: Quick Start Reference Deployment'}                                         | ${['quick-start']}
  ${'Updated Quick Start for Tableau Server on the AWS Cloud Supports Linux'}                             | ${['quick-start']}
  ${'New Quick Starts deploy JFrog Artifactory on AWS'}                                                   | ${['quick-start']}
  ${'AWS AppSync Adds Quick Start for Amazon Aurora'}                                                     | ${['quick-start']}
  ${'AWS Quick Starts for Atlassian products now auto-detect existing infrastructure'}                    | ${['quick-start']}
  ${'Connect Your Git Repository to Amazon S3 and AWS Services Using Webhooks and New Quick Start'}       | ${['quick-start']}
  ${'Deploy Aviatrix Next-Gen Global Transit Hub on the AWS Cloud with Updated Quick Start'}              | ${['quick-start']}
  ${'Deploy WordPress High Availability by Bitnami with New AWS Quick Start'}                             | ${['quick-start']}
  ${'New Heptio-Supported Quick Start for Kubernetes on the AWS Cloud'}                                   | ${['quick-start']}
  ${'Quick Start for Portworx PX-Enterprise on Kubernetes on AWS'}                                        | ${['quick-start']}
  ${'Trend Micro Deep Security on the AWS Cloud: Quick Start Update'}                                     | ${['quick-start']}
`('returns expected quick-start tags given a headline', ({headline, expectedTags}) => {
  const customTags = getCustomTags(headline);

  expect(customTags.sort()).toEqual(expectedTags.sort());
});

it.each`
  headline                                                                                                                                                                       | expectedTags
  ${'Amazon SES is now in the AWS GovCloud (US-West) Region'}                                                                                                                    | ${['govcloud', 'regional-expansion']}
  ${'Amazon EC2 vCPU-based On-Demand Instance Limits are Now Available in GovCloud (US) Regions'}                                                                                | ${['govcloud', 'regional-expansion']}
  ${'AWS VPC Flow Logs now available in the GovCloud (US) region'}                                                                                                               | ${['govcloud', 'regional-expansion']}
  ${'Amazon Athena is now available in GovCloud (US-East)'}                                                                                                                      | ${['govcloud', 'regional-expansion']}
  ${'Amazon SQS FIFO Queues are Now Available in the AWS China Beijing (BJS) Region (Operated by SINNET), Asia Pacific (Hong Kong), GovCloud (US-East), and GovCloud (US-West)'} | ${['govcloud', 'regional-expansion']}
  ${'AWS Storage Gateway Available in GovCloud (US)'}                                                                                                                            | ${['govcloud', 'regional-expansion']}
  ${'Amazon RDS now supports M4 instances in GovCloud for MySQL, MariaDB, PostgreSQL, and Oracle engines'}                                                                       | ${['govcloud', 'oracle-db']}
  ${'Now Available: Hardware MFA for GovCloud'}                                                                                                                                  | ${['govcloud']}
`('returns expected govcloud tags given a headline', ({headline, expectedTags}) => {
  const customTags = getCustomTags(headline);

  expect(customTags.sort()).toEqual(expectedTags.sort());
});

it.each`
  headline                                                                                                                                                           | expectedTags
  ${'Amazon RDS for Oracle now supports ALLOW_WEAK_CRYPTO* parameters for the Oracle Native Network Encryption (NNE) option'}                                        | ${['nne', 'oracle-db']}
  ${'Amazon RDS for Oracle Now Supports Transparent Data Encryption and Native Network Encryption'}                                                                  | ${['nne', 'oracle-db']}
  ${'Amazon Location Service is now HITRUST CSF certified'}                                                                                                          | ${['hitrust']}
  ${'AWS Network Firewall achieves ISO compliance'}                                                                                                                  | ${['iso']}
  ${'AWS Wavelength is now ISO 9001, 27001, 27017 and 27018 compliant'}                                                                                              | ${['iso']}
  ${'Amazon Keyspaces is now in scope for AWS ISO and CSA STAR certifications and services to help you run highly regulated Apache Cassandra workloads more easily'} | ${['iso']}
  ${'Amazon Kendra is now IRAP assessed at PROTECTED level'}                                                                                                         | ${['irap']}
  ${'New Quick Start deploys the Compliance IRAP PROTECTED Reference Architecture on the AWS Cloud'}                                                                 | ${['irap', 'quick-start']}
  ${'Introducing new Amazon EC2 Windows Server AMIs for DISA STIG compliance'}                                                                                       | ${['disa-stig']}
  ${'AWS Private Certificate Authority publishes Matter PKI Compliance Customer Guide'}                                                                              | ${['pki']}
`('returns expected custom tags given a headline', ({headline, expectedTags}) => {
  const customTags = getCustomTags(headline);

  expect(customTags.sort()).toEqual(expectedTags.sort());
});

it.each`
  headline                                                            | expectedTags
  ${'Bottlerocket announces new ECS-optimized AMI'}                   | ${['bottlerocket']}
  ${'The Bottlerocket AMI for Amazon ECS is now Generally Available'} | ${['bottlerocket']}
  ${'Bottlerocket now supports network bonding and VLAN tagging'}     | ${['bottlerocket', 'tagging']}
`('returns expected custom tags given a headline', ({headline, expectedTags}) => {
  const customTags = getCustomTags(headline);

  expect(customTags.sort()).toEqual(expectedTags.sort());
});

it.each`
  headline                                                                         | expectedTags
  ${'New FreeRTOS Long Term Support version released'}                             | ${['free-rtos']}
  ${'Introducing more flexible AWS Device Qualification Program for FreeRTOS'}     | ${['free-rtos']}
  ${'Announcing a simplified FreeRTOS out-of-box AWS IoT connectivity experience'} | ${['free-rtos']}
`('returns expected custom tags given a headline', ({headline, expectedTags}) => {
  const customTags = getCustomTags(headline);

  expect(customTags.sort()).toEqual(expectedTags.sort());
});

// quick start
// solutions
// consulting
// sap
