import React from 'react'
import {Form} from 'react-bootstrap';
import './Form.css'

const Formik = ({name, setName, email, setEmail, password, setPassword}) => {
    return (
        <div className="form-container">
            <h3>Welcome to SongBird App</h3>
            <Form>
            <Form.Group className="input-form" controlId="name">
                <Form.Control value={name} onChange={(e) => setName(e.target.value)} type="name" placeholder="Enter name" />
            </Form.Group>

            <Form.Group className="input-form" controlId="email">
                <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="input-form" controlId="password">
                <Form.Control value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter password" />
            </Form.Group>
            </Form>
        </div>
    )
}

export default Formik