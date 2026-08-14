// MultiplicationTable39.jsx
// Tabel perkalian 39.

import React from 'react';

export default function MultiplicationTable39() {
    const rows = [];
    for (let i = 1; i <= 10; i++) {
        rows.push(<li key={i}>{39} x {i} = {39 * i}</li>);
    }
    return <ul>{rows}</ul>;
}
