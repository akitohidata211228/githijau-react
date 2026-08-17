// MultiplicationTable61.jsx
// Tabel perkalian 61.

import React from 'react';

export default function MultiplicationTable61() {
    const rows = [];
    for (let i = 1; i <= 10; i++) {
        rows.push(<li key={i}>{61} x {i} = {61 * i}</li>);
    }
    return <ul>{rows}</ul>;
}
