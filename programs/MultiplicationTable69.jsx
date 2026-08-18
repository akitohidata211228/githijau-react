// MultiplicationTable69.jsx
// Tabel perkalian 69.

import React from 'react';

export default function MultiplicationTable69() {
    const rows = [];
    for (let i = 1; i <= 10; i++) {
        rows.push(<li key={i}>{69} x {i} = {69 * i}</li>);
    }
    return <ul>{rows}</ul>;
}
