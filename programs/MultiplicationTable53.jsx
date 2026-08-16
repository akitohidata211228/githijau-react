// MultiplicationTable53.jsx
// Tabel perkalian 53.

import React from 'react';

export default function MultiplicationTable53() {
    const rows = [];
    for (let i = 1; i <= 10; i++) {
        rows.push(<li key={i}>{53} x {i} = {53 * i}</li>);
    }
    return <ul>{rows}</ul>;
}
