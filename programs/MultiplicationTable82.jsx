// MultiplicationTable82.jsx
// Tabel perkalian 82.

import React from 'react';

export default function MultiplicationTable82() {
    const rows = [];
    for (let i = 1; i <= 10; i++) {
        rows.push(<li key={i}>{82} x {i} = {82 * i}</li>);
    }
    return <ul>{rows}</ul>;
}
