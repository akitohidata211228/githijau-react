// MultiplicationTable30.jsx
// Tabel perkalian 30.

import React from 'react';

export default function MultiplicationTable30() {
    const rows = [];
    for (let i = 1; i <= 10; i++) {
        rows.push(<li key={i}>{30} x {i} = {30 * i}</li>);
    }
    return <ul>{rows}</ul>;
}
