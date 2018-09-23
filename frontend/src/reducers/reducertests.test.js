import deepFreeze from 'deep-freeze'
import loggedUserReducer from './loggedUserReducer'
import {actionFor} from './loggedUserReducer'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { watchFile } from 'fs';
import blogService from './../services/blogs'
import { actionFor as blogsActionFor } from './blogReducer'
import store from './../store'


// Note: learn mock store
// Note: should use test-db
describe.only('reducer', () => {
  it('logs in a user', () => {
    store.dispatch(actionFor.settingLoggedUser({ name:'ville',age:33 })).then(() => {
      expect(store.getState().loggedUser.name).toEqual('ville')})
  })
  it('checks the number of blogs', async () => {
    blogService.setBaseUrl('http://localhost:3003/api/blogs')
    await store.dispatch(blogsActionFor.initializeBlogs())
    expect(store.getState().blogs.length).toEqual(2)
  })
})



// EXample code
// import configureMockStore from 'redux-mock-store'
// import thunk from 'redux-thunk'
// import * as actions from '../../actions/TodoActions'
// import * as types from '../../constants/ActionTypes'
// import fetchMock from 'fetch-mock'
// import expect from 'expect' // You can use any testing library
// ​
// const middlewares = [thunk]
// const mockStore = configureMockStore(middlewares)
// ​
// describe('async actions', () => {
//   afterEach(() => {
//     fetchMock.reset()
//     fetchMock.restore()
//   })
// ​
//   it('creates FETCH_TODOS_SUCCESS when fetching todos has been done', () => {
//     fetchMock
//       .getOnce('/todos', { body: { todos: ['do something'] }, headers: { 'content-type': 'application/json' } })
// ​
// ​
//     const expectedActions = [
//       { type: types.FETCH_TODOS_REQUEST },
//       { type: types.FETCH_TODOS_SUCCESS, body: { todos: ['do something'] } }
//     ]
//     const store = mockStore({ todos: [] })
// ​
//     return store.dispatch(actions.fetchTodos()).then(() => {
//       // return of async actions
//       expect(store.getActions()).toEqual(expectedActions)
//     })
//   })
// })


// describe('reducer', () => {
  
//   it('saves logged user', () => {
    
//     const state = {}
//     const action = {
//       type: 'SET_LOGGED_USER'
//     }
//     const initialState = {
//       name: 'ville',
//       age: 33
//     }
//     deepFreeze(initialState)
//     const modified = {
//       name: 'ville',
//       age: 34
//     }
//     const newState = actionFor.settingLoggedUser(modified, action)
//     console.log(newState)
//     expect(newState).toEqual(modified)
//   })

// })

// Example code
// describe('reducer', () => {
//   const initialState = {
//     good: 0,
//     ok: 0,
//     bad: 0
//   }

//   it('should return a proper initial state when called with undefined state', () => {
//     const state = {}
//     const action = {
//       type: 'DO_NOTHING'
//     }

//     const newState = counterReducer(undefined, action)
//     expect(newState).toEqual(initialState)
//   })

//   it('good is incremented', () => {
//     const action = {
//       type: 'GOOD'
//     }
//     const state = initialState

//     deepFreeze(state)
//     const newState = counterReducer(state, action)
//     expect(newState).toEqual({
//       good: 1,
//       ok: 0,
//       bad: 0
//     })
//   })

//   it('ok is incremented', () => {
//     const action = {
//       type: 'OK'
//     }
//     const state = initialState

//     deepFreeze(state)
//     const newState = counterReducer(state, action)
//     expect(newState).toEqual({
//       good: 0,
//       ok: 1,
//       bad: 0
//     })
//   })

//   it('bad is incremented', () => {
//     const action = {
//       type: 'BAD'
//     }
//     const state = initialState

//     deepFreeze(state)
//     const newState = counterReducer(state, action)
//     expect(newState).toEqual({
//       good: 0,
//       ok: 0,
//       bad: 1
//     })
//   })

//   it('clear works', () => {
//     const zAct = {
//       type: 'ZERO'
//     }
//     const okAct = {
//       type: 'OK'
//     }
//     const badAct = {
//       type: 'BAD'
//     }

//     let state = initialState

//     deepFreeze(state)
//     state = counterReducer(state, okAct)
//     deepFreeze(state)
//     state = counterReducer(state, badAct)
//     deepFreeze(state)
//     state = counterReducer(state, zAct)
        
//     expect(state).toEqual(initialState)
//   })
//})