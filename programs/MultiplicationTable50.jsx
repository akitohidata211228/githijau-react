// MultiplicationTable50.jsx
// Tabel perkalian 50.

import React from 'react';

export default function MultiplicationTable50() {
    const rows = [];
    for (let i = 1; i <= 10; i++) {
        rows.push(<li key={i}>{50} x {i} = {50 * i}</li>);
    }
    return <ul>{rows}</ul>;
}
