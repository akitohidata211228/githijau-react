// MultiplicationTable99.jsx
// Tabel perkalian 99.

import React from 'react';

export default function MultiplicationTable99() {
    const rows = [];
    for (let i = 1; i <= 10; i++) {
        rows.push(<li key={i}>{99} x {i} = {99 * i}</li>);
    }
    return <ul>{rows}</ul>;
}
