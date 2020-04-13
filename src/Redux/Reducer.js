import React from 'react';
import { combineReducers } from 'redux';

const dashboardReducer = (state={data: {}}, action) => {
    switch(action.type) {
        case 'SET_DASHBOARD_DATA': {
            return {
                data: action.data
            }
            `break;`
        }
        case 'RESET_DASHBOARD': {
            return {
                data: {
                    balance: '1233',
                    menu: 'werewr',
                    cost: 2355
                }
            }
        }
        default:
            return state;
    }
}

const combinedReducer = combineReducers({
    dashboardReducer
});
export default combinedReducer;