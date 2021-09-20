import React from 'react';
import { mount } from 'enzyme';
import App from '../js/App';

test('app mounts without errors', () => {

    mount(<App />);
    expect(console.log).toHaveBeenCalledWith('[App.render]');
});
