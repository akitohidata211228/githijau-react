// MultiplicationTable93.jsx
// Tabel perkalian 93.

import React from 'react';

export default function MultiplicationTable93() {
    const rows = [];
    for (let i = 1; i <= 10; i++) {
        rows.push(<li key={i}>{93} x {i} = {93 * i}</li>);
    }
    return <ul>{rows}</ul>;
}
