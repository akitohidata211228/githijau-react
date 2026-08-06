// MultiplicationTable3.jsx
// Tabel perkalian 3.

import React from 'react';

export default function MultiplicationTable3() {
    const rows = [];
    for (let i = 1; i <= 10; i++) {
        rows.push(<li key={i}>{3} x {i} = {3 * i}</li>);
    }
    return <ul>{rows}</ul>;
}
