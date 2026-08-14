// MultiplicationTable41.jsx
// Tabel perkalian 41.

import React from 'react';

export default function MultiplicationTable41() {
    const rows = [];
    for (let i = 1; i <= 10; i++) {
        rows.push(<li key={i}>{41} x {i} = {41 * i}</li>);
    }
    return <ul>{rows}</ul>;
}
