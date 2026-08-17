// MultiplicationTable63.jsx
// Tabel perkalian 63.

import React from 'react';

export default function MultiplicationTable63() {
    const rows = [];
    for (let i = 1; i <= 10; i++) {
        rows.push(<li key={i}>{63} x {i} = {63 * i}</li>);
    }
    return <ul>{rows}</ul>;
}
