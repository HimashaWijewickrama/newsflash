import { Button, Card, Col, Container, ListGroup } from "react-bootstrap";
import SubTitleText from "../../SubComponents/subtitleText.view";

export default function SideNewsView({ news, error, loading }) {
  if (loading) {
    return <p>Loading news...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const topfourNews = news.slice(0, 4);

  return (
    <Container fluid>
      <SubTitleText subtitle={"Wall Street articles"}/>
        {topfourNews.map((article, index) => (
          <Col key={index}>
            <Card style={{ width: "25rem" }}
            >
              <Card.Img variant="top" src={article.urlToImage} />
              <Card.Body>
                <Card.Title>{article.title}</Card.Title>
                <Card.Link href={article.url} target="_blank" rel="noreferrer">
                  <Button variant="outline-warning" className="text-center">
                    View Full Article
                  </Button>
                </Card.Link>
              </Card.Body>
              <Card.Footer>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    {" "}
                    <small className="text-muted">
                      <b>Source :</b> {article.source.name}
                    </small>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    {" "}
                    <small className="text-muted">
                      <b>Author :</b> {article.author}
                    </small>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    {" "}
                    <small className="text-muted">
                      <i>Last updated at {article.publishedAt}</i>
                    </small>
                  </ListGroup.Item>
                </ListGroup>
              </Card.Footer>
            </Card>{" "}
            <br />
          </Col>
        ))}
    </Container>
  );
}
