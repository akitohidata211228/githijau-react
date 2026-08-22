// MultiplicationTable97.jsx
// Tabel perkalian 97.

import React from 'react';

export default function MultiplicationTable97() {
    const rows = [];
    for (let i = 1; i <= 10; i++) {
        rows.push(<li key={i}>{97} x {i} = {97 * i}</li>);
    }
    return <ul>{rows}</ul>;
}
