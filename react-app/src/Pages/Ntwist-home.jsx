
import { useEffect, useState } from "react";
import style from "../Styles/ntwist.module.css"
import { FaTwitter, FaInvision } from "react-icons/fa";
import { BsCaretDownFill } from "react-icons/bs";


function Ntwist() {
  const [navBgColor, setNavBgColor] = useState("transparent");
  const [navColor, setNavColor] = useState("white");
  const [imageBgColor, setImageBgColor] = useState("transparent");

  // handleScroll function for handling scrolling and change navbar text color and background
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setNavBgColor("white");
      setNavColor("black");
      setImageBgColor("black");
    } else {
      setNavBgColor("transparent");
      setNavColor("white");
      setImageBgColor("transparent");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={style.box}>
      {/* class main contain big poster image which have position relative with class navbar and class poster */}
      <div className={style.main}>
        <img
          src="https://img.freepik.com/free-photo/sunshine-clouds-sky-during-morning-background-blue-white-pastel-heaven-soft-focus-lens-flare-sunlight-abstract-blurred-cyan-gradient-peaceful-nature-open-view-out-windows-beautiful-summer-spring_1253-1092.jpg?size=626&ext=jpg&ga=GA1.1.1056998353.1659457435&semt=ais"
          alt="main"
        />
      </div>
      {/* navbar for home page which contain website logo and pages link*/}
      <div
        className={style.navbar}
        style={{ backgroundColor: navBgColor, color: navColor }}
      >
        {/* navbar image logo */}
        <div className={style.nav_box_first}>
          <img
            src={
              imageBgColor == "black"
                ? "https://ntwist.com/wp-content/uploads/2021/12/ntwist-logo-dark.png"
                : "https://ntwist.com/wp-content/uploads/2021/12/ntwistlight.png"
            }
            alt="logo"
          />
        </div>
        {/* navbar page link */}
        <div className={style.nav_box_second}>
          <p>Home</p>
          <p className={style.popup}>
            Industries{" "}
            <span>
              <BsCaretDownFill />
            </span>
          </p>
          {/* box hover for Industries */}
          <div className={style.boxhover}>
            <p>Sustainability</p>
            <p>Mineral Processing</p>
            <p>Mine-To-Mill-To-Mine Optimization</p>
            <p>Oil & Gas</p>
          </div>
          <p>AI Software</p>
          <p>Blog</p>
          <p>Contact Us</p>
        </div>
      </div>

      {/* poster image content with box, headings and image*/}
      <div className={style.poster}>
        {/*below box contain poster title and button  */}
        <div className={style.poster_box_first}>
          
            <h1 className={style.poster_box_first_heading}>Data-powered solutions for Industrial Excellence</h1>
          
          <button>Read More</button>
        </div>
        {/* below box contain image inside poster */}
        <div className={style.poster_box_second}>
          <img
            src="https://ntwist.com/wp-content/uploads/2023/01/home-image-icons-v6.png"
            alt="poster-small-img"
          />
        </div>
      </div>
      {/* left side box which contain country flag's and name's at fixed position */}
      <div className={style.countrybox}>
        <img
          src="https://ntwist.com/wp-content/plugins/gtranslate/flags/svg/en.svg"
          alt="country"
        />
        <h3>EN</h3>
        <h3>
          <BsCaretDownFill />
        </h3>
      </div>
      {/* container for boxes which contain image, title, paragraph and button */}
      <div className={style.container}>
        {/* first box showing information about mine optimization */}
      
          <div className={style.container_box_mine}>
            <div className={style.container_box_title}>
              {/* heading of box */}
              <h1>Mine-To-Mill-To-Mine Optimization</h1>
              {/* paragraph of box */}
              <p>
                NTWIST’s newest product unlocks up to $250/oz in previously
                inaccessible value in open pit gold mines by connecting siloed
                data sources like block models, fleet management systems,
                stockpile surveys, and plant instruments. This allows your
                company to better track material flow, and feed properties,
                identify plan/production discrepancies, and correct resource
                models and production plans.
              </p>
              <br />
              <button>Read More</button>
            </div>
            <div className={style.container_box_image}>
              {/* image of box */}
              <img
                src="https://ntwist.com/wp-content/uploads/2023/01/iStock-1339284457-2048x1365.jpg"
                alt="mine"
              />
            </div>
          </div>
      
        {/* second box showing information about sustainability */}
        
          <div className={style.container_box_sustain}>
            <div className={style.container_box_image}>
              <img
                src="https://ntwist.com/wp-content/uploads/2021/12/iStock-1284372575.jpg"
                alt="sustain"
              />
            </div>
            <div className={style.container_box_title}>
              <h1>Sustainability</h1>
              <p>
                Environmental stewardship is a priority for NTWIST. We help our
                customers to minimize their sustainability impact on the planet.
                Emissions or environmental targets are used alongside
                productivity targets to define success for our customers.
              </p>
              <p>
                With the increasing relevance of carbon accounting and emissions
                tracking, NTWIST offers a suite of tools to increase visibility
                into environmental performance and help processing plants track,
                manage, optimize, and report key metrics.
              </p>
              <button>Read More</button>
            </div>
          </div>
   
        {/* third box showing information about mineral processing */}
       
          <div className={style.container_box_mineral}>
            <div className={style.container_box_title}>
              <h1>Mineral Processing</h1>
              <p>
                NTWIST offers a number of solutions for mills, concentrators,
                and leach plants. Our solutions help operations to reduce the
                effect of feed variability, avoid downtime and increase peak
                throughput while decreasing energy and reagent consumption.
              </p>
              <button>Read More</button>
            </div>
            <div className={style.container_box_image}>
              <img
                src="https://ntwist.com/wp-content/uploads/2021/12/iStock-1322302283.jpg"
                alt="mineral"
              />
            </div>
          </div>
    
        {/* fourth box showing information about oil and gas */}
        
          <div className={style.container_box_oil}>
            <div className={style.container_box_image}>
              <img
                src="https://ntwist.com/wp-content/uploads/2022/03/2021-02-oil-and-gas-digital-hero-e1648984580884.png"
                alt="oil&gas"
              />
            </div>
            <div className={style.container_box_title}>
              <h1>Oil & Gas</h1>
              <p>
                Oil and Gas plants require a high level of control and
                robustness in their operation due to the high risks to people
                and environment.{" "}
              </p>
              <p>
                NTWIST helps Oil & Gas customers to analyze historical data,
                identify opportunities for process control improvements, and
                reduce variability in any part of the process, thus providing
                enhanced reliability and safety.
              </p>
              <button>Read More</button>
            </div>
          </div>
        
      </div>
      {/* footer which contain information about country, pages link and copyright */}
      <div className={style.footer}>
        <img
          src="https://ntwist.com/wp-content/uploads/2021/12/ntwistlight.png"
          alt="footer-img"
        />
        <div className={style.footer_pages}>
          <h6>Home</h6>
          <h6>About Us</h6>
          <h6>Contact Us</h6>
          <h6>Privacy Policy</h6>
          <h6>Sitemap</h6>
        </div>
        <p>9650 20 Ave NW, Edmonton, AB, T6N 1G1, Canada</p>
        <div className={style.footer_pages} style={{ marginTop: "-20px" }}>
          <h6>
            <FaTwitter />
          </h6>
          <h6>
            <FaInvision />
          </h6>
        </div>
        <p>© 2022. Ntwist Inc.</p>
      </div>
    </div>
  );
}

export default Ntwist;