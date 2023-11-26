import style from "../Styles/github.module.css";
import { FaAngleDown, FaSearch } from "react-icons/fa";
import cartoon from "../Components/githubhomepic.png";
import { useEffect, useState } from "react";

function Github() {
  const [height, setHeight] = useState(0);
  const [height1, setHeight1] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const newHeight = Math.min(300, window.scrollY);
      setHeight(newHeight);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll1 = () => {
      const newHeight = Math.min(650, window.scrollY);
      setHeight1(newHeight);
    };

    window.addEventListener("scroll", handleScroll1);

    return () => {
      window.removeEventListener("scroll", handleScroll1);
    };
  }, []);

  return (
    <div className={style.body}>
      {/* navbar which showing logo, button's and search box */}
      <div className={style.navbar}>
        {/* navbar left side box */}
        <div className={style.navbar_left}>
          {/* github logo */}
          <div style={{ width: "7%" }}>
            <img
              style={{ width: "100%" }}
              src="https://cdn-icons-png.flaticon.com/128/733/733553.png"
              alt="logo"
            />
          </div>
          {/* github pages with link */}
          <div className={style.navbar_left_box_pages}>
            <div className={style.navbar_left_box_pages_link}>
              <p>Product</p>
              <p>
                <FaAngleDown />
              </p>
            </div>
            <div className={style.navbar_left_box_pages_link}>
              <p>Solutions</p>
              <p>
                <FaAngleDown />
              </p>
            </div>
            <div className={style.navbar_left_box_pages_link}>
              <p>Open Source</p>
              <p>
                <FaAngleDown />
              </p>
            </div>
            <div>
              <p>Pricing</p>
            </div>
          </div>
        </div>
        {/* navbar right side box */}
        <div className={style.navbar_right}>
          {/* search box for searching anything */}
          <div className={style.navbar_right_search}>
            <div className={style.navbar_right_search_box}>
              <p style={{ color: "#697795" }}>
                <FaSearch />
              </p>
              <p>Search or jump to...</p>
            </div>
            <div className={style.navbar_right_search_box_right}>/</div>
          </div>
          {/* sign in button */}
          <div className={style.button_signin}>
            <p>Sign in</p>
          </div>
          {/* signup button */}
          <div className={style.button_signup}>
            <p>Sign up</p>
          </div>
        </div>
      </div>

      {/* this is main box which showing images for box placed after navbar */}
      <div className={style.main}>
        {/* left box of class main which shows poster image */}
        <div className={style.main_poster_box}>
          {/* vertical connect line connected to the moon */}
          <div className={style.connect_line}>
            <div></div>
            <div></div>
          </div>
          {/* line arrow placed after vertical connect line */}
          <div className={style.line_arrow}>
            <svg>
              <path d="M15.22 4.97a.75.75 0 0 1 1.06 0l6.5 6.5a.75.75 0 0 1 0 1.06l-6.5 6.5a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L21.19 12l-5.97-5.97a.75.75 0 0 1 0-1.06Zm-6.44 0a.75.75 0 0 1 0 1.06L2.81 12l5.97 5.97a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-6.5-6.5a.75.75 0 0 1 0-1.06l6.5-6.5a.75.75 0 0 1 1.06 0Z"></path>
            </svg>
          </div>
          {/* this is a vertically plain line placed after line arrow */}
          <div className={style.plain_line_middle}></div>
        </div>
        {/* right side box which shows cartoon image */}
        <div className={style.main_image_box}>
          <img src={cartoon} alt="poster" />
        </div>
      </div>

      {/* container which placed in center in page */}
      <div className={style.container}>
        {/* class heading shows heading, paragraph text, input and button in the container box */}
        <div className={style.heading}>
          <h1>Let’s build from here</h1>
          <p>The world’s leading AI-powered developer platform.</p>
          <div className={style.input_box}>
            <div>
              <input type="text" placeholder="Email address" />
              <button>Sign up for Github</button>
            </div>
            <div>
              <h4>Start a free enterprise trial {`->`}</h4>
            </div>
          </div>
        </div>

        <p>
          Trusted by the world’s leading organizations <span>↘︎</span>
        </p>

        {/* this is last box in container class which shows multiple images in horizontally */}
        <div className={style.multi_images}>
          <div>
            <img
              src="https://github.githubassets.com/assets/stripe-e33f3c583b14.svg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://github.githubassets.com/assets/pinterest-20e7451b691f.svg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://github.githubassets.com/assets/kpmg-c249f20c5173.svg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://github.githubassets.com/assets/mercedes-fcf97d2d6ec4.svg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://github.githubassets.com/assets/pg-f1f19955c4e4.svg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://github.githubassets.com/assets/telus-df0c2109df99.svg"
              alt=""
            />
          </div>
        </div>
        <div></div>
      </div>

      {/* class section added height and background color after main class box */}
      <div className={style.section}></div>

      {/* class section_container showing a box which is added animation and there heading is productivity */}
      <div
        className={style.section_container}
        style={{ height: `${height}px`, transition: "height 5s ease" }}
      >
        <div className={style.section_container_first}>
          <div className={style.bag_arrow}>
            <svg>
              <path d="M7.5 1.75C7.5.784 8.284 0 9.25 0h5.5c.966 0 1.75.784 1.75 1.75V4h4.75c.966 0 1.75.784 1.75 1.75v14.5A1.75 1.75 0 0 1 21.25 22H2.75A1.75 1.75 0 0 1 1 20.25V5.75C1 4.784 1.784 4 2.75 4H7.5Zm-5 10.24v8.26c0 .138.112.25.25.25h18.5a.25.25 0 0 0 .25-.25v-8.26A4.235 4.235 0 0 1 18.75 13H5.25a4.235 4.235 0 0 1-2.75-1.01Zm19-3.24v-3a.25.25 0 0 0-.25-.25H2.75a.25.25 0 0 0-.25.25v3a2.75 2.75 0 0 0 2.75 2.75h13.5a2.75 2.75 0 0 0 2.75-2.75Zm-6.5-7a.25.25 0 0 0-.25-.25h-5.5a.25.25 0 0 0-.25.25V4h6Z"></path>
            </svg>
          </div>
          <div>
            <h2>Productivity</h2>
          </div>
        </div>
        <div className={style.section_container_first}>
          <div className={style.arrow_line_box}></div>
          <div className={style.transition_heading}>
            <h3>Accelerate innovation</h3>
            <h3>Our AI-powered platform increases the</h3>
            <h3>pace of software development.</h3>
          </div>
        </div>
      </div>

      {/* adding images which showing code editor and code */}
      <div className={style.codeimage}>
        <img
          src="https://github.githubassets.com/assets/illu-copilot-editor-6474457a5b19.png"
          alt="codeimage"
        />
        <div className={style.codeimagechild}>
          <img
            src="https://github.githubassets.com/assets/illu-copilot-sidebar-3d2efb504577.png"
            alt="codesmallimage"
          />
        </div>
      </div>

      {/* this is second animation box 22% increase text content on UI */}
      <div
        className={style.github_copilot}
        style={{ height: `${height1}px`, transition: "height 15s ease-in-out" }}
      >
        <div className={style.arrow_line_copilot}></div>
        <div>
          <img
            src="https://github.githubassets.com/assets/git-branch-productivity-c304b83d09c7.svg"
            alt=""
          />
        </div>
        <div className={style.copilot_heading}>
          <p>
            GitHub Copilot{" "}
            <span>
              empowers developers to complete tasks 55% faster with
              contextualized AI coding assistance across workflows.
            </span>
          </p>
          <h3>
            <u>Explore GitHub Copilot {`->`}</u>
          </h3>
          <h1>22% increase</h1>
          <p>in developer productivity after three years with GitHub</p>
          <h3>
            <u>Read the report {`->`}</u>
          </h3>
        </div>
      </div>

      {/* this box showing image which contain tables */}
      <div className={style.codeimage}>
        <img
          src="https://github.githubassets.com/assets/issues-plan-2-46d1ce1d4519.png?width=1498&format=webpll"
          alt=""
        />
      </div>
      <br />
      <br />
      <hr />
      {/* create a footer which is placed in the below part of page */}
      <div className={style.footer}>
        <div className={style.footer_box_first}>
          <h1>Github</h1>
          <h5>Subscribe to our developer newsletter</h5>
          <p>
            Get tips, technical guides, and best practices. Once a month. Right
            in your inbox.
          </p>
          <button>Subscribe</button>
        </div>
        <div className={style.footer_box_second}>
          <div>
            <div>
              <a href="#">Product</a>
            </div>
            <div>
              <a href="#">Features</a>
            </div>
            <div>
              <a href="#">Enterprise</a>
            </div>
            <div>
              <a href="#">Copilot</a>
            </div>
            <div>
              <a href="#">Security</a>
            </div>
            <div>
              <a href="#">Pricing</a>
            </div>
            <div>
              <a href="#">Team</a>
            </div>

            <div>
              <a href="#">Resources</a>
            </div>
            <div>
              <a href="#">Roadmap</a>
            </div>
            <div>
              <a href="#">Compare GitHub</a>
            </div>
          </div>
          <div>
            <div>
              <a href="#">Platform</a>
            </div>
            <div>
              <a href="#">Developer API</a>
            </div>
            <div>
              <a href="#">Partners</a>
            </div>
            <div>
              <a href="#">Electron</a>
            </div>
            <div>
              <a href="#">GitHub Desktop</a>
            </div>
          </div>
          <div>
            <div>
              <a href="#">Support</a>
            </div>
            <div>
              <a href="#">Docs</a>
            </div>
            <div>
              <a href="#">Community Forum</a>
            </div>
            <div>
              <a href="#">Professional Services</a>
            </div>
            <div>
              <a href="#">Premium Support</a>
            </div>
            <div>
              <a href="#">Skills</a>
            </div>
            <div>
              <a href="#">Status</a>
            </div>
            <div>
              <a href="#">Contact GitHub</a>
            </div>
          </div>
          <div>
            <div>
              <a href="#">Company</a>
            </div>
            <div>
              <a href="#">About</a>
            </div>
            <div>
              <a href="#">Customer stories</a>
            </div>
            <div>
              <a href="#">Blog</a>
            </div>
            <div>
              <a href="#">The ReadME Project</a>
            </div>
            <div>
              <a href="#">Careers</a>
            </div>
            <div>
              <a href="#">Press</a>
            </div>
            <div>
              <a href="#">Inclusion</a>
            </div>
            <div>
              <a href="#">Social Impact</a>
            </div>
            <div>
              <a href="#">Shop</a>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}
export default Github;
