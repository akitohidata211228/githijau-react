// MultiplicationTable79.jsx
// Tabel perkalian 79.

import React from 'react';

export default function MultiplicationTable79() {
    const rows = [];
    for (let i = 1; i <= 10; i++) {
        rows.push(<li key={i}>{79} x {i} = {79 * i}</li>);
    }
    return <ul>{rows}</ul>;
}
