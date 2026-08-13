// MultiplicationTable32.jsx
// Tabel perkalian 32.

import React from 'react';

export default function MultiplicationTable32() {
    const rows = [];
    for (let i = 1; i <= 10; i++) {
        rows.push(<li key={i}>{32} x {i} = {32 * i}</li>);
    }
    return <ul>{rows}</ul>;
}
