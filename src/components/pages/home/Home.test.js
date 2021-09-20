/* eslint-disable no-console */
import React from 'react';
import { mount } from 'enzyme';
import { HelmetProvider } from 'react-helmet-async';
import Home from './Home';

test('Home Component loads correctly', () => {

    const component = mount(
        <HelmetProvider>
            <Home />
        </HelmetProvider>,
    );

    expect(component.find('.b-home')).toHaveLength(1);
    expect(console.log).toHaveBeenCalledWith('[Home.render]');
});
