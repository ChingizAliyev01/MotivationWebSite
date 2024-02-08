import React, { useEffect, useState } from 'react';

const Quotes = () => {
  const [motivationQuotes, setMotivationQuotes] = useState([]);

  useEffect(() => {
    // JSON dosyasından verileri çekme
    fetch('./src/Quotes.json')
      .then((response) => response.json())
      .then((data) => setMotivationQuotes(data))
      .catch((error) => console.error('Error fetching quotes:', error));
  }, []); // Sadece bir kere yüklenmesi için boş dependency array kullanılıyor.

  return (
    <div className="container container-quotes mt-5 text-center">
      <h1 className="container-quotes-ms display-4 mb-5">Motivasiya Sözləri</h1>
      <div className="motivation-quotes">
        {motivationQuotes.map((quote, index) => (
          <div key={index}>
            <p className="lead">{quote}</p>
            {index !== motivationQuotes.length - 1 && <p className="lead dots">...............................</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quotes;
