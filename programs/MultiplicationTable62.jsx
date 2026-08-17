// MultiplicationTable62.jsx
// Tabel perkalian 62.

import React from 'react';

export default function MultiplicationTable62() {
    const rows = [];
    for (let i = 1; i <= 10; i++) {
        rows.push(<li key={i}>{62} x {i} = {62 * i}</li>);
    }
    return <ul>{rows}</ul>;
}
