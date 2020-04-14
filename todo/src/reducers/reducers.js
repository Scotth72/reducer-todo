import React, {useState, useReducer} from 'react';

export const initialState = [{
    task: 'Clean the kitchen',
    completed: false,
    id: 1234325 
},]

export const heathReducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_TODO':
           return {
                ...state,
                item: '',
                completed: true,
                id: Date.now ()
           };
        case 'TOGGLE_TODO':
            return{
                ...state,
                completed: false,
                
            }
        case 'CLEAR_TODO':
            return{

            }       
    default:
        return state;        

    }
};