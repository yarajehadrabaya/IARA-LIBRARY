// ConfettiEffect.js
import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';

function ConfettiEffect() {
    const { width, height } = useWindowSize();
    const [showConfetti, setShowConfetti] = useState(true);

    useEffect(() => {
        // إخفاء تأثير القصاصات بعد 3 ثوانٍ
        const timer = setTimeout(() => {
            setShowConfetti(false);
        }, 30000);
        return () => clearTimeout(timer);
    }, []);

    return showConfetti ? <Confetti width={width} height={height} /> : null;
}

export default ConfettiEffect;
