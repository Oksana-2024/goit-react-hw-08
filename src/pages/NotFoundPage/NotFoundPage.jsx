import Container from "../../components/Container/Container";
import img from "../../assets/images/404-error.jpg";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <Container>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={img} alt="Error 404" width={1200} />
          <h2
            style={{
              color: "var(--dark-blue)",
              textAlign: "center",
              fontWeight: "48px",
              lineHeight: 1.5,
            }}
          >
            Oops! Page Not Found This isn&apos;t the page you&apos;re looking
            for...
            <br /> But you can always use the Force to head back: <br />
            <Link to="/" style={{ color: "var(--blue)" }}>
              Return to Home
            </Link>
          </h2>
        </div>
      </Container>
    </div>
  );
};

export default NotFoundPage;
