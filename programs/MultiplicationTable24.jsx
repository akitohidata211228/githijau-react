// MultiplicationTable24.jsx
// Tabel perkalian 24.

import React from 'react';

export default function MultiplicationTable24() {
    const rows = [];
    for (let i = 1; i <= 10; i++) {
        rows.push(<li key={i}>{24} x {i} = {24 * i}</li>);
    }
    return <ul>{rows}</ul>;
}
