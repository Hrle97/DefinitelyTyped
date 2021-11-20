import {
  onCoreLoad,
  testCore,
  testFactories,
  testNative,
  testBasics,
  testDelays,
  testFilters,
  testMath,
  testNoise,
  testOscillators,
  testSamples,
  testSignals,
} from './tests/tests.js';
import { flush } from './tests/tester.js';

onCoreLoad(
  testCore,
  testFactories,
  testNative,
  testBasics,
  testDelays,
  testFilters,
  testMath,
  testNoise,
  testOscillators,
  testSamples,
  testSignals,
  () => flush('Everything is looking good!'),
);
