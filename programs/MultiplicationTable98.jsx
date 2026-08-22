// MultiplicationTable98.jsx
// Tabel perkalian 98.

import React from 'react';

export default function MultiplicationTable98() {
    const rows = [];
    for (let i = 1; i <= 10; i++) {
        rows.push(<li key={i}>{98} x {i} = {98 * i}</li>);
    }
    return <ul>{rows}</ul>;
}
