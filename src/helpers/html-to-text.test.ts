import {RAW_DATA} from '../test-data-raw';
import {htmlToText} from './html-to-text';

it('should convert html to text', () => {
  const rawHTML = RAW_DATA[1].post_body;
  const text = htmlToText(rawHTML);

  expect(text).toMatchInlineSnapshot(`
    "We are excited to announce today that Amazon RDS is lowering prices globally for Single-AZ and Multi-AZ deployments. These price reductions follow a series of innovations we have launched recently (described later in this announcement).

    We have reduced the On-Demand prices by as much as 18% for MySQL and Oracle BYOL (Bring Your Own License) and 28% for SQL Server BYOL. All of your On-Demand usage will automatically be charged at the new and lower rates effective June 1, 2013.

    We have also reduced the Reserved Instance (RI) prices by as much as 27% for MySQL and Oracle BYOL. The new prices apply to Reserved Instance purchases made on or after June 11, 2013. With the new pricing, Reserved Instances will provide savings of up to 76% compared to On-Demand instances, so you may want to take this opportunity to review your usage and decide whether to purchase additional Reserved Instances to take advantage of these savings.

    For your quick reference, new On-Demand prices for an M1.Small DB instance, and Total Cost of Ownership (TCO) for an M2.Xlarge DB instance using a 3-Year Heavy Utilization RI are shown in the tables below:

    Table 1: Amazon RDS for MYSQL and Oracle BYOL On-Demand Single-AZ Deployment Prices for M1.Small DB Instance

    Region                          Old Price   New Price   Savings
    US East (Northern Virginia)     $0.090      $0.080      11%
    US West (Northern California)   $0.098      $0.085      13%
    US West (Oregon)                $0.090      $0.080      11%
    AWS GovCloud (US)               $0.110      $0.090      18%
    Europe (Ireland)                $0.098      $0.085      13%
    Asia Pacific (Singapore)        $0.115      $0.100      13%
    Asia Pacific (Tokyo)            $0.120      $0.110      8%
    Asia Pacific (Sydney)           $0.115      $0.100      13%
    South America (Sao Paulo)       $0.120      $0.100      17%


    Table 2: Amazon RDS for MYSQL and Oracle BYOL Single-AZ Deployment 3-Year TCO for M2.Xlarge DB Instance

    Region                          Old Price   New Price   Savings
    US East (Northern Virginia)     $4,441      $3,507      21%
    US West (Northern California)   $6,044      $4,410      27%
    US West (Oregon)                $4,441      $3,507      21%
    AWS GovCloud (US)               $4,835      $4,217      13%
    Europe (Ireland)                $6,044      $4,444      26%
    Asia Pacific (Singapore)        $6,044      $4,820      20%
    Asia Pacific (Tokyo)            $6,569      $5,129      22%
    Asia Pacific (Sydney)           $6,044      $4,820      20%
    South America (Sao Paulo)       $8,437      $6,517      23%


    To learn more about our new prices, please visit Amazon RDS Pricing.

    Not only do we constantly strive to drive costs down so as to pass those savings on to you, but we also innovate quickly with new features that enable your important use cases. Following is the list of a few key features:

     * Up to 30K of Provisioned IOPS to meet the performance needs of I/O-intensive, transactional (OLTP) database workloads.
     * Data encryption at-rest using Oracle's Transparent Data Encryption to satisfy enterprise security and compliance requirements.
     * Read-replica promotion to enable disaster recovery in the event the master is degraded.
     * Point-and-click access to database logs to facilitate troubleshooting of database issues.

    These features are used by many of our customers who run production workloads on RDS today. And, last week’s announcement of the RDS Service Level Agreement (SLA) for Multi-AZ database instances was designed to give you additional confidence to run the most demanding and mission critical workloads dependably on RDS."
  `);
});
