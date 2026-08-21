// MultiplicationTable94.jsx
// Tabel perkalian 94.

import React from 'react';

export default function MultiplicationTable94() {
    const rows = [];
    for (let i = 1; i <= 10; i++) {
        rows.push(<li key={i}>{94} x {i} = {94 * i}</li>);
    }
    return <ul>{rows}</ul>;
}
