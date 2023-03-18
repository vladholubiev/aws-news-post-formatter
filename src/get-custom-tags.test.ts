import {getCustomTags} from './get-custom-tags';

it('should return hipaa tag', () => {
  const tags = getCustomTags('Amazon MSK Serverless is now HIPAA eligible');

  expect(tags).toEqual(['hipaa']);
});
