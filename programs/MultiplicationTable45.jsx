// MultiplicationTable45.jsx
// Tabel perkalian 45.

import React from 'react';

export default function MultiplicationTable45() {
    const rows = [];
    for (let i = 1; i <= 10; i++) {
        rows.push(<li key={i}>{45} x {i} = {45 * i}</li>);
    }
    return <ul>{rows}</ul>;
}
