// app.test.js
import React from 'react'
import { Router, MemoryRouter } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import '@testing-library/jest-dom/extend-expect'
import App from './app'
import { shallow, mount } from 'enzyme';

describe('Render App componet', () => {
    const history = createMemoryHistory()
    const wrapper = shallow(
        <Router history={history}>
            <App />
        </Router>
    )
    test('full app rendering', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('full app rendering/navigating', () => {
        const container = mount(
            <MemoryRouter initialEntries={['/signup']} >
                <App />
            </MemoryRouter>
        )
        expect(container.find('#signup'))
    })

    test('invalid path should redirect to 404', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/random']} >
                <App />
            </MemoryRouter>
        );

        expect(wrapper.find('#nomatch'));
    });
})
