/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { GoQuote } from 'react-icons/go';
import Container, {
  ContainerHeader,
  ContentModal,
  BlockModal,
  Description,
  Title,
  Information,
  BlockModalIMG,
} from './styles';
import Modal from '../Modal/index';

export default function index({
  title,
  imageUrl,
  authors,
  publisher,
  pageCount,
  published,
  language,
  isbn13,
  isbn10,
  description,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const toogleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Modal isOpen={isOpen} setIsOpen={toogleOpen}>
        <ContentModal>
          <BlockModalIMG>
            <img src={imageUrl} alt="book" />
          </BlockModalIMG>
          <BlockModal>
            <div>
              <Title>
                <h1>{title}</h1>
                <span>{authors}</span>
              </Title>
              <Information>
                <strong>INFORMAÇÕES</strong>
                <div>
                  {pageCount && (
                    <p>
                      <span>Página</span>
                      <span>{pageCount}</span>
                    </p>
                  )}
                  {publisher && (
                    <p>
                      <span>Editoras</span>
                      <span>{publisher}</span>
                    </p>
                  )}
                  {published && (
                    <p>
                      <span>Publicação</span>
                      <span>{published}</span>
                    </p>
                  )}
                  {language && (
                    <p>
                      <span>Idioma</span>
                      <span>{language}</span>
                    </p>
                  )}
                  {title && (
                    <p>
                      <span>Título Original</span>
                      <span>{title}</span>
                    </p>
                  )}
                  {isbn10 && (
                    <p>
                      <span>ISBN-10</span>
                      <span>{isbn10}</span>
                    </p>
                  )}
                  {isbn13 && (
                    <p>
                      <span>ISBN-13</span>
                      <span>{isbn13}</span>
                    </p>
                  )}
                </div>
              </Information>
              <Description>
                <strong>RESENHA DA EDITORA</strong>
                <div>
                  <GoQuote color="grey" />
                  <span>{description}</span>
                </div>
              </Description>
            </div>
          </BlockModal>
        </ContentModal>
      </Modal>
      <Container
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <img src={imageUrl} alt="" />
        <div>
          <ContainerHeader>
            <strong>{title}</strong>
            <div>
              {authors.map((author) => (
                <span key={author}>{author}</span>
              ))}
            </div>
          </ContainerHeader>
          <div>
            <span>
              {pageCount}
              páginas
            </span>
            <span>
              Editora
              {publisher}
            </span>
            <span>
              Publicado em
              {published}
            </span>
          </div>
        </div>
      </Container>
    </>
  );
}
