// Palindrome.jsx
// Input teks lalu cek apakah palindrom.

import React, { useState } from 'react';

export default function Palindrome() {
    const [text, setText] = useState('');
    const cleaned = text.toLowerCase().replace(/[^a-z0-9]/g, '');
    const isPalindrome = cleaned.length > 0 && cleaned === cleaned.split('').reverse().join('');

    return (
        <div>
            <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Ketik kata..." />
            <p>{text && (isPalindrome ? 'Palindrom ✓' : 'Bukan palindrom ✗')}</p>
        </div>
    );
}
