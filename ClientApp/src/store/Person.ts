import { Action, Reducer } from 'redux';
import { AppThunkAction } from './';


export interface PersonState {
    isLoading: boolean;
    persons: Person[]
}

export interface Person {
    name: string;
    id: number;
}

// ACTIONS

interface RequestPersonAction {
    type: 'REQUEST_PERSON',
}

interface ReceivePersonAction {
    type: 'RECEIVE_PERSON';
    persons: Person[]
}

type KnownAction = RequestPersonAction | ReceivePersonAction;

export const actionCreators = {
    requestPerson: (): AppThunkAction<KnownAction> => (dispatch, getState) => {
        const appState = getState();
        if(appState && appState.person){
            fetch(`person`)
            .then(response => {
                console.log('from actionCreators: ' + response);
                return response.json() as Promise<Person[]>
            })
            .then(data => {
                dispatch({type: 'RECEIVE_PERSON', persons: data});
            });

            dispatch({type: 'REQUEST_PERSON'});
        }
    }
}

// REDUCER

const unloadedState: PersonState = {persons: [], isLoading: false}

export const reducer: Reducer<PersonState> = (state: PersonState | undefined, incomingAction: Action): PersonState => {
    if(state === undefined) {
        return unloadedState;
    }

    const action = incomingAction as KnownAction;
    switch (action.type) {
        case 'REQUEST_PERSON':
            return {
                isLoading: true,
                persons: state.persons
            }
        case 'RECEIVE_PERSON':
            return {
                isLoading: false,
                persons: action.persons
            }
            break;
    }
    return state;
};