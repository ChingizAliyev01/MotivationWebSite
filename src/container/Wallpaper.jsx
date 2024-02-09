import React, { useEffect, useState } from 'react';

const Wallpaper = () => {
  const [wallpapers, setWallpapers] = useState([]);

  useEffect(() => {
    fetch('./src/Wallpaper.json')
      .then((response) => response.json())
      .then((data) => setWallpapers(data))
      .catch((error) => console.error('Error fetching wallpapers:', error));
  }, []); 

  return (
    <div className="container-wp h1 mt-5 text-center">
            <h1 className="container-wallpaper-ms display-4 mb-5">Divar Kağızları</h1>
      <div className=".container-wallpaper1 row row-cols-2 row-cols-md-3 g-4">
        {wallpapers.map((wallpaper, index) => (
          <div key={index} className="col">
            <div className="card container-wallpaper">
              <img src={wallpaper.src} className="card-img-top" alt={`Wallpaper ${index + 1}`} />
              <div className="card-body text-center">
                <a href={wallpaper.src} 
                  download={`Wallpaper${index + 1}.jpg`}
                  className="btn btn-wp btn-primary">Şəkili Yüklə</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wallpaper;