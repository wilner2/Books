/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { FiLogOut } from 'react-icons/fi';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import Logo from '../../components/Logo/index';
import Container, {
  Header,
  ContainerHeader,
  ListContainer,
  Pagination,
} from './styles';
import { getUser, logout } from '../../services/auth';
import api from '../../services/api';
import Book from '../../components/Books/index';
import loadingGif from '../../assets/images/loading.gif';

export default function index(props) {
  const user = JSON.parse(getUser());
  const [page, setPage] = useState(1);
  const [books, setBooks] = useState([]);
  const [loading, setLoafing] = useState(false);
  const [booksPageTotal, setBooksPageTotal] = useState(1);

  useEffect(() => {
    setLoafing(true);
    api
      .get('books', {
        params: {
          page,
          amount: 12,
        },
      })
      .then((response) => {
        const { data, totalPages } = response.data;
        setBooks(data);
        setBooksPageTotal(Math.ceil(totalPages));
        setLoafing(false);
      });
  }, [page]);
  const nextPage = () => {
    setPage(page + 1);
  };
  const previousPage = () => {
    setPage(page - 1);
  };

  return (
    <Container>
      <Header>
        <ContainerHeader>
          <Logo />

          <div>
            <span>
              Bem vindo,
              <strong>{`${user.name}!`}</strong>
              <button
                type="button"
                onClick={() => {
                  logout();
                  return props.history.push('/home');
                }}
              >
                <FiLogOut size="25" />
              </button>
            </span>
          </div>
        </ContainerHeader>
      </Header>
      <ListContainer>
        {books.length === 0 || loading ? (
          <img src={loadingGif} alt="loading" />
        ) : (
          books.map((book) => (
            <Book
              key={book.id}
              imageUrl={book.imageUrl}
              title={book.title}
              authors={book.authors}
              publisher={book.publisher}
              pageCount={book.pageCount}
              published={book.published}
              language={book.language}
              isbn13={book.isbn13}
              isbn10={book.isbn10}
              category={book.category}
              description={book.description}
            />
          ))
        )}
      </ListContainer>
      <Pagination>
        <strong>{`Página ${page}  de ${booksPageTotal}  `}</strong>
        <button
          type="button"
          disabled={page === 1}
          onClick={previousPage}
          title="Anterior Pagina"
        >
          <GrFormPrevious />
        </button>
        <button
          type="button"
          disabled={page === booksPageTotal}
          onClick={nextPage}
          title="Pagina Próxima"
        >
          <GrFormNext />
        </button>
      </Pagination>
    </Container>
  );
}
