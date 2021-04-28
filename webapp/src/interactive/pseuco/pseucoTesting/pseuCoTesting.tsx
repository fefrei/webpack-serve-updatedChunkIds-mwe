import React from 'react';
import { PseuCoDebugger } from '../../../debugger/PseuCoDebugger';

const PseuCoTesting: React.FC = () => {
    // ↓ this is unused, but needed to tickle Webpack in the right way
    const worker = new Worker(new URL('./worker.ts', import.meta.url));

    // ↓ uncomment this to trigger the bug
    // return <PseuCoDebugger />;
    // ↑ uncomment this to trigger the bug

    return null;
};

export default PseuCoTesting;
