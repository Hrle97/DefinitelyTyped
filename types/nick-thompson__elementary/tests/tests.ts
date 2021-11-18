import { onCoreLoad } from './load.js';
import { testCore } from './suites/core.js';
import { testFactories } from './suites/factories.js';
import { testNative } from './suites/native.js';
import { testBasics } from './suites/basics.js';
import { testDelays } from './suites/delays.js';
import { testFilters } from './suites/filters.js';
import { testMath } from './suites/math.js';
import { testNoise } from './suites/noise.js';
import { testOscillators } from './suites/oscillators.js';
import { testSamples } from './suites/samples.js';
import { testSignals } from './suites/signals.js';

export {
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
};
