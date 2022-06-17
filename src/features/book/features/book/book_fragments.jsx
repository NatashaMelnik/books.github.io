import { Swiper, SwiperSlide } from "swiper/react";

const BookFragment = (book, id) => {
  let pages = [];

  if (book) {
    let wordsArr = book.split(" ");
    for (let i = 0; i < wordsArr.length; i++) {
      let onePage = [];
      for (let j = 0; j < 44; j++) {
        onePage.push(wordsArr[i]);
        i++;
      }
      pages.push(onePage.join(" "));
    }
  }

  function changePage(i) {
    console.log(i);
  }

  return (
    <div>
      {pages ? (
        <>
          <Swiper
            initialSlide={0}
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
