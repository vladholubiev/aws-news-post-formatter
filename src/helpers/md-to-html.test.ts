import {RAW_DATA} from '../test-data-raw';
import {htmlToMd} from './html-to-md';
import {mdToHTML} from './md-to-html';
import {normalizeHTML} from './html-normalize';

it('should convert markdown to html', () => {
  const html = RAW_DATA[0].post_body;
  const md = htmlToMd(html);
  const htmlFromMd = mdToHTML(md);

  expect(htmlFromMd).toMatchInlineSnapshot(`
    "<p>Starting today, Amazon EC2 M5, M5a, M5d, R5, R5a, and R5d instances will be available in new 8xlarge and 16xlarge sizes. The specifications for the new sizes are in the tables below. With these new instance sizes, customers who are currently using either m4.10xlarge, m4.16xlarge, r4.8xlarge, or r4.16xlarge now have an easy upgrade path to the latest generation of instances. </p>
    <table>
    <thead>
    <tr>
    <th><strong>Size</strong></th>
    <th><strong>vCPUs</strong></th>
    <th><strong>Memory</strong> <strong>(GiB)</strong></th>
    <th><strong>Storage (GB)</strong></th>
    <th><strong>EBS-Optimized Bandwidth (Gbps)</strong></th>
    <th><strong>Network Bandwidth (Gbps)</strong></th>
    </tr>
    </thead>
    <tbody>
    <tr>
    <td>m5.8xlarge</td>
    <td>32</td>
    <td>128</td>
    <td>EBS Only</td>
    <td>5</td>
    <td>10</td>
    </tr>
    <tr>
    <td>m5a.8xlarge</td>
    <td>32</td>
    <td>128</td>
    <td>EBS Only</td>
    <td>3.5</td>
    <td>Up to 10</td>
    </tr>
    <tr>
    <td>m5d.8xlarge</td>
    <td>32</td>
    <td>128</td>
    <td>2 x 600 NVMe SSD</td>
    <td>5</td>
    <td>10</td>
    </tr>
    <tr>
    <td>m5.16xlarge</td>
    <td>64</td>
    <td>256</td>
    <td>EBS Only</td>
    <td>10</td>
    <td>20</td>
    </tr>
    <tr>
    <td>m5a.16xlarge</td>
    <td>64</td>
    <td>256</td>
    <td>EBS Only</td>
    <td>7</td>
    <td>12</td>
    </tr>
    <tr>
    <td>m5d.16xlarge</td>
    <td>64</td>
    <td>256</td>
    <td>4 x 600 NVMe SSD</td>
    <td>10</td>
    <td>20</td>
    </tr>
    </tbody>
    </table>
    <p><a href="https://aws.amazon.com/ec2/instance-types/m5/">M5, M5a, and M5d instances</a> are general purpose instances and are ideal for business-critical applications, web and application servers, back-end servers for enterprise applications, gaming servers, caching fleets, and app development environments.</p>
    <table>
    <thead>
    <tr>
    <th><strong>Size</strong></th>
    <th><strong>vCPUs</strong></th>
    <th><strong>Memory</strong> <strong>(GiB)</strong></th>
    <th><strong>Storage (GB)</strong></th>
    <th><strong>EBS-Optimized Bandwidth (Gbps)</strong></th>
    <th><strong>Network Bandwidth (Gbps)</strong></th>
    </tr>
    </thead>
    <tbody>
    <tr>
    <td>r5.8xlarge</td>
    <td>32</td>
    <td>256</td>
    <td>EBS Only</td>
    <td>5</td>
    <td>10</td>
    </tr>
    <tr>
    <td>r5a.8xlarge</td>
    <td>32</td>
    <td>256</td>
    <td>EBS Only</td>
    <td>3.5</td>
    <td>Up to 10</td>
    </tr>
    <tr>
    <td>r5d.8xlarge</td>
    <td>32</td>
    <td>256</td>
    <td>2 x 600 NVMe SSD</td>
    <td>5</td>
    <td>10</td>
    </tr>
    <tr>
    <td>r5.16xlarge</td>
    <td>64</td>
    <td>512</td>
    <td>EBS Only</td>
    <td>10</td>
    <td>20</td>
    </tr>
    <tr>
    <td>r5a.16xlarge</td>
    <td>64</td>
    <td>512</td>
    <td>EBS Only</td>
    <td>7</td>
    <td>12</td>
    </tr>
    <tr>
    <td>r5d.16xlarge</td>
    <td>64</td>
    <td>512</td>
    <td>4 x 600 NVMe SSD</td>
    <td>10</td>
    <td>20</td>
    </tr>
    </tbody>
    </table>
    <p><a href="https://aws.amazon.com/ec2/instance-types/r5/">R5, R5a, and R5d instances</a> are memory optimized instances and are ideal for high performance databases, distributed web scale in-memory caches, mid-size in-memory databases, real time big data analytics, and other enterprise applications.</p>
    <p>M5, M5a, M5d, R5, R5a, and R5d instances are now available in 8 sizes, with 2, 4, 8, 16, 32, 48, 64, and 96 vCPUs and can be purchased as On-Demand, Reserved or Spot Instances. These instances are available in all the AWS Regions where the existing sizes are already available.  </p>
    <p>To get started, visit the <a href="https://console.aws.amazon.com/">AWS Management Console</a>, <a href="https://aws.amazon.com/cli/">AWS Command Line Interface (CLI)</a>, and <a href="http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/EC2.html">AWS SDKs</a>. To learn more, visit the <a href="https://aws.amazon.com/ec2/instance-types/m5/">Amazon EC2 M5 instance page</a> or the <a href="https://aws.amazon.com/ec2/instance-types/r5/">Amazon EC2 R5 instance page</a>.</p>"
  `);
});

