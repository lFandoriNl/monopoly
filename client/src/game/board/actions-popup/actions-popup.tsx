import styled from 'styled-components/macro';

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  margin: 1rem;
  padding: 1rem;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  justify-content: flex-end;
`;

const ActionButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #7cf17a;
  border: 2px solid #097d0c;
  border-radius: 5px;
  transition: all 300ms ease-in-out;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: #62c061;
  }
`;

export const ActionsPopup = () => {
  return (
    <Wrapper>
      <ActionButton>Бросить кубики</ActionButton>
    </Wrapper>
  );
};
