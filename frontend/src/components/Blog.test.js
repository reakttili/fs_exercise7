import React from 'react'
import { shallow } from 'enzyme'
import { Blog } from './Blog'

describe.only('<Blog />', () => {
  it('renders content', () => {
    const blog = {
      title: 'title',
      author: 'VB',
      url: 'www',
      likes: 5,
      adder: 'user',
      blogid: 100
    }
    const mockHandler = jest.fn()

    // const props = {
    //   ownProps: {
    //     bShowAll: true,
    //     blog:blog,
    //     parentRender:mockHandler
    //   }
    // }

    const ownProps = {
      bShowAll: true,
      blog:blog,
      parentRender:mockHandler
    }
    
    //const blogComponent = shallow(<Blog blog={blog} parentRender={mockHandler} ownProps={ownProps}/>)
    const blogComponent = shallow(<Blog ownProps={ownProps}/>)
    let maindiv = blogComponent.find('.namediv')
    console.log(maindiv.text())
    expect(maindiv.text()).toBe('title VB')
  })

  // After exercise seven this functionality was changed
  // it('after clicking name the details are displayed', () => {
  //   const blog = {
  //     title: 'title',
  //     author: 'VB',
  //     url: 'www',
  //     likes: 5,
  //     adder: 'user',
  //     blogid: 100
  //   }
  //   const mockHandler = jest.fn()

  //   const ownProps = {
  //     bShowAll: true,
  //     blog:blog,
  //     parentRender:mockHandler
  //   }

  //   const blogComponent = shallow(<Blog ownProps={ownProps}/>)
  //   let maindiv = blogComponent.find('.namediv')
  //   console.log(maindiv.text())
  //   expect(maindiv.text()).toBe('title VB')
  //   const nameDiv = blogComponent.find('.namediv')
  //   console.log(nameDiv.text())
  //   nameDiv.simulate('click')
  //   maindiv = blogComponent.find('.namediv')
  //   console.log(maindiv.text())
  //   expect(maindiv.text()).toBe('title VBwww5 likeslikeadded by: delete')
  // })
})