// MultiplicationTable34.jsx
// Tabel perkalian 34.

import React from 'react';

export default function MultiplicationTable34() {
    const rows = [];
    for (let i = 1; i <= 10; i++) {
        rows.push(<li key={i}>{34} x {i} = {34 * i}</li>);
    }
    return <ul>{rows}</ul>;
}
