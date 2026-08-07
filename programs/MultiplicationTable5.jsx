// MultiplicationTable5.jsx
// Tabel perkalian 5.

import React from 'react';

export default function MultiplicationTable5() {
    const rows = [];
    for (let i = 1; i <= 10; i++) {
        rows.push(<li key={i}>{5} x {i} = {5 * i}</li>);
    }
    return <ul>{rows}</ul>;
}
