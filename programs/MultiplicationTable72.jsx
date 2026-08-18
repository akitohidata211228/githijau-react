// MultiplicationTable72.jsx
// Tabel perkalian 72.

import React from 'react';

export default function MultiplicationTable72() {
    const rows = [];
    for (let i = 1; i <= 10; i++) {
        rows.push(<li key={i}>{72} x {i} = {72 * i}</li>);
    }
    return <ul>{rows}</ul>;
}
