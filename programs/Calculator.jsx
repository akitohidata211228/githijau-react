// Calculator.jsx
// Kalkulator dua angka sederhana.

import React, { useState } from 'react';

export default function Calculator() {
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const [op, setOp] = useState('+');

    let result;
    if (op === '+') result = a + b;
    else if (op === '-') result = a - b;
    else if (op === '*') result = a * b;
    else result = b !== 0 ? a / b : 'Error';

    return (
        <div>
            <input type="number" value={a} onChange={(e) => setA(Number(e.target.value))} />
            <select value={op} onChange={(e) => setOp(e.target.value)}>
                <option>+</option><option>-</option><option>*</option><option>/</option>
            </select>
            <input type="number" value={b} onChange={(e) => setB(Number(e.target.value))} />
            <p>Hasil: {result}</p>
        </div>
    );
}
