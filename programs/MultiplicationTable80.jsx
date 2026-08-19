// MultiplicationTable80.jsx
// Tabel perkalian 80.

import React from 'react';

export default function MultiplicationTable80() {
    const rows = [];
    for (let i = 1; i <= 10; i++) {
        rows.push(<li key={i}>{80} x {i} = {80 * i}</li>);
    }
    return <ul>{rows}</ul>;
}
