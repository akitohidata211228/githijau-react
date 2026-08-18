// MultiplicationTable66.jsx
// Tabel perkalian 66.

import React from 'react';

export default function MultiplicationTable66() {
    const rows = [];
    for (let i = 1; i <= 10; i++) {
        rows.push(<li key={i}>{66} x {i} = {66 * i}</li>);
    }
    return <ul>{rows}</ul>;
}