it('should convert complex markdown to html', () => {
  const html = RAW_DATA[62].post_body;
  const md = htmlToMd(normalizeHTML(html));
  const htmlFromMd = mdToHTML(md);

  expect(md).toMatchInlineSnapshot(`
    "AWS Launch Wizard now allows customers to deploy SAP workloads using Red Hat Enterprise Linux Version 8.1\\. 

    AWS Launch Wizard offers a guided way of sizing, configuring, and deploying AWS resources for SAP HANA and SAP HANA-based Netweaver systems with a purpose built, easy to use wizard. 

    On-boarding a new operating system version for an SAP application involves close collaboration between SAP and Operating System (OS) teams, who analyze SAP notes, configure the system, and test extensively before standardizing on the new OS. AWS Launch Wizard eliminates this heavy lifting. You select the OS you want to use from a dropdown menu, and it automatically creates a pre-configured environment aligned with AWS and SAP best practices. 

    Configuring RHEL 8.1 for SAP workloads manually requires several additional steps compared to RHEL 7, including installation of basic OS packages, C-shell, and SAP HANA High Availability cluster configuration commands. With AWS Launch Wizard, these tasks are automated, simplifying configuration and reducing time to deployment.  

    The following table shows the operating systems currently supported for different SAP components by AWS Launch Wizard:  

    AWS Launch Wizard supports multiple deployment patterns, provides AWS resource recommendations, and is integrated with AWS compute, storage, management, logging, monitoring, and security services. It frees up employee/partner resources from undifferentiated infrastructure build activities so they can focus on differentiating business process design and implementation activities. 

    To learn more about using AWS Launch Wizard to accelerate your SAP deployments, visit the [Launch Wizard page](https://aws.amazon.com/launchwizard), [FAQ](https://aws.amazon.com/launchwizard/faq), and [overview documentation](https://docs.aws.amazon.com/launchwizard/latest/userguide/launch-wizard-sap.html).

      
    ****Operating system version**

    **Single-Instance deployment**

      
    ****ASCS**

      
    ****ERS**

      
    ****PAS**

      
    ****SAP HANA database**

      
    ****SAP HANA database in HA cluster**

    Red-Hat-Enterprise-Linux-8.1-For-SAP-HA-US-HVM

    ✓

    ✓

    ✓

    ✓

    ✓

    ✓

    SuSE-Linux-12-SP5-For-SAP-HVM

    ✓

    ✓

    ✓

    ✓

    ✓

    ✓

    SuSE-Linux-12-SP5-For-SAP-BYOS-HVM

    ✓

    ✓

    ✓

    ✓

    ✓

    ✓

    SuSE-Linux-15-SP1-HVM

    ✓

    ✓

    ✓

    SuSE-Linux-15-SP1-For-SAP-HVM

    ✓

    ✓

    ✓

    ✓

    ✓

    ✓

    SuSE-Linux-15-SP1-For-SAP-BYOS-HVM

    ✓

    ✓

    ✓

    ✓

    ✓

    ✓

    Red-Hat-Enterprise-Linux-7.6-For-SAP-HA-US-HVM

    ✓

    ✓

    ✓

    ✓

    ✓

    ✓

    Red-Hat-Enterprise-Linux-8.1-For-SAP-HA-US-HVM

    SuSE-Linux-15-HVM

    ✓

    ✓

    ✓

    SuSE-Linux-15-For-SAP-HVM

    ✓

    ✓

    ✓

    ✓

    ✓

    ✓

    SuSE-Linux-15-For-SAP-BYOS-HVM

    ✓

    ✓

    ✓

    ✓

    ✓

    ✓

    SuSE-Linux-12-SP4-HVM

    ✓

    ✓

    ✓

    SuSE-Linux-12-SP4-For-SAP-HVM

    ✓

    ✓

    ✓

    ✓

    ✓

    ✓

    SuSE-Linux-12-SP4-For-SAP-BYOS-HVM

    ✓

    ✓

    ✓

    ✓

    ✓

    ✓

    SuSE-Linux-12-SP5-HVM

    ✓

    ✓

    ✓"
  `);

  expect(htmlFromMd).toMatchInlineSnapshot(`
    "<p>AWS Launch Wizard now allows customers to deploy SAP workloads using Red Hat Enterprise Linux Version 8.1. </p>
    <p>AWS Launch Wizard offers a guided way of sizing, configuring, and deploying AWS resources for SAP HANA and SAP HANA-based Netweaver systems with a purpose built, easy to use wizard. </p>
    <p>On-boarding a new operating system version for an SAP application involves close collaboration between SAP and Operating System (OS) teams, who analyze SAP notes, configure the system, and test extensively before standardizing on the new OS. AWS Launch Wizard eliminates this heavy lifting. You select the OS you want to use from a dropdown menu, and it automatically creates a pre-configured environment aligned with AWS and SAP best practices. </p>
    <p>Configuring RHEL 8.1 for SAP workloads manually requires several additional steps compared to RHEL 7, including installation of basic OS packages, C-shell, and SAP HANA High Availability cluster configuration commands. With AWS Launch Wizard, these tasks are automated, simplifying configuration and reducing time to deployment.  </p>
    <p>The following table shows the operating systems currently supported for different SAP components by AWS Launch Wizard:  </p>
    <p>AWS Launch Wizard supports multiple deployment patterns, provides AWS resource recommendations, and is integrated with AWS compute, storage, management, logging, monitoring, and security services. It frees up employee/partner resources from undifferentiated infrastructure build activities so they can focus on differentiating business process design and implementation activities. </p>
    <p>To learn more about using AWS Launch Wizard to accelerate your SAP deployments, visit the <a href="https://aws.amazon.com/launchwizard">Launch Wizard page</a>, <a href="https://aws.amazon.com/launchwizard/faq">FAQ</a>, and <a href="https://docs.aws.amazon.com/launchwizard/latest/userguide/launch-wizard-sap.html">overview documentation</a>.</p>
    <p><strong>**Operating system version</strong></p>
    <p><strong>Single-Instance deployment</strong></p>
    <p><strong>**ASCS</strong></p>
    <p><strong>**ERS</strong></p>
    <p><strong>**PAS</strong></p>
    <p><strong>**SAP HANA database</strong></p>
    <p><strong>**SAP HANA database in HA cluster</strong></p>
    <p>Red-Hat-Enterprise-Linux-8.1-For-SAP-HA-US-HVM</p>
    <p>✓</p>
    <p>✓</p>
    <p>✓</p>
    <p>✓</p>
    <p>✓</p>
    <p>✓</p>
    <p>SuSE-Linux-12-SP5-For-SAP-HVM</p>
    <p>✓</p>
    <p>✓</p>
    <p>✓</p>
    <p>✓</p>
    <p>✓</p>
    <p>✓</p>
    <p>SuSE-Linux-12-SP5-For-SAP-BYOS-HVM</p>
    <p>✓</p>
    <p>✓</p>
    <p>✓</p>
    <p>✓</p>
    <p>✓</p>
    <p>✓</p>
    <p>SuSE-Linux-15-SP1-HVM</p>
    <p>✓</p>
    <p>✓</p>
    <p>✓</p>
    <p>SuSE-Linux-15-SP1-For-SAP-HVM</p>
    <p>✓</p>
    <p>✓</p>
    <p>✓</p>
    <p>✓</p>
    <p>✓</p>
    <p>✓</p>
    <p>SuSE-Linux-15-SP1-For-SAP-BYOS-HVM</p>
    <p>✓</p>
    <p>✓</p>
    <p>✓</p>
    <p>✓</p>
    <p>✓</p>
    <p>✓</p>
    <p>Red-Hat-Enterprise-Linux-7.6-For-SAP-HA-US-HVM</p>
    <p>✓</p>
    <p>✓</p>
    <p>✓</p>
    <p>✓</p>
    <p>✓</p>
    <p>✓</p>
    <p>Red-Hat-Enterprise-Linux-8.1-For-SAP-HA-US-HVM</p>
    <p>SuSE-Linux-15-HVM</p>
    <p>✓</p>
    <p>✓</p>
    <p>✓</p>
    <p>SuSE-Linux-15-For-SAP-HVM</p>
    <p>✓</p>
    <p>✓</p>
    <p>✓</p>
    <p>✓</p>
    <p>✓</p>
    <p>✓</p>
    <p>SuSE-Linux-15-For-SAP-BYOS-HVM</p>
    <p>✓</p>
    <p>✓</p>
    <p>✓</p>
    <p>✓</p>
    <p>✓</p>
    <p>✓</p>
    <p>SuSE-Linux-12-SP4-HVM</p>
    <p>✓</p>
    <p>✓</p>
    <p>✓</p>
    <p>SuSE-Linux-12-SP4-For-SAP-HVM</p>
    <p>✓</p>
    <p>✓</p>
    <p>✓</p>
    <p>✓</p>
    <p>✓</p>
    <p>✓</p>
    <p>SuSE-Linux-12-SP4-For-SAP-BYOS-HVM</p>
    <p>✓</p>
    <p>✓</p>
    <p>✓</p>
    <p>✓</p>
    <p>✓</p>
    <p>✓</p>
    <p>SuSE-Linux-12-SP5-HVM</p>
    <p>✓</p>
    <p>✓</p>
    <p>✓</p>"
  `);
});
