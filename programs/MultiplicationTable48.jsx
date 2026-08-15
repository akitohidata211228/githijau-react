// MultiplicationTable48.jsx
// Tabel perkalian 48.

import React from 'react';

export default function MultiplicationTable48() {
    const rows = [];
    for (let i = 1; i <= 10; i++) {
        rows.push(<li key={i}>{48} x {i} = {48 * i}</li>);
    }
    return <ul>{rows}</ul>;
}
