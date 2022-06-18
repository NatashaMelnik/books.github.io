// import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { texts } from "./text";

const ListenBook = () => {
  const { id } = useParams();

  const [page, setPage] = useState(0);
  const [pageText, setText] = useState("");

  useEffect(() => {
    var currentPage = localStorage.getItem("page0");

    if (currentPage) {
      setPage(parseInt(currentPage, 10));
    }
    // setInterval(tick, 3000);
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

  //   let [a, setA] = useState(0);
  let a = page;

  function tick() {
    console.log("in tick");
    let element = "";
    let temp = a;
    let lastIndex = 0;
    // setA(a + 1);
    a = a + 1;
    // element = "<div>" + pages[a] + "</div>";
    // document.getElementById("qwe").innerHTML = element;

    function colorWord() {
      console.log("incolorWord");
      let res = [];
      let pageWords = pages[a].split(" ");
      console.log(pageWords.length);
      for (let i = 0; i < pageWords.length; i++) {
        let d = "";
        if (i === lastIndex) {
          d =
            "<span style='margin-left: 10px;'>" +
            pageWords[i] +
            " " +
            "</span>";
        } else {
          d =
            "<span style='color:grey; margin-left: 10px;'>" +
            pageWords[i] +
            " " +
            "</span>";
        }
        res.push(d);
      }
      res = res.join(" ");
      //   console.log(res);
      document.getElementById("qwe");
      document.getElementById("qwe").innerHTML = "";
      document.getElementById("qwe").innerHTML = res;
      lastIndex = lastIndex + 1;
    }

    let c = setInterval(colorWord, 500);
  }

  setInterval(tick, 44000);

  return (
    <div>
      <div
        id="qwe"
        style={{
          display: "flex",
          //   width: "60%",
          flexWrap: "wrap",
          objectFit: "fill",
        }}
      ></div>
    </div>
  );
};

export default ListenBook;
