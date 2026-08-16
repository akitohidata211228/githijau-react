// MultiplicationTable56.jsx
// Tabel perkalian 56.

import React from 'react';

export default function MultiplicationTable56() {
    const rows = [];
    for (let i = 1; i <= 10; i++) {
        rows.push(<li key={i}>{56} x {i} = {56 * i}</li>);
    }
    return <ul>{rows}</ul>;
}
