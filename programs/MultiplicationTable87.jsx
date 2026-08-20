// MultiplicationTable87.jsx
// Tabel perkalian 87.

import React from 'react';

export default function MultiplicationTable87() {
    const rows = [];
    for (let i = 1; i <= 10; i++) {
        rows.push(<li key={i}>{87} x {i} = {87 * i}</li>);
    }
    return <ul>{rows}</ul>;
}
