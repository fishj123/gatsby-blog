import React from "react"
import styled from "styled-components"
import { StyledLatest } from "./latestArticle"
import moment from "moment"

const LiInner = styled(StyledLatest)`
  list-style: none;
  background: white;
  width: 100%;
  background: #97d0ab;

  & small {
    color: #ff4f4f;
  }
`

const ArticleListItem = ({ article }) => {
  const title = article.node.frontmatter.title
  const slug = article.node.fields.slug
  const date = moment(article.node.frontmatter.date).format("DD-MMM-YYYY")
  const excerpt = article.node.excerpt

  return (
    <li>
      <LiInner to={slug} role="button">
        <div>
          <h2 className="title">{title}</h2>
          <small>{date}</small>
        </div>
        <div>
          <p>{excerpt}</p>
        </div>
      </LiInner>
    </li>
  )
}

export default ArticleListItem
