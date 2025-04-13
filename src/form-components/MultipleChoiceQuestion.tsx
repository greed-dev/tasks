import React, { useState } from "react";
import Form from "react-bootstrap/Form";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [answer, changeAnswer] = useState<string>();

    function updateAnswer(event: React.ChangeEvent<HTMLSelectElement>) {
        changeAnswer(event.target.value);
    }

    return (
        <div>
            <h3>
                Multiple Choice Question:{" "}
                {expectedAnswer === answer ? "✔️" : "❌"}
            </h3>
            <Form.Group>
                <Form.Label>Question 1</Form.Label>
                <Form.Select defaultValue="Select One" onChange={updateAnswer}>
                    <option disabled>Select One</option>
                    {options.map((option, index) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
        </div>
    );
}
