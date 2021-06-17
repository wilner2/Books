import React, { useState } from 'react';
import Modal from 'styled-react-modal';
import Content, { ButtonClose, Container, ContainerBox } from './styles';

export default function index(props) {
  const [opacity, setOpacity] = useState(0);

  function toggleModal() {
    setOpacity(0);
    props.setIsOpen(!props.isOpen);
  }

  return (
    <Modal
      isOpen={props.isOpen}
      onBackgroundClick={toggleModal}
      onEscapeKeydown={toggleModal}
      opacity={opacity}
    >
      <Container>
        <ButtonClose>
          <button type="button" onClick={() => props.setIsOpen(false)}>
            X
          </button>
        </ButtonClose>
        <Content>
          <ContainerBox>{props.children}</ContainerBox>
        </Content>
      </Container>
    </Modal>
  );
}
