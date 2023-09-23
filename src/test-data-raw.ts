import rawDataJSON from './test-data-raw.test.json';

type RawData = {
  post_body: string;
  size: number;
};

export const RAW_DATA = rawDataJSON as RawData[];
