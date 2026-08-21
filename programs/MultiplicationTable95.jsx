// MultiplicationTable95.jsx
// Tabel perkalian 95.

import React from 'react';

export default function MultiplicationTable95() {
    const rows = [];
    for (let i = 1; i <= 10; i++) {
        rows.push(<li key={i}>{95} x {i} = {95 * i}</li>);
    }
    return <ul>{rows}</ul>;
}
