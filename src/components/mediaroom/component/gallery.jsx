import { GalleryData } from "../../../dummydata";
import { useEffect, useState } from "react";
import "./gallery.css";
import Heading from "../../common/heading/Heading";
// import ReactSimpleImageViewer from "react-simple-image-viewer/dist/types";

function Gallery() {
  const [data, setData] = useState([]);
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    setData(GalleryData);
    setCollection([...new Set(GalleryData.map((item) => item.titile))]);
  }, []);

  const gallery_filter = (itemData) => {
    const filterData = GalleryData.filter((item) => item.titile == itemData);
    setData(filterData);
  };

  return (
    <div className="Gallery">
      <div className="galleryWrapper">
        <div className="filterItem">
          <Heading subtitle="Gallery in YKBUT" title="Image Gallery" />
          <ul>
            <li>
              <button onClick={() => setData(GalleryData)}>All</button>
            </li>
            {collection.map((item) => (
              <li>
                <button
                  onClick={() => {
                    gallery_filter(item);
                  }}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="galleryContainer">
          {data.map((item) => (
            <div key={item.id} className="galleryItem">
              <img src={item.image} />
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
