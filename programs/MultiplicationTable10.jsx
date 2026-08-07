// MultiplicationTable10.jsx
// Tabel perkalian 10.

import React from 'react';

export default function MultiplicationTable10() {
    const rows = [];
    for (let i = 1; i <= 10; i++) {
        rows.push(<li key={i}>{10} x {i} = {10 * i}</li>);
    }
    return <ul>{rows}</ul>;
}
