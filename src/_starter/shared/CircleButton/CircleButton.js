import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { getColor } from "../../theme/theme"


export const CircleButton = ({ isDisabled, handleClick, Icon, bgColor, color }) => {
  const SLCircleButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${getColor(bgColor)};
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: none;
    color: ${getColor(color)};
    cursor: pointer;
  `

  return <SLCircleButton disabled={isDisabled} onClick={handleClick}>
    <Icon />
  </SLCircleButton>
}

CircleButton.defaultProps = {
  isDisabled: false,
}

CircleButton.propTypes = {
  isDisabled: PropTypes.bool,
  handleClick: PropTypes.func,
  Icon: PropTypes.func,
}
