import React from 'react'
import {render, mount} from 'enzyme'
import ArticleList from './index'
import articles from '../../fixtures'

describe('Article List', () => {
  it('should render article list', () => {
    const wrapper = render(<ArticleList articles = {articles} />)
    expect(wrapper.find('.article-list__li--enzyme').length).toEqual(articles.length)
  })

  it('all articles should be close by default', () => {
    const wrapper = render(<ArticleList articles = {articles} />)
    expect(wrapper.find('.test__article--body').length).toEqual(0)
  })

  it('should open article on click', () => {
    const wrapper = mount(<ArticleList articles = {articles} />)
    wrapper.find('.test__article--button').at(0).simulate('click')
    expect(wrapper.find('.test__article--body').length).toEqual(1)
  })

  it('should fetch data on mount', () => {
    let triggered
    const wrapper = mount(<ArticleList articles={[]} fetchData = {() => triggered = true} />)
    expect(triggered).toEqual(true)
  })
})