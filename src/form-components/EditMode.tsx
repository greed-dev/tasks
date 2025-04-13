import React, { useState } from "react";
import Form from "react-bootstrap/Form";

export function EditMode(): React.JSX.Element {
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setStudent] = useState<boolean>(true); // ✅ Start as student
    const [isEditMode, setEditMode] = useState<boolean>(false);

    function updateEditMode(event: React.ChangeEvent<HTMLInputElement>) {
        setEditMode(event.target.checked);
    }

    function onNameChanged(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    function updateIsStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setStudent(event.target.checked);
    }

    return (
        <div>
            <Form.Group className="mb-3" controlId="form-editMode">
                <Form.Label>Student Editor</Form.Label>
                <Form.Check
                    type="switch"
                    id="isEditMode"
                    label="Is Edit Mode?"
                    onChange={updateEditMode}
                    checked={isEditMode}
                />

                {isEditMode ?
                    <>
                        <Form.Control
                            type="text"
                            value={name}
                            onChange={onNameChanged}
                        />
                        <Form.Check
                            type="checkbox"
                            id="isStudent" // Provide a unique id for association
                            checked={isStudent}
                            onChange={updateIsStudent}
                            label="Is Student?"
                        />
                    </>
                :   <div>
                        {name} is{isStudent ? "" : " not"} a student
                    </div>
                }
            </Form.Group>
        </div>
    );
}
