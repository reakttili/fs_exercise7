import React from 'react'
import { mount } from 'enzyme'
import App from './App'
import Blog from './components/Blog'
import { Provider } from 'react-redux'
import blogService from './services/blogs'
import userService from './services/users'
import loginService from './services/login'
import store from './store'
import { actionFor as blogsActionFor } from './reducers/blogReducer'

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

describe('<App />', () => {
  let app
  describe('when user is not logged', () => {
    beforeEach(() => {
      blogService.setBaseUrl('http://localhost:3003/api/blogs')
      userService.setBaseUrl('http://localhost:3003/api/users')
      loginService.setBaseUrl('http://localhost:3003/api/login')
      const user = {
        username: 'VB',
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlZCIiwiaWQiOiI1YjcwNjA4ZTI4M2ExZTJiZmMwNzdlOGMiLCJpYXQiOjE1Mzc2MjkxNTh9.9bQZig6WFiBq3-WJBVdR18oogGjVqa2DbMw-3hTrurg',
        name: 'Ville'
      }
      localStorage.setItem('loggeUser', JSON.stringify(user))
      app = mount(<Provider store={store}><App /></Provider>)
    })
    it('blogs are shown after login', async () => {
      //await store.dispatch(blogsActionFor.initializeBlogs())
      await sleep(2000)
      app.update()
      // await store.dispatch(blogsActionFor.initializeBlogs())
      console.log('Any Blogs? ', app.find(Blog).length)
      console.log(store.getState())
      //expect(app.find(Blog).length).toEqual(store.getState().blogs.length)
      expect(app.find(Blog).length).toEqual(2)
    })
  })
})
