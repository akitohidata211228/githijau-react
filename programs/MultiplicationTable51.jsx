// MultiplicationTable51.jsx
// Tabel perkalian 51.

import React from 'react';

export default function MultiplicationTable51() {
    const rows = [];
    for (let i = 1; i <= 10; i++) {
        rows.push(<li key={i}>{51} x {i} = {51 * i}</li>);
    }
    return <ul>{rows}</ul>;
}
