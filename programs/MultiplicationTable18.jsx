// MultiplicationTable18.jsx
// Tabel perkalian 18.

import React from 'react';

export default function MultiplicationTable18() {
    const rows = [];
    for (let i = 1; i <= 10; i++) {
        rows.push(<li key={i}>{18} x {i} = {18 * i}</li>);
    }
    return <ul>{rows}</ul>;
}
