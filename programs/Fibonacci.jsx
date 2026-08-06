// Fibonacci.jsx
// Menampilkan 15 suku pertama Fibonacci.

import React from 'react';

function fib(n) {
    if (n <= 1) return n;
    return fib(n - 1) + fib(n - 2);
}

export default function Fibonacci() {
    const seq = Array.from({ length: 15 }, (_, i) => fib(i));
    return <p>Fibonacci: {seq.join(', ')}</p>;
}
