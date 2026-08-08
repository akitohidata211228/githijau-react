// MultiplicationTable14.jsx
// Tabel perkalian 14.

import React from 'react';

export default function MultiplicationTable14() {
    const rows = [];
    for (let i = 1; i <= 10; i++) {
        rows.push(<li key={i}>{14} x {i} = {14 * i}</li>);
    }
    return <ul>{rows}</ul>;
}
