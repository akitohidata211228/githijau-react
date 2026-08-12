// MultiplicationTable23.jsx
// Tabel perkalian 23.

import React from 'react';

export default function MultiplicationTable23() {
    const rows = [];
    for (let i = 1; i <= 10; i++) {
        rows.push(<li key={i}>{23} x {i} = {23 * i}</li>);
    }
    return <ul>{rows}</ul>;
}
