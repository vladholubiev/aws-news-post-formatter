export default [
  {
    headlineIncludes: ['FedRAMP authorized', 'FedRAMP℠', 'FedRAMP Launchpad'],
    headlineMatches: [
      /authorized.+FedRAMP/,
      /FedRAMP complia.+/i,
      /FedRAMP.High complia.+/i,
      /FedRAMP.High baseline.+/i,
      /FedRAMP.Moderate baseline.+/i,
      /FedRAMP.Moderate complia.+/i,
      /FedRAMP.High Authorization/i,
      /FedRAMP.Moderate Authorization/i,
      /FedRAMP.High Authority/i,
      /FedRAMP.Moderate Authority/i,
    ],
  },
];
