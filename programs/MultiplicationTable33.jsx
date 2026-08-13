// MultiplicationTable33.jsx
// Tabel perkalian 33.

import React from 'react';

export default function MultiplicationTable33() {
    const rows = [];
    for (let i = 1; i <= 10; i++) {
        rows.push(<li key={i}>{33} x {i} = {33 * i}</li>);
    }
    return <ul>{rows}</ul>;
}
