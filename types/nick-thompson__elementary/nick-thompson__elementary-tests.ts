import * as suites from './tests/suites';
import { onCoreLoad } from './tests/load.js';
import { end } from './tests/tester.js';

onCoreLoad(
  ...Object.keys(suites).map(k => suites[k as keyof typeof suites]),
  () => end('Everything is looking good!'),
);
