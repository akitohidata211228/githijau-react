// MultiplicationTable27.jsx
// Tabel perkalian 27.

import React from 'react';

export default function MultiplicationTable27() {
    const rows = [];
    for (let i = 1; i <= 10; i++) {
        rows.push(<li key={i}>{27} x {i} = {27 * i}</li>);
    }
    return <ul>{rows}</ul>;
}
