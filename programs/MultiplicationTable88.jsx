// MultiplicationTable88.jsx
// Tabel perkalian 88.

import React from 'react';

export default function MultiplicationTable88() {
    const rows = [];
    for (let i = 1; i <= 10; i++) {
        rows.push(<li key={i}>{88} x {i} = {88 * i}</li>);
    }
    return <ul>{rows}</ul>;
}
