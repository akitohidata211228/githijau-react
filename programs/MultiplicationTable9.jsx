// MultiplicationTable9.jsx
// Tabel perkalian 9.

import React from 'react';

export default function MultiplicationTable9() {
    const rows = [];
    for (let i = 1; i <= 10; i++) {
        rows.push(<li key={i}>{9} x {i} = {9 * i}</li>);
    }
    return <ul>{rows}</ul>;
}
