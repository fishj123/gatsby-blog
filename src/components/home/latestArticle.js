import React from "react"
import styled from "styled-components"
import moment from "moment"
import { Link } from "gatsby"

export const StyledLatest = styled(Link)`
  width: 100%;
  padding: 20px;
  box-shadow: 1px 2px 4px -1px rgba(51, 51, 51, 1);
  background: antiquewhite;
  display: flex;
  align-items: center;
  margin-bottom: 25px;
  transition: all 0.25s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 1px 5px 4px -1px rgba(51, 51, 51, 1);
  }

  & .title {
    font-size: 2rem;
    font-weight: bold;
  }

  & small {
    display: block;
    font-size: 14px;
    color: cornflowerblue;
  }

  & * {
    flex: 1;
  }
`

const LatestArticle = ({ latestArticle }) => {
  const title = latestArticle.frontmatter.title
  const slug = latestArticle.fields.slug
  const date = moment(latestArticle.frontmatter.date).format("DD-MMM-YYYY")
  const excerpt = latestArticle.excerpt
  return (
    <StyledLatest to={slug} role="button">
      <div>
        <h2 className="title">{title}</h2>
        <small>{date}</small>
      </div>
      <div>
        <p>{excerpt}</p>
      </div>
    </StyledLatest>
  )
}

export default LatestArticle
