// MultiplicationTable28.jsx
// Tabel perkalian 28.

import React from 'react';

export default function MultiplicationTable28() {
    const rows = [];
    for (let i = 1; i <= 10; i++) {
        rows.push(<li key={i}>{28} x {i} = {28 * i}</li>);
    }
    return <ul>{rows}</ul>;
}
