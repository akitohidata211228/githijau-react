// MultiplicationTable52.jsx
// Tabel perkalian 52.

import React from 'react';

export default function MultiplicationTable52() {
    const rows = [];
    for (let i = 1; i <= 10; i++) {
        rows.push(<li key={i}>{52} x {i} = {52 * i}</li>);
    }
    return <ul>{rows}</ul>;
}
