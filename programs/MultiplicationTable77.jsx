// MultiplicationTable77.jsx
// Tabel perkalian 77.

import React from 'react';

export default function MultiplicationTable77() {
    const rows = [];
    for (let i = 1; i <= 10; i++) {
        rows.push(<li key={i}>{77} x {i} = {77 * i}</li>);
    }
    return <ul>{rows}</ul>;
}
