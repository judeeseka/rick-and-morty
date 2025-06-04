import React, { useCallback, useEffect, useState } from 'react';
import { Search, Loader2, AlertCircle } from 'lucide-react';
import ListComponent from './ListComponent';
import useDebounce from './components/useDebounce';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState({
    info: {},
    results: []
  });
  const [errMessage, setErrMessage] = useState("")
  const [isLoading, setLoading] = useState(true)
  const debouncedSearchTerm = useDebounce(searchTerm, 300)

  const fetchCharacters = useCallback(async () => {
    setLoading(true);
    setErrMessage('');
    
    const baseUrl = 'https://rickandmortyapi.com/api/character';
    const params = new URLSearchParams();

    if (debouncedSearchTerm) params.append('name', debouncedSearchTerm);
    params.append('page', currentPage.toString());

    const url = `${baseUrl}?${params.toString()}`;

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error('Failed to fetch characters');
      }

      const apiData = await response.json();
      setData(apiData);
    } catch (error) {
      setErrMessage(error.message);
    } finally {
      setLoading(false);
    }
  }, [currentPage, debouncedSearchTerm]);

  useEffect(() => {
    fetchCharacters();
  }, [fetchCharacters]);


  const handleSearch = (value) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  const handleNextPage = () => {
    if (data?.info.next) {
      setCurrentPage(prev => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (data?.info.prev) {
      setCurrentPage(prev => prev - 1);
    }
  };

  if (errMessage) {
    return (
      <div className="error-container">
        <div className="error-card">
          <div className="error-content">
            <AlertCircle className="error-icon" />
            <h2 className="error-title">Oops! Something went wrong</h2>
            <p className="error-message">Failed to fetch characters from the Rick and Morty API</p>
            <button 
            onClick={() => {
              setCurrentPage(1);
              setSearchTerm("");
            }} 
            className="retry-button"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="app-container">
      {/* Header */}
      <div className="header">
        <div className="header-content">
          <div className="header-text">
            <h1 className="main-title">Rick & Morty</h1>
            <p className="subtitle">Character Universe Explorer</p>
          </div>
          
          {/* Search Bar */}
          <div className="search-container">
            <Search className="search-icon" />
            <input
              placeholder="Search for characters..."
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
              className="search-input"
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="main-content">
      {isLoading ? (
          <div className="loading-container">
            <div className="loading-content">
              <Loader2 className="loading-spinner" />
              <p className="loading-text">Loading characters...</p>
            </div>
          </div>
        ) : (
          <>
            {/* Results Info */}
            {data && (
              <div className="results-info">
                <p className="results-text">
                  Showing {data.results.length} of {data.info.count} characters
                  {searchTerm && ` matching "${searchTerm}"`}
                </p>
              </div>
            )}

            {/* Character Grid */}
            <ul className="character-grid">
              <ListComponent characters={data.results} />
            </ul>

            {/* Pagination */}
            {data && data.info.pages > 1 && (
              <div className="pagination">
                <button
                  onClick={handlePrevPage}
                  disabled={!data.info.prev}
                  className="pagination-button prev-button"
                >
                  Previous
                </button>
                
                <span className="page-info">
                  Page {currentPage} of {data.info.pages}
                </span>
                
                <button
                  onClick={handleNextPage}
                  disabled={!data.info.next}
                  className="pagination-button next-button"
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default App;