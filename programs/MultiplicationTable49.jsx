// MultiplicationTable49.jsx
// Tabel perkalian 49.

import React from 'react';

export default function MultiplicationTable49() {
    const rows = [];
    for (let i = 1; i <= 10; i++) {
        rows.push(<li key={i}>{49} x {i} = {49 * i}</li>);
    }
    return <ul>{rows}</ul>;
}
