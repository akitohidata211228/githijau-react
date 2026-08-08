// MultiplicationTable12.jsx
// Tabel perkalian 12.

import React from 'react';

export default function MultiplicationTable12() {
    const rows = [];
    for (let i = 1; i <= 10; i++) {
        rows.push(<li key={i}>{12} x {i} = {12 * i}</li>);
    }
    return <ul>{rows}</ul>;
}
