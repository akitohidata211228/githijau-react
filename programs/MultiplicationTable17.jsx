// MultiplicationTable17.jsx
// Tabel perkalian 17.

import React from 'react';

export default function MultiplicationTable17() {
    const rows = [];
    for (let i = 1; i <= 10; i++) {
        rows.push(<li key={i}>{17} x {i} = {17 * i}</li>);
    }
    return <ul>{rows}</ul>;
}
