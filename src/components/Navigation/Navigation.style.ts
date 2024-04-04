import styled from 'styled-components';

const StyledNavigation = styled.div`
  background-color: #0c273b;
  width: 100vw;
  height: 64px;
  position: fixed;
  top: 0;
  .navigation__item {
    color: #fff;
    font-size: 20px;
    font-weight: 600;
    height: 64px;
    text-align: center;
    line-height: 64px;
    cursor: pointer;
    /* background-color: red; */
  }

  .navigation__item:hover {
    background-color: #004772;
    color: #fff;
  }

  .navigation__create-btn {
    line-height: 64px;
  }
`;

export default StyledNavigation;
