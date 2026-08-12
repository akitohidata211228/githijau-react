// MultiplicationTable21.jsx
// Tabel perkalian 21.

import React from 'react';

export default function MultiplicationTable21() {
    const rows = [];
    for (let i = 1; i <= 10; i++) {
        rows.push(<li key={i}>{21} x {i} = {21 * i}</li>);
    }
    return <ul>{rows}</ul>;
}
