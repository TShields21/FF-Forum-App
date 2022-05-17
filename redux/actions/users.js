// ACTIONS are methods that you can dispatch anywhere in your program, similar to a global function
export const USER_LOAD = 'USER_LOAD';
export const USER_LOAD_SUCCESS = 'USER_LOAD_SUCCESS';
export const USER_LOAD_FAIL = 'USER_LOAD_FAIL';

export function usersFetchData() {
    return {
        type: USER_LOAD,
        payload: {
            request: {
                url: '/data/users.json'
            }
        }
    }
}