// MultiplicationTable47.jsx
// Tabel perkalian 47.

import React from 'react';

export default function MultiplicationTable47() {
    const rows = [];
    for (let i = 1; i <= 10; i++) {
        rows.push(<li key={i}>{47} x {i} = {47 * i}</li>);
    }
    return <ul>{rows}</ul>;
}
