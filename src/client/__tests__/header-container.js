import React from 'react';
import {shallow, mount, render} from 'enzyme';
import {HeaderContainer} from '../containers/header-container';
import {Header} from '../components/header';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

describe('>>>H E A D E R --- REACT-REDUX (Shallow + passing the {store} directly)', () => {

    const initialState = { 
        currentFilmDetails: null
    };

    const mockStore = configureStore();
    let store,container;

    beforeEach(()=>{
        store = mockStore(initialState);
        // container = shallow(<HeaderContainer store={store} /> );
        container = mount( <Provider store={store}><HeaderContainer /></Provider> );
    })

    test('+++ render the connected(SMART) component', () => {
        expect(container.length).toEqual(1);
    });

    it('+++ check Prop matches with initialState', () => {
        console.log(container.find(Header).prop('currentFilmDetails'));
        // expect(container.find(Header).prop('currentFilmDetails')).toEqual(initialState.currentFilmDetails);
     });

});