// MultiplicationTable40.jsx
// Tabel perkalian 40.

import React from 'react';

export default function MultiplicationTable40() {
    const rows = [];
    for (let i = 1; i <= 10; i++) {
        rows.push(<li key={i}>{40} x {i} = {40 * i}</li>);
    }
    return <ul>{rows}</ul>;
}
