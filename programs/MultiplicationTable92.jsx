// MultiplicationTable92.jsx
// Tabel perkalian 92.

import React from 'react';

export default function MultiplicationTable92() {
    const rows = [];
    for (let i = 1; i <= 10; i++) {
        rows.push(<li key={i}>{92} x {i} = {92 * i}</li>);
    }
    return <ul>{rows}</ul>;
}
