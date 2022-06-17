import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Books from "./features/book/books";
import BookPages from "./features/book/book_pages";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/read_book/:id" element={<BookPages />} />
          {/* <Route path="/123">read_book
          <BookPages />
        </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
