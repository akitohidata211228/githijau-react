// MultiplicationTable78.jsx
// Tabel perkalian 78.

import React from 'react';

export default function MultiplicationTable78() {
    const rows = [];
    for (let i = 1; i <= 10; i++) {
        rows.push(<li key={i}>{78} x {i} = {78 * i}</li>);
    }
    return <ul>{rows}</ul>;
}
