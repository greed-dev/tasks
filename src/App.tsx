import React from "react";
import {Button, Container, Row, Col} from "react-bootstrap";
import "./App.css";

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
        </div>
    );
}

export default App;
