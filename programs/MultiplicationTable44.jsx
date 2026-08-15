// MultiplicationTable44.jsx
// Tabel perkalian 44.

import React from 'react';

export default function MultiplicationTable44() {
    const rows = [];
    for (let i = 1; i <= 10; i++) {
        rows.push(<li key={i}>{44} x {i} = {44 * i}</li>);
    }
    return <ul>{rows}</ul>;
}
