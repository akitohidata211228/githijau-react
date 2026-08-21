// MultiplicationTable90.jsx
// Tabel perkalian 90.

import React from 'react';

export default function MultiplicationTable90() {
    const rows = [];
    for (let i = 1; i <= 10; i++) {
        rows.push(<li key={i}>{90} x {i} = {90 * i}</li>);
    }
    return <ul>{rows}</ul>;
}
