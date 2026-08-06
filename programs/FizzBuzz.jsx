// FizzBuzz.jsx
// Render FizzBuzz 1-30 sebagai daftar.

import React from 'react';

export default function FizzBuzz() {
    const items = [];
    for (let i = 1; i <= 30; i++) {
        if (i % 15 === 0) items.push('FizzBuzz');
        else if (i % 3 === 0) items.push('Fizz');
        else if (i % 5 === 0) items.push('Buzz');
        else items.push(String(i));
    }
    return (
        <ul>
            {items.map((it, idx) => (
                <li key={idx}>{it}</li>
            ))}
        </ul>
    );
}
