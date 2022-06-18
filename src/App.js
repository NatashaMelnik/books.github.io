import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Books from "./features/book/books";
import BookPages from "./features/book/book_pages";
import ListenBook from './features/book/listen_book.jsx';

function App() {
  if (!localStorage.getItem("page1")) {
    localStorage.setItem("page1", 0 + "");
  }
  if (!localStorage.getItem("page0")) {
    localStorage.setItem("page0", 0 + "");
  }
  if (!localStorage.getItem("page3")) {
    localStorage.setItem("page3", 0 + "");
  }
  if (!localStorage.getItem("all_page1")) {
    localStorage.setItem("all_page1", 100 + "");
  }
  if (!localStorage.getItem("all_page0")) {
    localStorage.setItem("all_page0", 100 + "");
  }
  if (!localStorage.getItem("all_page3")) {
    localStorage.setItem("all_page3", 100 + "");
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/read_book/:id" element={<BookPages />} />
          <Route path="/listen_book/:id" element={<ListenBook />} />

          {/* <Route path="/123">read_book
          <BookPages />
        </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
