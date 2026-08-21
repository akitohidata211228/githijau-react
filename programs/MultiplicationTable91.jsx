// MultiplicationTable91.jsx
// Tabel perkalian 91.

import React from 'react';

export default function MultiplicationTable91() {
    const rows = [];
    for (let i = 1; i <= 10; i++) {
        rows.push(<li key={i}>{91} x {i} = {91 * i}</li>);
    }
    return <ul>{rows}</ul>;
}
