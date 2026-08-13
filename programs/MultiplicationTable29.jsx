// MultiplicationTable29.jsx
// Tabel perkalian 29.

import React from 'react';

export default function MultiplicationTable29() {
    const rows = [];
    for (let i = 1; i <= 10; i++) {
        rows.push(<li key={i}>{29} x {i} = {29 * i}</li>);
    }
    return <ul>{rows}</ul>;
}
