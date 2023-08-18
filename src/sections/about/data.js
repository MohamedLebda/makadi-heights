import commercial from "../../assets/commercial-area.png";
import commercialImg from "../../assets/commercial-area-img.jpg";
import sports from "../../assets/pools.png";
import sportsImg from "../../assets/sports.png";
import kidsArea from "../../assets/kids-areas.png";
import kidsAreaImg from "../../assets/kids-areas-img.png";
import park from "../../assets/central-park.png";
import parkImg from "../../assets/park-img.jpg";
import hotels from "../../assets/hotels.png";
import hotelsImg from "../../assets/hotels-img.jpg";
import medical from "../../assets/medical.png";
import medicalImg from "../../assets/medical-img.png";

const data = [
  {
    id: 1,
    icon: <img src={commercial} alt="commercial areas" />,
    title: "Commercial Areas",
    desc: "Downtown Makadi Heights Mall",
    image: commercialImg,
  },
  {
    id: 2,
    icon: <img src={sports} alt="sports areas" />,
    title: "Sports Facilities",
    desc: "Sports Courts, Fitness Center Water Sports Activities",
    image: sportsImg,
  },
  {
    id: 3,
    icon: <img src={kidsArea} alt="kids areas" />,
    title: "Kids Friendly Areas",
    desc: "Kids Aqua Park Kids Areas",
    image: kidsAreaImg,
  },
  {
    id: 4,
    icon: <img src={park} alt="central park" />,
    title: "Central Park",
    desc: "Far far away, behind the word mountains",
    image: parkImg,
  },
  {
    id: 5,
    icon: <img src={hotels} alt="hotels" />,
    title: "Hotels",
    desc: "Far far away, behind the word mountains",
    image: hotelsImg,
  },
  {
    id: 6,
    icon: <img src={medical} alt="medical facilities" />,
    title: "Medical Facilities",
    desc: "Far far away, behind the word mountains",
    image: medicalImg,
  },
];
export default data;
