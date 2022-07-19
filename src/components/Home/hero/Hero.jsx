import React from "react";
import "./Hero.css";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import HailIcon from "@mui/icons-material/Hail";
import ApartmentIcon from "@mui/icons-material/Apartment";
import SlowMotionVideoIcon from "@mui/icons-material/SlowMotionVideo";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Hero = () => {
  const [age, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [date, setDate] = React.useState("");
  const handleDate = (event) => {
    setDate(event.target.value);
  };

  const [year, setYear] = React.useState("");
  const handleYear = (event) => {
    setYear(event.target.value);
  };

  const [type, setType] = React.useState("");
  const handleType = (event) => {
    setType(event.target.value);
  };
  return (
    <>
      <div className="hero">
        <div className="wrapper">
          <div className="heroParts">
            <div className="heroPart1">
              <h1>All Your Style</h1>
              <h2>Are Here</h2>
              <p>
                This e-commerce website is a platform where you can order or
                purchase electronic items.You can also find different items.
              </p>
              <div className="hero_btns">
                <button>Explore Now</button>
                <div className="hero_video">
                  <SlowMotionVideoIcon fontSize="large" />
                  <p>Watch a Video</p>
                </div>
              </div>
            </div>
            <div className="heroPart2">
              <img
                src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c94abe57-25f5-4c8d-8c29-0af35f868c57/giannis-dri-fit-mens-basketball-t-shirt-5bHrd3.png"
                alt=""
              />
            </div>
            <div className="heroPart3">
              <div className="year">
                <div className="hero_circle">
                  <CalendarMonthIcon />
                </div>
                <div className="hero_count">
                  <p className="hero_desc_count">1332</p>
                  <p className="hero_desc">year</p>
                </div>
              </div>
              <div className="bids">
                <div className="hero_circle">
                  <HailIcon />
                </div>
                <div>
                  <p className="hero_desc_count">28</p>
                  <p className="hero_desc">bids so far</p>
                </div>
              </div>
              <div className="build">
                <div className="hero_circle">
                  <ApartmentIcon />
                </div>
                <div>
                  <p className="hero_desc_count">United</p>
                  <p className="hero_desc">Origin</p>
                </div>
              </div>
            </div>
          </div>

          <div className="subHero">
            <div>
              <FormControl sx={{ m: 1, minWidth: 170, marginRight: 10 }}>
                <InputLabel id="demo-simple-select-required-label">
                  Location
                </InputLabel>
                <Select
                  labelId="demo-simple-select-required-label"
                  id="demo-simple-select-required"
                  value={age}
                  label="Location"
                  onChange={handleChange}
                >
                  <MenuItem value="#">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Dubai</MenuItem>
                  <MenuItem value={20}>New York</MenuItem>
                  <MenuItem value={30}>Bishkek</MenuItem>
                </Select>
              </FormControl>

              <FormControl sx={{ m: 1, minWidth: 170, marginRight: 10 }}>
                <InputLabel id="demo-simple-select-required-label">
                  Date
                </InputLabel>
                <Select
                  labelId="demo-simple-select-required-label"
                  id="demo-simple-select-required"
                  value={date}
                  label="Date"
                  onChange={handleDate}
                >
                  <MenuItem value="#">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={40}>15-02-2022</MenuItem>
                  <MenuItem value={50}>23-06-2022</MenuItem>
                  <MenuItem value={60}>07-07-2022</MenuItem>
                </Select>
              </FormControl>

              <FormControl sx={{ m: 1, minWidth: 170, marginRight: 10 }}>
                <InputLabel id="demo-simple-select-required-label">
                  Year
                </InputLabel>
                <Select
                  labelId="demo-simple-select-required-label"
                  id="demo-simple-select-required"
                  value={year}
                  label="Year"
                  onChange={handleYear}
                >
                  <MenuItem value="#">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={70}>793AD</MenuItem>
                  <MenuItem value={80}>793AD</MenuItem>
                  <MenuItem value={90}>793AD</MenuItem>
                </Select>
              </FormControl>

              <FormControl
                sx={{
                  m: 1,
                  minWidth: 170,
                  marginRight: 10,
                }}
              >
                <InputLabel id="demo-simple-select-required-label">
                  Type
                </InputLabel>
                <Select
                  labelId="demo-simple-select-required-label"
                  id="demo-simple-select-required"
                  value={type}
                  label="Type"
                  onChange={handleType}
                >
                  <MenuItem value="#">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={100}>Weapons</MenuItem>
                  <MenuItem value={110}>T-Skirts</MenuItem>
                  <MenuItem value={120}>Shoes</MenuItem>
                </Select>
              </FormControl>
            </div>
            <button className="subhero_btn">Search</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
