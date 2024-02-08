import React, { useEffect, useState } from 'react';

const Photos = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    // JSON dosyasından verileri çekme
    fetch('./src/Photo.json')
      .then((response) => response.json())
      .then((data) => setPhotos(data))
      .catch((error) => console.error('Error fetching photos:', error));
  }, []); // Sadece bir kere yüklenmesi için boş dependency array kullanılıyor.

  return (
    <div className="container container-photo">
      <h1 className="container-photos-ms display-4 mb-5 text-center">Motivasiya Şəkilləri</h1>
      <div className="row row-cols-2 row-cols-md-3 g-4">
        {photos.map((photo) => (
          <div key={photo.id} className="col">
            <div className="card custom-card">
              <img src={photo.src} className="card-img-top card-img" alt={`Resim ${photo.id}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Photos;