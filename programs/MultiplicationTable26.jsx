// MultiplicationTable26.jsx
// Tabel perkalian 26.

import React from 'react';

export default function MultiplicationTable26() {
    const rows = [];
    for (let i = 1; i <= 10; i++) {
        rows.push(<li key={i}>{26} x {i} = {26 * i}</li>);
    }
    return <ul>{rows}</ul>;
}
