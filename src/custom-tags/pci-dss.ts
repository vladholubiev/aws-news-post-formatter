export default [
  {
    headlineIncludes: [
      ' PCI DSS Level 1 ',
      ' now PCI compliant',
      'PCI Compliance',
      'PCI DSS Certification',
      'PCI DSS Compliance',
      'PCI DSS compliant',
    ],
    headlineMatches: [
      /Compliance .+ PCI.DSS/,
      /Now .* PCI Eligible/i,
      /PCI.DSS .* Architecture/,
      /PCI.DSS \d\.\d/,
      /PCI.DSS \d\.\d\.\d/,
      /PCI.DSS certif.+/i,
      /PCI.DSS v\d\.\d\.\d/,
      /Regulated By .* PCI,/i,
      /supports .* PCI DSS workloads/i,
      /workloads subject to.*PCI DSS/i,
    ],
  },
];
