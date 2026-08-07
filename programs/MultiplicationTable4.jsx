// MultiplicationTable4.jsx
// Tabel perkalian 4.

import React from 'react';

export default function MultiplicationTable4() {
    const rows = [];
    for (let i = 1; i <= 10; i++) {
        rows.push(<li key={i}>{4} x {i} = {4 * i}</li>);
    }
    return <ul>{rows}</ul>;
}
