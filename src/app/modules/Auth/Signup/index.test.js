import { shallow, mount, render } from 'enzyme';
import SignUp from './index'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { act, fireEvent, waitForElement } from '@testing-library/react';


describe('SignUp component rendering', () => {
   
        const wrapper = shallow(<SignUp />)
        it('Render App properly', () => {
            expect(wrapper).toMatchSnapshot()
        })

        it('on click login button', () => {
            const tree = mount(<Router><SignUp /></Router>);
            act(() => {
                tree.find('input#firstname').simulate('change', {
                    target: {
                        name: 'firstname',
                        value: 'kjdhawjkdghawjk'
                    }
                })
            })
            act(() => {
                tree.find('input#lastname').simulate('change', {
                    target: {
                        name: 'lastname',
                        value: 'kjdhawjkdghawjk'
                    }
                })
            })
            act(() => {
                tree.find('input#email').simulate('change', {
                    target: {
                        name: 'email',
                        value: 'abc@yopmail.com'
                    }
                })
            })
            act(() => {
                tree.find('input#password').simulate('change', {
                    target: {
                        name: 'password',
                        value: 'dawdawdaw'
                    }
                })
            })
            act(() => {
                tree.find('button#registerbtn').simulate('click');
            })
           
            expect(tree.find('input#firstname').props().value).toEqual('kjdhawjkdghawjk');
            expect(tree.find('input#lastname').props().value).toEqual('kjdhawjkdghawjk');
            expect(tree.find('input#email').props().value).toEqual('abc@yopmail.com');
            expect(tree.find('input#password').props().value).toEqual('dawdawdaw');
            expect(tree.find('input#email').props().value.length).toBeGreaterThan(4);
            expect(tree.find('input#password').props().value.length).toBeGreaterThan(4);
            expect(tree.find('input#email').props().value).toContain('@')
        });
})

