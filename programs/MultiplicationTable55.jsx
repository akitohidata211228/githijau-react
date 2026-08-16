// MultiplicationTable55.jsx
// Tabel perkalian 55.

import React from 'react';

export default function MultiplicationTable55() {
    const rows = [];
    for (let i = 1; i <= 10; i++) {
        rows.push(<li key={i}>{55} x {i} = {55 * i}</li>);
    }
    return <ul>{rows}</ul>;
}
