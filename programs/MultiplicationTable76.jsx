// MultiplicationTable76.jsx
// Tabel perkalian 76.

import React from 'react';

export default function MultiplicationTable76() {
    const rows = [];
    for (let i = 1; i <= 10; i++) {
        rows.push(<li key={i}>{76} x {i} = {76 * i}</li>);
    }
    return <ul>{rows}</ul>;
}
