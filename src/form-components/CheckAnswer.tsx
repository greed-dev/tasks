import React, { useState } from "react";
import Form from "react-bootstrap/Form";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [givenAnswer, setGivenAnswer] = useState<String>();

    function onChange(event: React.ChangeEvent<HTMLInputElement>) {
        setGivenAnswer(event.target.value);
    }

    return (
        <div>
            <Form.Group className="mb-3" controlId="form-answer">
                <Form.Label>
                    Answer {givenAnswer === expectedAnswer ? "✔️" : "❌️"}
                </Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter answer"
                    onChange={onChange}
                />
            </Form.Group>
        </div>
    );
}
