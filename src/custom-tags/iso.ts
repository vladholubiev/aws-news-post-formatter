export default [
  {
    headlineIncludes: ['Regulated By ISO,', 'in scope for AWS ISO '],
    headlineMatches: [
      /workloads subject to .* ISO.*/i,
      / ISO Compliant/,
      /achieves ISO .* compliance/,
      / ISO Compliance/i,
      /ISO.*9001/,
      /ISO.*27001/,
      /ISO.*27017/,
      /ISO.*27018/,
    ],
  },
];
