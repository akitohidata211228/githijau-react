// MultiplicationTable46.jsx
// Tabel perkalian 46.

import React from 'react';

export default function MultiplicationTable46() {
    const rows = [];
    for (let i = 1; i <= 10; i++) {
        rows.push(<li key={i}>{46} x {i} = {46 * i}</li>);
    }
    return <ul>{rows}</ul>;
}
