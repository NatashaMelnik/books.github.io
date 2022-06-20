import BookFragments from "./features/book/book_fragments.jsx";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

const Books = function () {
  let arr = [
    {
      id: 0,
      title: "Le Petit Prince",
      author: "Antoine de Saint-Exupéry",
      image:
        "https://onemorelibrary.com/components/com_djclassifieds/images/item/2786_le_petit_prince_-_antoine_de_saint-exupery_thm.jpg",
      progress: 0,
    },
    {
      id: 1,
      title: "Brotherhood of the Ring",
      author: "J. R. R. Tolkien",
      image:
        "https://dauntbooks.co.uk/wp-content/uploads/2021/02/9780007203543.jpg.webp",
      progress: 0,
    },
    {
      id: 2,
      title: "Jeeves and Wooster",
      author: "P.G. Wodehouse",
      image: "https://images-na.ssl-images-amazon.com/images/I/517MP6PAPRL.jpg",
      progress: 0,
    },
    {
      id: 3,
      title: "Тіні забутих предків",
      author: "Михайло Михайлович Коцюбинський",
      image:
        "https://images.1plus1.video/playlist-1/87804/5a86fd77e8845075339393df392cd9bf.220x330.jpg",
      progress: 0,
    },
    {
      id: 4,
      title: "Les Misérables",
      author: "Victor Hugo",
      image:
        "https://images-eu.ssl-images-amazon.com/images/I/41r1En8hvTL._SX342_SY445_QL70_ML2_.jpg",
      progress: 0,
    },
  ];

  let all0 = +localStorage.getItem("all_page0");
  let all1 = +localStorage.getItem("all_page1");
  let all2 = +localStorage.getItem("all_page2");

  let p0 = +localStorage.getItem("page0");
  let p1 = +localStorage.getItem("page1");
  let p2 = +localStorage.getItem("page2");

  let green = [p0 / all0, p1 / all1, p2 / all2];

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <header>
          <Typography
            variant="h5"
            gutterBottom
            component="h1"
            style={{
              fontSize: "70px",
              fontWeight: "600",
              backgroundImage: "linear-gradient(to left, #553c9a, #b393d3)",
              color: "transparent",
              backgroundClip: "text",
            }}
          >
            Мої книги
          </Typography>
        </header>
      </div>
      {arr?.length ? (
        arr?.map((bookFr, key = "index") => (
          <div key={bookFr.id} style={{ marginBottom: "10px;" }}>
            <Card>
              <CardActionArea>
                <div style={{ display: "flex" }}>
                  <div style={{ minWidth: "27%" }}>
                    <CardMedia
                      component="img"
                      height="140"
                      image={bookFr.image}
                      alt=""
                    />
                  </div>
                  <div>
                    <CardContent>
                      <Link to={`/read_book/${bookFr.id}`} className="active">
                        <Typography gutterBottom variant="h5" component="div">
                          {bookFr.title}
                        </Typography>
                      </Link>
                      <Typography variant="body2" color="text.secondary">
                        {bookFr.author}
                      </Typography>
                      <div
                        style={{
                          display: "flex",
                          position: "absolute",
                          bottom: 0,
                          width: "100%",
                        }}
                      >
                        <div
                          style={{
                            height: "10px",
                            backgroundColor: "#75ff75",
                            width: 60 * green[bookFr.id] + "%",
                          }}
                        ></div>
                        <div
                          style={{
                            height: "10px",
                            backgroundColor: "#C0C0C0",
                            width: 60 - +green[bookFr.id] + "%",
                          }}
                        ></div>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </CardActionArea>
              <CardActions>
                <Link to={`/listen_book/${bookFr.id}`} className="active">
                  <Button size="small" color="primary">
                    Слухати
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </div>
        ))
      ) : (
        <></>
      )}
    </div>
  );
};

export default Books;
