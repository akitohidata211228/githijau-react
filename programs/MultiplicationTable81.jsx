// MultiplicationTable81.jsx
// Tabel perkalian 81.

import React from 'react';

export default function MultiplicationTable81() {
    const rows = [];
    for (let i = 1; i <= 10; i++) {
        rows.push(<li key={i}>{81} x {i} = {81 * i}</li>);
    }
    return <ul>{rows}</ul>;
}
