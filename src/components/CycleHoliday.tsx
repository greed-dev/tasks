import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { act } from '@testing-library/react';

export function CycleHoliday(): JSX.Element {
    const byAlphabet: Record<string, string> = {
        "🐣" : "🇺🇸",
        "🇺🇸": "🎃",
        "🎃": "🥂",
        "🥂": "💖",
        "💖": "🐣"
    }

    const byYear: Record<string, string> = {
        "💖": "🐣",
        "🐣": "🇺🇸",
        "🇺🇸": "🎃",
        "🎃": "🥂",
        "🥂": "💖"
    }

    const [currentHoliday, changeCurrentHoliday] = useState<string>("💖");

    return (
        <>
            <div>
                <Button onClick={() => act(() => changeCurrentHoliday(byAlphabet[currentHoliday]))}>Advance by Alphabet</Button>
                <Button onClick={() => act(() => changeCurrentHoliday(byYear[currentHoliday]))}>Advance by Year</Button>
            </div>
            <div>
                <span>Holiday: {currentHoliday}</span>
            </div>
        </>
    );
}
