import "./Shortener.scss";
import axios from "axios";
import { useState, useEffect } from "react";
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
  const [link, setLink] = useState();
  const [links, setLinks] = useState(getLocalStorageLong());
  const [shortLinks, setShortLinks] = useState(getLocalStorageShort());
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    var searchInputx = document.querySelector("#search-bar");
    setSearchInput(searchInputx);
    if (link) {
      getShortenLink();
    }
  }, [link]);

  useEffect(() => {
    if (shortLinks !== getLocalStorageShort()) {
      localStorage.setItem("long_links", JSON.stringify(links));
      localStorage.setItem("short_links", JSON.stringify(shortLinks));
    }
  }, [shortLinks, links]);

  const handleShorten = () => {
    if (searchInput.value) {
      setLink(searchInput.value);
    } else {
      searchInput.classList.add("error");
    }
  };

  const getShortenLink = async () => {
    try {
      const res = await axios.post(
        `https://api.shrtco.de/v2/shorten?url=${link}`
      );
      const { short_link } = res.data.result;
      searchInput.classList.remove("error");
      searchInput.value = "";
      setLinks([...links, link]);
      setShortLinks([...shortLinks, short_link]);
    } catch (error) {
      searchInput.classList.add("error");
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
