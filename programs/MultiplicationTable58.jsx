// MultiplicationTable58.jsx
// Tabel perkalian 58.

import React from 'react';

export default function MultiplicationTable58() {
    const rows = [];
    for (let i = 1; i <= 10; i++) {
        rows.push(<li key={i}>{58} x {i} = {58 * i}</li>);
    }
    return <ul>{rows}</ul>;
}
