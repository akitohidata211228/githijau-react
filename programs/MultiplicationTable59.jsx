// MultiplicationTable59.jsx
// Tabel perkalian 59.

import React from 'react';

export default function MultiplicationTable59() {
    const rows = [];
    for (let i = 1; i <= 10; i++) {
        rows.push(<li key={i}>{59} x {i} = {59 * i}</li>);
    }
    return <ul>{rows}</ul>;
}
