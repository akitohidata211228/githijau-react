// MultiplicationTable38.jsx
// Tabel perkalian 38.

import React from 'react';

export default function MultiplicationTable38() {
    const rows = [];
    for (let i = 1; i <= 10; i++) {
        rows.push(<li key={i}>{38} x {i} = {38 * i}</li>);
    }
    return <ul>{rows}</ul>;
}
