// MultiplicationTable35.jsx
// Tabel perkalian 35.

import React from 'react';

export default function MultiplicationTable35() {
    const rows = [];
    for (let i = 1; i <= 10; i++) {
        rows.push(<li key={i}>{35} x {i} = {35 * i}</li>);
    }
    return <ul>{rows}</ul>;
}
