import React from "react"
import styled from "styled-components"
import moment from "moment"
import { Link } from "gatsby"

const Li = styled.li`
  list-style: none;
`

const LiInner = styled(Link)`
  width: 100%;
  padding: 20px;
  box-shadow: 1px 2px 4px -1px rgba(51, 51, 51, 1);
  background: ${props =>
    props.latest
      ? props.theme.latestArticleBackground
      : props.theme.articleBackground};
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
    color: ${props => (props.latest ? "cornflowerblue" : "#ff4f4f")};
  }

  & * {
    flex: 1;
  }

  @media (max-width: 900px) {
    flex-direction: column;

    & h2 {
      text-align: center;
      line-height: 1;
      margin-bottom: 5px;
    }

    & small {
      text-align: center;
      margin-bottom: 10px;
    }
  }
`

const ArticleListItem = ({ article, latest = false }) => {
  const title = article.frontmatter.title
  const slug = article.fields.slug
  const date = moment(article.frontmatter.date).format("DD-MMM-YYYY")
  const excerpt = article.excerpt

  return (
    <Li as={latest ? "div" : "li"}>
      <LiInner to={slug} role="button" latest={latest}>
        <div>
          <h2 className="title">{title}</h2>
          <small>{date}</small>
        </div>
        <div>
          <p>{excerpt}</p>
        </div>
      </LiInner>
    </Li>
  )
}

export default ArticleListItem
