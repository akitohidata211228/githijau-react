// MultiplicationTable68.jsx
// Tabel perkalian 68.

import React from 'react';

export default function MultiplicationTable68() {
    const rows = [];
    for (let i = 1; i <= 10; i++) {
        rows.push(<li key={i}>{68} x {i} = {68 * i}</li>);
    }
    return <ul>{rows}</ul>;
}
