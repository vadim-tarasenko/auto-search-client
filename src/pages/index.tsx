import styled from 'styled-components';

const Root = styled.div`
  background-color: ${(props) => props.theme.palette.general['30']};
`;

function Home() {
  return <Root>app</Root>;
}

export default Home;
