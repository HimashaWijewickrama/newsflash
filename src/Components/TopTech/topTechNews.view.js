import { Button, Card, Col, Container, Row } from "react-bootstrap";
import SubTitleText from "../../SubComponents/subtitleText.view";

export default function TopTechNewsView({ news, error, loading }) {
  if (loading) {
    return <p>Loading news...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }
  // Get only the first 3 articles
  const topThreeNews = news.slice(0, 3);

  return (
    <Container fluid>
      <Row>
        <SubTitleText subtitle={"top tech news"} />

        {topThreeNews.map((article, index) => (
          <Col md={4} key={index}>
            <Card
              className="feature-card"
              style={{
                width: "18rem",
                height: "35rem",
                overflow: "hidden",
              }}
            >
              <Card.Img
                variant="top"
                src={article.urlToImage}
                style={{ overflow: "hidden", height: "15rem" }}
              />
              <Card.Body style={{ height: "25rem" }}>
                <Card.Title className="fs-6">{article.title}</Card.Title>
                <Card.Text className="fs-6">
                  <small className="text-muted">{article.description}</small>
                </Card.Text>
              </Card.Body>
              <Card.Footer className="text-center">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <cite title="Source Title" className="text-muted">
                      Source: {article.source.name}
                    </cite>
                  </li>
                  <li className="list-group-item">
                    <a
                      href={article.url}
                      className="text-decoration-none"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Button
                        variant="outline-primary"
                        className="btn-sm btn-block align-items-center"
                      >
                        View Full Article
                      </Button>
                    </a>
                  </li>
                </ul>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
