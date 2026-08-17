// MultiplicationTable60.jsx
// Tabel perkalian 60.

import React from 'react';

export default function MultiplicationTable60() {
    const rows = [];
    for (let i = 1; i <= 10; i++) {
        rows.push(<li key={i}>{60} x {i} = {60 * i}</li>);
    }
    return <ul>{rows}</ul>;
}
