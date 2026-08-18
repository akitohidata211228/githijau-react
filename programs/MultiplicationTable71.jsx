// MultiplicationTable71.jsx
// Tabel perkalian 71.

import React from 'react';

export default function MultiplicationTable71() {
    const rows = [];
    for (let i = 1; i <= 10; i++) {
        rows.push(<li key={i}>{71} x {i} = {71 * i}</li>);
    }
    return <ul>{rows}</ul>;
}
