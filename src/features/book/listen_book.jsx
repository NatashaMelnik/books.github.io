// import { Swiper, SwiperSlide } from "swiper/react";
import React, { Component } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
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

  function speakText(tt) {
    // stop any speaking in progress
    // window.speechSynthesis.cancel();
    // speak text
    // const text = textEl.value;
    // const utterance = new SpeechSynthesisUtterance("tt  ey ey5 eyt rurty  ru");
    // utterance.lang = "en-US";
    // window.speechSynthesis.speak(utterance);
  }

  let q = 1;

  function tick() {
    // console.log("in tick");
    let element = "";
    let temp = a;

    // setA(a + 1);
    a = a + 1;
    let res = [];
    // const pagesA = pages[a - 1];
    const pagesA = pages[0];
    let pageWords = pagesA.split(" ");
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

    const utterance = new SpeechSynthesisUtterance(pagesA);
    utterance.lang = "en-US";
    window.speechSynthesis.speak(utterance);
    let lastIndex = 0;

    let elements = $("#qwe").children();

    function colorWord() {
      for (let i = 0; i < elements.length; i++) {
        if (i === lastIndex) {
          $(elements[i]).css("color", "black");
        } else {
          $(elements[i]).css("color", "#C0C0C0");
        }
      }

      lastIndex = lastIndex + 1;
    }

    let c = setInterval(colorWord, 250);
    setPage(a);
    localStorage.setItem("page0", page + "");
  }

  setInterval(tick, 22000); // 22000

  return (
    <div>
      <div
        id="qwe"
        style={{
          display: "flex",
          flexWrap: "wrap",
          objectFit: "fill",
          marginTop: "60px !important",
        }}
      ></div>
    </div>
  );
};

export default ListenBook;
