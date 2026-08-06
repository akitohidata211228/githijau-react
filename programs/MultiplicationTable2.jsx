// MultiplicationTable2.jsx
// Tabel perkalian 2.

import React from 'react';

export default function MultiplicationTable2() {
    const rows = [];
    for (let i = 1; i <= 10; i++) {
        rows.push(<li key={i}>{2} x {i} = {2 * i}</li>);
    }
    return <ul>{rows}</ul>;
}
