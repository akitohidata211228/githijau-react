// MultiplicationTable6.jsx
// Tabel perkalian 6.

import React from 'react';

export default function MultiplicationTable6() {
    const rows = [];
    for (let i = 1; i <= 10; i++) {
        rows.push(<li key={i}>{6} x {i} = {6 * i}</li>);
    }
    return <ul>{rows}</ul>;
}
