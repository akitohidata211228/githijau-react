// MultiplicationTable42.jsx
// Tabel perkalian 42.

import React from 'react';

export default function MultiplicationTable42() {
    const rows = [];
    for (let i = 1; i <= 10; i++) {
        rows.push(<li key={i}>{42} x {i} = {42 * i}</li>);
    }
    return <ul>{rows}</ul>;
}
