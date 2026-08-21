// MultiplicationTable89.jsx
// Tabel perkalian 89.

import React from 'react';

export default function MultiplicationTable89() {
    const rows = [];
    for (let i = 1; i <= 10; i++) {
        rows.push(<li key={i}>{89} x {i} = {89 * i}</li>);
    }
    return <ul>{rows}</ul>;
}
