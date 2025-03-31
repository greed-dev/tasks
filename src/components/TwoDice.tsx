import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [diceOneValue, changeDiceOneValue] = useState<number>(0);
    const [diceTwoValue, changeDiceTwoValue] = useState<number>(1);

    return (
        <>
            <div>
                <Button onClick={() => changeDiceOneValue(d6())}>Roll Left</Button>
                <Button onClick={() => changeDiceTwoValue(d6())}>Roll Right</Button>
            </div>
            <div>
                <span data-testid="left-die">Left Die: {diceOneValue}</span>
            </div>
            <div>
                <span data-testid="right-die">Right Die: {diceTwoValue}</span>
            </div>
            <div>
                <span>
                    {(() => {
                        if (diceOneValue == 1 && diceTwoValue == 1) {
                            return "Lose";
                        } else if (diceOneValue == diceTwoValue) {
                            return "Win";
                        }
                    })()}
                </span>
            </div>
        </>
    );
}
