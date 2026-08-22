// MultiplicationTable96.jsx
// Tabel perkalian 96.

import React from 'react';

export default function MultiplicationTable96() {
    const rows = [];
    for (let i = 1; i <= 10; i++) {
        rows.push(<li key={i}>{96} x {i} = {96 * i}</li>);
    }
    return <ul>{rows}</ul>;
}
