// MultiplicationTable36.jsx
// Tabel perkalian 36.

import React from 'react';

export default function MultiplicationTable36() {
    const rows = [];
    for (let i = 1; i <= 10; i++) {
        rows.push(<li key={i}>{36} x {i} = {36 * i}</li>);
    }
    return <ul>{rows}</ul>;
}
