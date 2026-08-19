// MultiplicationTable75.jsx
// Tabel perkalian 75.

import React from 'react';

export default function MultiplicationTable75() {
    const rows = [];
    for (let i = 1; i <= 10; i++) {
        rows.push(<li key={i}>{75} x {i} = {75 * i}</li>);
    }
    return <ul>{rows}</ul>;
}
