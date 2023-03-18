export default [
  {
    headlineIncludes: [
      'additional AWS regions',
      'region expansion',
      'regional expansion',
      'regional and feature expansion',
    ],
    headlineMatches: [
      /(amazon|aws).+in.+regions?/i,
      /(amazon|aws).+supports.+region/i,
      /AWS launch?(es)?.+region/i,
      /AWS.+launch.+region/i,
      /AZ in .+ Region/i,
      /Announcing the (new)? AWS .+ Region/i,
      /Announcing the (new)? .+ Region/i,
      /Announcing the AWS .+ Region/i,
      /Announcing the newly expanded AWS .+ Region/i,
      /announcing new regions?/i,
      /announcing.+availability zone.+regions?/i,
      /announcing.+additions.+region/i,
      /announcing the.+region/i,
      /Available in ?(the)? .+ Region/i,
      /adds.+(in|the|support|service).+regions?/i,
      /adds.+availability zones?/i,
      /available (for|in).+regions?/i,
      /available in (additional|new) regions?/i,
      /available in .+ (additional|new) regions?/i,
      /available in \d additional regions?/i,
      /available.+in.+AWS Regions?/i,
      /expands?.+to.+regions?/i,
      /introducing.+in.+regions?/i,
      /is now available in.+region/i,
      /launch?(es)?.+in.+region/i,
      /now available in \d additional regions/i,
      /now.+supported.+in.+regions?/i,
      /now uses.+regions/i,
    ],
  },
];
