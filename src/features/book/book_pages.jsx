import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { texts } from "./text";

const BookFragment = () => {
  const { id } = useParams();

  const [page, setPage] = useState(0);

  useEffect(() => {
    var currentPage = localStorage.getItem("page0");

    if (currentPage) {
      setPage(parseInt(currentPage, 10));
    }
  });

  let book = texts[+id].text;
  let pages = [];

  if (book) {
    let wordsArr = book.split(" ");
    for (let i = 0; i < wordsArr.length; i++) {
      let onePage = [];
      for (let j = 0; j < 88; j++) {
        onePage.push(wordsArr[i]);
        i++;
      }
      pages.push(onePage.join(" "));
    }
    localStorage.setItem("all_page0", pages.length + "");
  }

  function changePage(i) {
    setPage(i);
    localStorage.setItem("page0", i + "");
  }

  return (
    <div>
      {pages ? (
        <>
          <Swiper
            initialSlide={+localStorage.getItem("page0")}
            onSlideChange={(swiper) => {
              changePage(swiper.realIndex);
            }}
          >
            {pages.map((i, el) => {
              return <SwiperSlide>{pages[el]}</SwiperSlide>;
            })}
          </Swiper>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default BookFragment;
