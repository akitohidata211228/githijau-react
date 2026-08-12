// MultiplicationTable22.jsx
// Tabel perkalian 22.

import React from 'react';

export default function MultiplicationTable22() {
    const rows = [];
    for (let i = 1; i <= 10; i++) {
        rows.push(<li key={i}>{22} x {i} = {22 * i}</li>);
    }
    return <ul>{rows}</ul>;
}
