// MultiplicationTable70.jsx
// Tabel perkalian 70.

import React from 'react';

export default function MultiplicationTable70() {
    const rows = [];
    for (let i = 1; i <= 10; i++) {
        rows.push(<li key={i}>{70} x {i} = {70 * i}</li>);
    }
    return <ul>{rows}</ul>;
}
