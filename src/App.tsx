import React from "react";
import {Button, Container, Row, Col} from "react-bootstrap";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { TwoDice } from "./components/TwoDice";
import { Counter } from "./components/Counter";
import { StartAttempt } from "./components/StartAttempt";
import { CycleHoliday } from "./components/CycleHoliday"
import { DoubleHalf } from "./bad-components/DoubleHalf";
import { ColoredBox } from "./bad-components/ColoredBox";
import { ChooseTeam } from "./bad-components/ChooseTeam";
import { CheckAnswer } from "./form-components/CheckAnswer";
import { EditMode } from "./form-components/EditMode";
import { MultipleChoiceQuestion } from "./form-components/MultipleChoiceQuestion";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UM COS420 with React Hooks and TypeScript
            </header>
            <h1>This is a cool lizard!</h1>
            <img src="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg" alt="Psychedelic looking gecko"></img>
            <p>Reasons to like this lizard:</p>
            <ul>
                <li>He&apos;s cool</li>
                <li>He&apos;s psychedelic looking</li>
                <li>He&apos;s a sweetheart</li>
            </ul>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <p><strong>Ethan Morin</strong></p>

            <Button onClick={ () => { console.log("Hello World!") } }>Log Hello World</Button>

            <Container>
                <Row>
                    <Col>
                        <div style={ {backgroundColor: 'red', width: '400px', height: '800px'} }>
                        </div>
                    </Col>
                    <Col>
                        <div style={ {backgroundColor: 'red', width: '400px', height: '800px'} }>
                        </div>
                    </Col>
                </Row>
            </Container>
            <p><strong>Hello World</strong></p>
            <hr></hr>
            <DoubleHalf></DoubleHalf>
            <CheckAnswer expectedAnswer="42"></CheckAnswer>
            <hr></hr>
            <EditMode></EditMode>
            <hr></hr>
            <MultipleChoiceQuestion
                options={["a", "b", "c"]}
                expectedAnswer="b"
            ></MultipleChoiceQuestion>
            <hr></hr>
            <ChooseTeam></ChooseTeam>
            <hr></hr>
            <ColoredBox></ColoredBox>
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <CycleHoliday></CycleHoliday>
        </div>
    );
}

export default App;
