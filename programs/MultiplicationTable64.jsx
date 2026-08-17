// MultiplicationTable64.jsx
// Tabel perkalian 64.

import React from 'react';

export default function MultiplicationTable64() {
    const rows = [];
    for (let i = 1; i <= 10; i++) {
        rows.push(<li key={i}>{64} x {i} = {64 * i}</li>);
    }
    return <ul>{rows}</ul>;
}
