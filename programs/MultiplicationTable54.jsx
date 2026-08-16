// MultiplicationTable54.jsx
// Tabel perkalian 54.

import React from 'react';

export default function MultiplicationTable54() {
    const rows = [];
    for (let i = 1; i <= 10; i++) {
        rows.push(<li key={i}>{54} x {i} = {54 * i}</li>);
    }
    return <ul>{rows}</ul>;
}
