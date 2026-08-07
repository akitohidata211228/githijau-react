// MultiplicationTable8.jsx
// Tabel perkalian 8.

import React from 'react';

export default function MultiplicationTable8() {
    const rows = [];
    for (let i = 1; i <= 10; i++) {
        rows.push(<li key={i}>{8} x {i} = {8 * i}</li>);
    }
    return <ul>{rows}</ul>;
}
