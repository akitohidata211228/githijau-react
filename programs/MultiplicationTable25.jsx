// MultiplicationTable25.jsx
// Tabel perkalian 25.

import React from 'react';

export default function MultiplicationTable25() {
    const rows = [];
    for (let i = 1; i <= 10; i++) {
        rows.push(<li key={i}>{25} x {i} = {25 * i}</li>);
    }
    return <ul>{rows}</ul>;
}
