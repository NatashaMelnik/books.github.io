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
  ];

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h5" gutterBottom component="div">
          Мої книги
        </Typography>
      </div>
      {arr?.length ? (
        arr?.map((bookFr, key = "index") => (
          <div key={bookFr.id}>
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
