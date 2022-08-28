import "./Shortener.scss";
import axios from "axios";
import { useState, useRef } from "react";
function Shortener() {
  const getLocalStorageLong = () => {
    let links = localStorage.getItem("long_links");
    if (links) {
      return JSON.parse(localStorage.getItem("long_links"));
    } else {
      return [];
    }
  };

  const getLocalStorageShort = () => {
    let links = localStorage.getItem("short_links");
    if (links) {
      return JSON.parse(localStorage.getItem("short_links"));
    } else {
      return [];
    }
  };

  const [links, setLinks] = useState(getLocalStorageLong());
  const [shortLinks, setShortLinks] = useState(getLocalStorageShort());
  const searchInput = useRef();
  /* 
  useEffect(() => {
    if (shortLinks !== getLocalStorageShort()) {
      localStorage.setItem("long_links", JSON.stringify(links));
      localStorage.setItem("short_links", JSON.stringify(shortLinks));
    }
  }, [shortLinks, links]); */

  const setLocalStorage = (longs, shorts) => {
    console.log(longs);
    localStorage.setItem("long_links", JSON.stringify(longs));
    localStorage.setItem("short_links", JSON.stringify(shorts));
  };

  const handleShorten = async () => {
    if (searchInput.current.value) {
      getShortenLink(searchInput.current.value);
    } else {
      searchInput.current.classList.add("error");
    }
  };

  const getShortenLink = async (link) => {
    try {
      const res = await axios.post(
        `https://api.shrtco.de/v2/shorten?url=${link}`
      );
      const { short_link } = res.data.result;
      searchInput.current.classList.remove("error");
      searchInput.current.value = "";

      const longs = [...links, link];
      const shorts = [...shortLinks, short_link];
      setLinks(longs);
      setShortLinks(shorts);
      setLocalStorage(longs, shorts);
    } catch (error) {
      searchInput.current.classList.add("error");
      console.error("There was an error!", error);
    }
  };
  const handleCopy = (shortlink) => {
    navigator.clipboard.writeText(shortlink);
  };
  const changeCopy = (e) => {
    [...document.querySelectorAll(".copy-button")].map((element) => {
      element.innerHTML = "Copy";
      element.classList.remove("copied");
      return true;
    });
    e.target.innerHTML = "Copied!";
    e.target.classList.add("copied");
  };
  var i = -1;
  return (
    <div className="container shortener-container">
      <div className="shortener">
        <input
          id="search-bar"
          type="text"
          name="link"
          placeholder="Shorten a link here..."
          ref={searchInput}
        />
        <button onClick={handleShorten}>Shorten It!</button>
      </div>
      <div className="url_list">
        {shortLinks.map((link) => {
          i++;
          return (
            <div className="url-row" key={i}>
              <span className="long">{links[i]}</span>

              <span className="short">{link}</span>
              <button
                className="copy-button"
                onClick={() => {
                  handleCopy(link);
                }}
                onMouseUp={changeCopy}
              >
                Copy
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Shortener;
