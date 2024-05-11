import styled from 'styled-components';

// Create a styled component
const StyledDiv = styled.div`
  color: blue;
  background-color: lightgray;
  padding: 10px;
`;

function StyledComponent() {
  return (
    <StyledDiv>
      This is a div with styled components
    </StyledDiv>
  );
}

export default StyledComponent;