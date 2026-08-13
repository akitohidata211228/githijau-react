// MultiplicationTable31.jsx
// Tabel perkalian 31.

import React from 'react';

export default function MultiplicationTable31() {
    const rows = [];
    for (let i = 1; i <= 10; i++) {
        rows.push(<li key={i}>{31} x {i} = {31 * i}</li>);
    }
    return <ul>{rows}</ul>;
}
