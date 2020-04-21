import React, { useState } from "react"
import styled from "styled-components"
import { useThemeContext } from "../contexts/themeContext"
import themeLogo from "../images/paint.png"

const StyledC = styled.div`
  position: fixed;
  top: 30px;
  right: 15px;
`

const StyledThemeCircle = styled.div`
  background: white;
  border-radius: 100%;
  padding: 3px;
  width: 50px;
  height: 50px;
  cursor: pointer;
`

const StyledThemesContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 5px;
  padding: 5px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  position: absolute;
`

const StyledButton = styled.button`
  background: 0;
  padding: 3px;
  border: 0;
  color: ${props => props.color};
`

const ThemePicker = () => {
  const { dispatch, themeConstants } = useThemeContext()
  const [showThemes, setShowThemes] = useState(false)
  return (
    <StyledC>
      <div style={{ position: "relative" }}>
        <StyledThemeCircle>
          <img
            onClick={() => setShowThemes(!showThemes)}
            src={themeLogo}
            style={{
              width: "100%",
              height: "100%",
              maxWidth: "100%",
              maxHeight: "100%",
            }}
          />
        </StyledThemeCircle>
        <StyledThemesContainer
          style={{ display: showThemes ? "flex" : "none" }}
        >
          <StyledButton
            color="green"
            onClick={() => dispatch({ type: themeConstants.GREEN })}
          >
            Green
          </StyledButton>
          <StyledButton
            color="pink"
            onClick={() => dispatch({ type: themeConstants.PINK })}
          >
            Pink
          </StyledButton>
          <StyledButton
            color="blue"
            onClick={() => dispatch({ type: themeConstants.BLUE })}
          >
            Blue
          </StyledButton>
          <StyledButton
            color="grey"
            onClick={() => dispatch({ type: themeConstants.LIGHT })}
          >
            Light
          </StyledButton>
          <StyledButton
            color="black"
            onClick={() => dispatch({ type: themeConstants.DARK })}
          >
            Dark
          </StyledButton>
        </StyledThemesContainer>
      </div>
    </StyledC>
  )
}

export default ThemePicker
