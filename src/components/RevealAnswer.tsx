import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [state, setState] = useState<boolean>(false);

    return (
        <>
        <div>
            <span>
                <Button onClick={() => setState(!state)}>Reveal Answer</Button>
            </span>
        </div>
        <div>
            {(state ? <span>42</span> : <span></span>)}
        </div>
        </>
    );
}
