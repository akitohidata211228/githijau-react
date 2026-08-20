// MultiplicationTable83.jsx
// Tabel perkalian 83.

import React from 'react';

export default function MultiplicationTable83() {
    const rows = [];
    for (let i = 1; i <= 10; i++) {
        rows.push(<li key={i}>{83} x {i} = {83 * i}</li>);
    }
    return <ul>{rows}</ul>;
}
