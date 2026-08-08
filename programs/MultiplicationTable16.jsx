// MultiplicationTable16.jsx
// Tabel perkalian 16.

import React from 'react';

export default function MultiplicationTable16() {
    const rows = [];
    for (let i = 1; i <= 10; i++) {
        rows.push(<li key={i}>{16} x {i} = {16 * i}</li>);
    }
    return <ul>{rows}</ul>;
}
