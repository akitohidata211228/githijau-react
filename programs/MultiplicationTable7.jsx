// MultiplicationTable7.jsx
// Tabel perkalian 7.

import React from 'react';

export default function MultiplicationTable7() {
    const rows = [];
    for (let i = 1; i <= 10; i++) {
        rows.push(<li key={i}>{7} x {i} = {7 * i}</li>);
    }
    return <ul>{rows}</ul>;
}
