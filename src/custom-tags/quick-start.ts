export default [
  {
    headlineIncludes: [
      'New Quick Start',
      'New Quick Start: ',
      'Quick Start Reference Deployment',
      'Quick Start Update: ',
      'Updated Quick Start',
      'AWS Quick Start',
      'Quick Start for',
      'Quick Start Update',
    ],
    headlineMatches: [
      /with New Quick Start$/i,
      /New Quick Starts? deploys?/i,
      /Adds Quick Starts? for/,
      /AWS Quick Starts? for/,
      /New Quick Start$/i,
      /New .+ Quick Start/i,
    ],
  },
];
