import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Article from '../article'
import accordion from '../../decorators/accordion'
import './style.css'

export class ArticleList extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired,

        //from accordion decorator
        openItemId: PropTypes.string,
        toggleItem: PropTypes.func
    }

    componentDidMount() {
        this.props.fetchData && this.props.fetchData()
    }

    render() {
        const { articles, openItemId, toggleItem } = this.props
        const articleElements = articles.map(article =>
            <li className='article-list__li article-list__li--enzyme' key = {article.id}>
                <Article
                    article = {article}
                    onButtonClick = {toggleItem}
                    isOpen = {openItemId === article.id}
                />
            </li>
        )
        return (
            <ul>
                {articleElements}
            </ul>
        )
    }
}

export default accordion(ArticleList)