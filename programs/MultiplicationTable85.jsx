// MultiplicationTable85.jsx
// Tabel perkalian 85.

import React from 'react';

export default function MultiplicationTable85() {
    const rows = [];
    for (let i = 1; i <= 10; i++) {
        rows.push(<li key={i}>{85} x {i} = {85 * i}</li>);
    }
    return <ul>{rows}</ul>;
}
