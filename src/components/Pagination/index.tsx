import React, { useCallback, useEffect, useState } from 'react';
import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaAngleRight,
  FaAngleLeft,
} from 'react-icons/fa';

import { Container, Content } from './styles';

interface Pagination {
  currentPage: number;
  totalPages: number;
  setCurrentPage: (i: number) => void;
}

const Pagination: React.FC<Pagination> = ({
  currentPage,
  totalPages,
  setCurrentPage,
}) => {
  const [pages, setpages] = useState<Array<number>>([]);

  const firstPage = useCallback(() => {
    setCurrentPage(1);
  }, [currentPage]);

  const lastPage = useCallback(() => {
    setCurrentPage(totalPages);
  }, [totalPages]);

  const prevPage = useCallback(() => {
    setCurrentPage(currentPage - 1);
  }, [currentPage]);

  const nextPage = useCallback(() => {
    setCurrentPage(currentPage + 1);
  }, [currentPage]);

  useEffect(() => {
    const maxPages = 5;
    let startPage = 1;
    let endPage = totalPages;
    if (totalPages > maxPages) {
      const maxPagesBeforeCurrentPage = Math.floor(maxPages / 2);
      const maxPagesAfterCurrentPage = Math.ceil(maxPages / 2) - 1;
      if (currentPage <= maxPagesBeforeCurrentPage) {
        endPage = maxPages;
      } else if (currentPage + maxPagesAfterCurrentPage >= totalPages) {
        startPage = totalPages - maxPages + 1;
      } else {
        startPage = currentPage - maxPagesBeforeCurrentPage;
        endPage = currentPage + maxPagesAfterCurrentPage;
      }
    }
    const _pages = Array.from(Array(endPage + 1 - startPage).keys()).map(
      i => startPage + i,
    );
    setpages(_pages);
  }, [totalPages, currentPage]);

  return (
    <Container>
      {totalPages > 0 && (
        <Content>
          {!pages.includes(1) && (
            <FaAngleDoubleLeft className="mr-0" onClick={firstPage} />
          )}
          {currentPage !== 1 && <FaAngleLeft onClick={prevPage} />}
          {pages.map(page => (
            <button
              key={page}
              type="button"
              className={page === currentPage ? 'active' : ''}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          ))}
          {currentPage !== totalPages && <FaAngleRight onClick={nextPage} />}
          {!pages.includes(totalPages) && (
            <FaAngleDoubleRight className="ml-0" onClick={lastPage} />
          )}
        </Content>
      )}
    </Container>
  );
};

export default Pagination;
