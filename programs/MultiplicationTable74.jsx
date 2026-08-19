// MultiplicationTable74.jsx
// Tabel perkalian 74.

import React from 'react';

export default function MultiplicationTable74() {
    const rows = [];
    for (let i = 1; i <= 10; i++) {
        rows.push(<li key={i}>{74} x {i} = {74 * i}</li>);
    }
    return <ul>{rows}</ul>;
}
