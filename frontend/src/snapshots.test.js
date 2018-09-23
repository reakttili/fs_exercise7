import React from 'react'
import SimpleBlog from './components/SimpleBlog'
import { Blog } from './components/Blog'
import renderer from 'react-test-renderer'

//https://benmccormick.org/2016/09/19/testing-with-jest-snapshots-first-impressions/
//https://hackernoon.com/how-to-snapshot-test-everything-in-your-redux-app-with-jest-fde305ebedea
describe('snap', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<SimpleBlog blog="blog" onClick="onclick" >Blog</SimpleBlog>).toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('renders correctly', () => {

    const blog = {
      title: 'title',
      author: 'VB',
      url: 'www',
      likes: 5,
      adder: 'user',
      blogid: 100
    }
    const mockHandler = jest.fn()
    const ownProps = {
      bShowAll: true,
      blog:blog,
      parentRender:mockHandler
    }
    const tree = renderer.create(<Blog ownProps={ownProps} onClick="onclick" >Blog</Blog>).toJSON()
    expect(tree).toMatchSnapshot()
  })

})