export default [
  {
    headlineIncludes: [
      ' SOC compliant',
      'Support for SOC Compliance',
      'in scope for AWS SOC ',
      'in scope for SOC Reports',
      ' SOC compliance ',
    ],
    headlineMatches: [
      /supports .* SOC /i,
      /supports .* SOC,/i,
      /SOC.*Compliant/,
      /achieves .* SOC compliance/,
      /Now SOC .* Eligible/i,
      /in scope for SOC \d.* compliance/,
      /in scope for SOC \d and SOC \d/,
      /SOC .*Compliance/,
      /now SOC \d.* compliant/i,
    ],
  },
];
