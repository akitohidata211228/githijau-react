// MultiplicationTable37.jsx
// Tabel perkalian 37.

import React from 'react';

export default function MultiplicationTable37() {
    const rows = [];
    for (let i = 1; i <= 10; i++) {
        rows.push(<li key={i}>{37} x {i} = {37 * i}</li>);
    }
    return <ul>{rows}</ul>;
}
