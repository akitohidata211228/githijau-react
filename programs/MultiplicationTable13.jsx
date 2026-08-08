// MultiplicationTable13.jsx
// Tabel perkalian 13.

import React from 'react';

export default function MultiplicationTable13() {
    const rows = [];
    for (let i = 1; i <= 10; i++) {
        rows.push(<li key={i}>{13} x {i} = {13 * i}</li>);
    }
    return <ul>{rows}</ul>;
}
