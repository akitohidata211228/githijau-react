// MultiplicationTable86.jsx
// Tabel perkalian 86.

import React from 'react';

export default function MultiplicationTable86() {
    const rows = [];
    for (let i = 1; i <= 10; i++) {
        rows.push(<li key={i}>{86} x {i} = {86 * i}</li>);
    }
    return <ul>{rows}</ul>;
}
