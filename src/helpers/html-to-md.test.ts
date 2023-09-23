import {RAW_DATA} from '../test-data-raw';
import {htmlToMd} from './html-to-md';

it('should convert raw html to markdown', () => {
  const html = RAW_DATA[0].post_body;
  const md = htmlToMd(html);

  expect(md).toMatchInlineSnapshot(`
    "Starting today, Amazon EC2 M5, M5a, M5d, R5, R5a, and R5d instances will be available in new 8xlarge and 16xlarge sizes. The specifications for the new sizes are in the tables below. With these new instance sizes, customers who are currently using either m4.10xlarge, m4.16xlarge, r4.8xlarge, or r4.16xlarge now have an easy upgrade path to the latest generation of instances. 

    | **Size**     | **vCPUs** | **Memory** **(GiB)** | **Storage (GB)** | **EBS-Optimized Bandwidth (Gbps)** | **Network Bandwidth (Gbps)** |
    | ------------ | --------- | -------------------- | ---------------- | ---------------------------------- | ---------------------------- |
    | m5.8xlarge   | 32        | 128                  | EBS Only         | 5                                  | 10                           |
    | m5a.8xlarge  | 32        | 128                  | EBS Only         | 3.5                                | Up to 10                     |
    | m5d.8xlarge  | 32        | 128                  | 2 x 600 NVMe SSD | 5                                  | 10                           |
    | m5.16xlarge  | 64        | 256                  | EBS Only         | 10                                 | 20                           |
    | m5a.16xlarge | 64        | 256                  | EBS Only         | 7                                  | 12                           |
    | m5d.16xlarge | 64        | 256                  | 4 x 600 NVMe SSD | 10                                 | 20                           |

    [M5, M5a, and M5d instances](https://aws.amazon.com/ec2/instance-types/m5/) are general purpose instances and are ideal for business-critical applications, web and application servers, back-end servers for enterprise applications, gaming servers, caching fleets, and app development environments.

    | **Size**     | **vCPUs** | **Memory** **(GiB)** | **Storage (GB)** | **EBS-Optimized Bandwidth (Gbps)** | **Network Bandwidth (Gbps)** |
    | ------------ | --------- | -------------------- | ---------------- | ---------------------------------- | ---------------------------- |
    | r5.8xlarge   | 32        | 256                  | EBS Only         | 5                                  | 10                           |
    | r5a.8xlarge  | 32        | 256                  | EBS Only         | 3.5                                | Up to 10                     |
    | r5d.8xlarge  | 32        | 256                  | 2 x 600 NVMe SSD | 5                                  | 10                           |
    | r5.16xlarge  | 64        | 512                  | EBS Only         | 10                                 | 20                           |
    | r5a.16xlarge | 64        | 512                  | EBS Only         | 7                                  | 12                           |
    | r5d.16xlarge | 64        | 512                  | 4 x 600 NVMe SSD | 10                                 | 20                           |

    [R5, R5a, and R5d instances](https://aws.amazon.com/ec2/instance-types/r5/) are memory optimized instances and are ideal for high performance databases, distributed web scale in-memory caches, mid-size in-memory databases, real time big data analytics, and other enterprise applications.

    M5, M5a, M5d, R5, R5a, and R5d instances are now available in 8 sizes, with 2, 4, 8, 16, 32, 48, 64, and 96 vCPUs and can be purchased as On-Demand, Reserved or Spot Instances. These instances are available in all the AWS Regions where the existing sizes are already available.  

    To get started, visit the [AWS Management Console](https://console.aws.amazon.com/), [AWS Command Line Interface (CLI)](https://aws.amazon.com/cli/), and [AWS SDKs](http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/EC2.html). To learn more, visit the [Amazon EC2 M5 instance page](https://aws.amazon.com/ec2/instance-types/m5/) or the [Amazon EC2 R5 instance page](https://aws.amazon.com/ec2/instance-types/r5/)."
  `);
});

