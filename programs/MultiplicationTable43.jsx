// MultiplicationTable43.jsx
// Tabel perkalian 43.

import React from 'react';

export default function MultiplicationTable43() {
    const rows = [];
    for (let i = 1; i <= 10; i++) {
        rows.push(<li key={i}>{43} x {i} = {43 * i}</li>);
    }
    return <ul>{rows}</ul>;
}
