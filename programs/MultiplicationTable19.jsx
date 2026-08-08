// MultiplicationTable19.jsx
// Tabel perkalian 19.

import React from 'react';

export default function MultiplicationTable19() {
    const rows = [];
    for (let i = 1; i <= 10; i++) {
        rows.push(<li key={i}>{19} x {i} = {19 * i}</li>);
    }
    return <ul>{rows}</ul>;
}
