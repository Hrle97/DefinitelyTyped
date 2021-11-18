import { expect } from '../tester.js';
import { el, ElementaryCallback } from '../load.js';

export const testNoise: ElementaryCallback = (
    core: el.Core,
    el: el.Elementary,
) => {
    const noise = el.noise({});
    expect(noise).isANode();

    const pinknoise = el.pinknoise({ key: 'myPinknoise' });
    expect(pinknoise).isANode();
    expect(pinknoise).hasNodeProps({ key: 'myPinknoise' });
    expect(pinknoise).hasNodeChildren();
};
