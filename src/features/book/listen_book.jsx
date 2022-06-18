// import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { texts } from "./text";
import $ from "jquery";

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

    // setA(a + 1);
    a = a + 1;
    let res = [];
    const pagesA = pages[a];
    let pageWords = pagesA.split(" ");
    console.log(pageWords.length);
    for (let i = 0; i < pageWords.length; i++) {
      let d =
        "<span style='color:grey; margin-left: 10px;'>" +
        pageWords[i] +
        "</span>";

      res.push(d);
    }
    res = res.join(" ");
    document.getElementById("qwe");
    document.getElementById("qwe").innerHTML = "";
    document.getElementById("qwe").innerHTML = res;

    console.log(pagesA);
    let utterance = new SpeechSynthesisUtterance(pagesA);
    utterance.lang = "en-US";
    speechSynthesis.speak(utterance);

    // var voices = speechSynthesis.getVoices();
    // console.log(voices);

    // console.log("sfsdfsfsdf");

    let lastIndex = 0;

    let elements = $("#qwe").children();

    function colorWord() {
      console.log("incolorWord");
      console.log(lastIndex);
      for (let i = 0; i < elements.length; i++) {
        if (i === lastIndex) {
          console.log("in if");
          $(elements[i]).css("color", "black");
        } else {
          $(elements[i]).css("color", "grey");
        }
      }

      lastIndex = lastIndex + 1;
    }

    let c = setInterval(colorWord, 200);
    setPage(a);
    localStorage.setItem("page0", page + "");
  }

  // setInterval(tick, 44000);
  setInterval(tick, 17600);

  return (
    <div>
      <div
        id="qwe"
        style={{
          display: "flex",
          flexWrap: "wrap",
          objectFit: "fill",
        }}
      ></div>
    </div>
  );
};

export default ListenBook;
