import { shallow ,mount } from "enzyme";
import SignIn from './index'
import React from 'react'

import { BrowserRouter as  Router} from 'react-router-dom'
describe('Signin component rendering', () => {
    const wrapper = shallow(<Router><SignIn/></Router>);

    it('Render App properly', () => {
        expect(wrapper.html()).toMatchSnapshot();
    })

    it('should have an email field', () => {
        expect(wrapper.find('#email').exists())
    });

    it('should have an password field', () => {
        expect(wrapper.find('#password').length).equals(1)
    });
    
})

