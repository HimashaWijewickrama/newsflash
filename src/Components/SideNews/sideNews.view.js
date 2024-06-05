import { Button, Card, Col, Container, ListGroup } from "react-bootstrap";
import SubTitleText from "../../SubComponents/subtitleText.view";

export default function SideNewsView({ newsWithDates, error, loading }) {
  if (loading) {
    return <p>Loading news...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const topfourNews = newsWithDates.slice(0, 4);

  

  return (
    <Container fluid>
      <SubTitleText subtitle={"Wall Street articles"}/>
        {topfourNews.map(({article,date}, index) => (
          <Col key={index}>
            <Card style={{ width: "25rem" }}
            >
              <Card.Img variant="top" src={article.urlToImage || "https://images.unsplash.com/photo-1510265382668-7b564935d7b5?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
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
                      <i>Last updated at {date.toLocaleString()}</i>
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
