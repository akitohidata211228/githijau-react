// MultiplicationTable84.jsx
// Tabel perkalian 84.

import React from 'react';

export default function MultiplicationTable84() {
    const rows = [];
    for (let i = 1; i <= 10; i++) {
        rows.push(<li key={i}>{84} x {i} = {84 * i}</li>);
    }
    return <ul>{rows}</ul>;
}
