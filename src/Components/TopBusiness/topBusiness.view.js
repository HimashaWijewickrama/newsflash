import { Button, Card, Col, Container, Row } from "react-bootstrap";
import SubTitleText from "../../SubComponents/subtitleText.view";

export default function TopBusinessView({ news, error, loading }) {
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
        <SubTitleText subtitle={"top business news"} />

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
                src={
                  article.urlToImage ||
                  "https://images.unsplash.com/photo-1579532536935-619928decd08?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                style={{ overflow: "hidden", height: "15rem" }}
              />
              <Card.Body style={{ height: "25rem" }}>
                <Card.Title className="fs-6">
                  {article.title || "Something went wrong..!"}
                </Card.Title>
                <Card.Text className="fs-6">
                  <small class="text-muted">
                    {article.description || "Something went wrong..!"}
                  </small>
                </Card.Text>
              </Card.Body>
              <Card.Footer className="text-center">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">
                    <cite title="Source Title" className="text-muted">
                      Source: {article.source.name}
                    </cite>
                  </li>
                  <li class="list-group-item">
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
