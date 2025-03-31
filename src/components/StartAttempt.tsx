import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { act } from '@testing-library/react';

export function StartAttempt(): JSX.Element {
    const [quizStarted, setQuizStarted] = useState<boolean>(false);
    const [numAttempts, setAttempts] = useState<number>(4);

    return (
        <>
            <div>
                <Button disabled={quizStarted || numAttempts <= 0} onClick={() => {act(() => { setQuizStarted(true); setAttempts(prevAttempts => prevAttempts - 1); })}}>Start Quiz</Button>
                <Button disabled={!quizStarted} onClick={() => act(() => setQuizStarted(false))}>Stop Quiz</Button>
                <Button disabled={quizStarted} onClick={() => act(() => setAttempts(prevAttempts => prevAttempts + 1))}>Mulligan</Button>
            </div>
            <div>
                <span data-testid="attempt-count">{numAttempts}</span>
            </div>
        </>
    );
}
