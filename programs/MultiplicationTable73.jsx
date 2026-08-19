// MultiplicationTable73.jsx
// Tabel perkalian 73.

import React from 'react';

export default function MultiplicationTable73() {
    const rows = [];
    for (let i = 1; i <= 10; i++) {
        rows.push(<li key={i}>{73} x {i} = {73 * i}</li>);
    }
    return <ul>{rows}</ul>;
}
