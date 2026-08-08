// MultiplicationTable15.jsx
// Tabel perkalian 15.

import React from 'react';

export default function MultiplicationTable15() {
    const rows = [];
    for (let i = 1; i <= 10; i++) {
        rows.push(<li key={i}>{15} x {i} = {15 * i}</li>);
    }
    return <ul>{rows}</ul>;
}
