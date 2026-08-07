// MultiplicationTable11.jsx
// Tabel perkalian 11.

import React from 'react';

export default function MultiplicationTable11() {
    const rows = [];
    for (let i = 1; i <= 10; i++) {
        rows.push(<li key={i}>{11} x {i} = {11 * i}</li>);
    }
    return <ul>{rows}</ul>;
}