it('should convert complex html to markdown', () => {
  const html = RAW_DATA[62].post_body;
  const md = htmlToMd(html);

  expect(md).toMatchInlineSnapshot(`
    "AWS Launch Wizard now allows customers to deploy SAP workloads using Red Hat Enterprise Linux Version 8.1\\. 

    AWS Launch Wizard offers a guided way of sizing, configuring, and deploying AWS resources for SAP HANA and SAP HANA-based Netweaver systems with a purpose built, easy to use wizard. 

    On-boarding a new operating system version for an SAP application involves close collaboration between SAP and Operating System (OS) teams, who analyze SAP notes, configure the system, and test extensively before standardizing on the new OS. AWS Launch Wizard eliminates this heavy lifting. You select the OS you want to use from a dropdown menu, and it automatically creates a pre-configured environment aligned with AWS and SAP best practices. 

    Configuring RHEL 8.1 for SAP workloads manually requires several additional steps compared to RHEL 7, including installation of basic OS packages, C-shell, and SAP HANA High Availability cluster configuration commands. With AWS Launch Wizard, these tasks are automated, simplifying configuration and reducing time to deployment.  

    The following table shows the operating systems currently supported for different SAP components by AWS Launch Wizard:   

    AWS Launch Wizard supports multiple deployment patterns, provides AWS resource recommendations, and is integrated with AWS compute, storage, management, logging, monitoring, and security services. It frees up employee/partner resources from undifferentiated infrastructure build activities so they can focus on differentiating business process design and implementation activities. 

    To learn more about using AWS Launch Wizard to accelerate your SAP deployments, visit the [Launch Wizard page](/content/aws.amazon.com/live/en%5FUS/launchwizard.html), [FAQ](/content/aws.amazon.com/live/en%5FUS/launchwizard/faq.html), and [overview documentation](https://docs.aws.amazon.com/launchwizard/latest/userguide/launch-wizard-sap.html).

    | ****Operating system version**                 | **Single-Instance deployment** | ****ASCS** | ****ERS** | ****PAS** | ****SAP HANA database** | ****SAP HANA database in HA cluster** |
    | ---------------------------------------------- | ------------------------------ | ---------- | --------- | --------- | ----------------------- | ------------------------------------- |
    | Red-Hat-Enterprise-Linux-8.1-For-SAP-HA-US-HVM | ✓                              | ✓          | ✓         | ✓         | ✓                       | ✓                                     |
    | SuSE-Linux-12-SP5-For-SAP-HVM                  | ✓                              | ✓          | ✓         | ✓         | ✓                       | ✓                                     |
    | SuSE-Linux-12-SP5-For-SAP-BYOS-HVM             | ✓                              | ✓          | ✓         | ✓         | ✓                       | ✓                                     |
    | SuSE-Linux-15-SP1-HVM                          | ✓                              |            |           | ✓         | ✓                       |                                       |
    | SuSE-Linux-15-SP1-For-SAP-HVM                  | ✓                              | ✓          | ✓         | ✓         | ✓                       | ✓                                     |
    | SuSE-Linux-15-SP1-For-SAP-BYOS-HVM             | ✓                              | ✓          | ✓         | ✓         | ✓                       | ✓                                     |
    | Red-Hat-Enterprise-Linux-7.6-For-SAP-HA-US-HVM | ✓                              | ✓          | ✓         | ✓         | ✓                       | ✓                                     |
    | Red-Hat-Enterprise-Linux-8.1-For-SAP-HA-US-HVM |                                |            |           |           |                         |                                       |
    | SuSE-Linux-15-HVM                              | ✓                              |            |           | ✓         | ✓                       |                                       |
    | SuSE-Linux-15-For-SAP-HVM                      | ✓                              | ✓          | ✓         | ✓         | ✓                       | ✓                                     |
    | SuSE-Linux-15-For-SAP-BYOS-HVM                 | ✓                              | ✓          | ✓         | ✓         | ✓                       | ✓                                     |
    | SuSE-Linux-12-SP4-HVM                          | ✓                              |            |           | ✓         | ✓                       |                                       |
    | SuSE-Linux-12-SP4-For-SAP-HVM                  | ✓                              | ✓          | ✓         | ✓         | ✓                       | ✓                                     |
    | SuSE-Linux-12-SP4-For-SAP-BYOS-HVM             | ✓                              | ✓          | ✓         | ✓         | ✓                       | ✓                                     |
    | SuSE-Linux-12-SP5-HVM                          | ✓                              |            |           | ✓         | ✓                       |                                       |"
  `);
});
