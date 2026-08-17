// MultiplicationTable57.jsx
// Tabel perkalian 57.

import React from 'react';

export default function MultiplicationTable57() {
    const rows = [];
    for (let i = 1; i <= 10; i++) {
        rows.push(<li key={i}>{57} x {i} = {57 * i}</li>);
    }
    return <ul>{rows}</ul>;
}
