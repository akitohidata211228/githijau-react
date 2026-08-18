// MultiplicationTable67.jsx
// Tabel perkalian 67.

import React from 'react';

export default function MultiplicationTable67() {
    const rows = [];
    for (let i = 1; i <= 10; i++) {
        rows.push(<li key={i}>{67} x {i} = {67 * i}</li>);
    }
    return <ul>{rows}</ul>;
}
