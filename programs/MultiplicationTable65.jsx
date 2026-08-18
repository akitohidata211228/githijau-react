// MultiplicationTable65.jsx
// Tabel perkalian 65.

import React from 'react';

export default function MultiplicationTable65() {
    const rows = [];
    for (let i = 1; i <= 10; i++) {
        rows.push(<li key={i}>{65} x {i} = {65 * i}</li>);
    }
    return <ul>{rows}</ul>;
}
