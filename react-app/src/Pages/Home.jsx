import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      {/* created two button for homepage navigation */}
      <div
        style={{
          height: "85vh",
          paddingTop: "150px",
          backgroundColor: "blueviolet",
          color: "white",
        }}
      >
        <h1>Home Page Buttons</h1>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "50px",
            paddingTop: "20px",
          }}
        >
          {/* created Ntwist home page navigation button */}
          <Link to={"/ntwist"}>
            <button
              style={{
                padding: "10px 20px",
                backgroundColor: "#FFFFFF",
                fontSize: "25px",
                fontWeight: "bold",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              ntwist.com
            </button>
          </Link>
          {/* created Github home page navigation button */}
          <Link to={"/github"}>
            <button
              style={{
                padding: "10px 20px",
                backgroundColor: "#FFFFFF",
                fontSize: "25px",
                fontWeight: "bold",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              github.com
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Home;
