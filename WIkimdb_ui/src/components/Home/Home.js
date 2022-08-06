import "./App.css";
import Footers from "../Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import "./css/font-awesome.min.css";
// import "./css/tooplate-gymso-style.css";
import "./css/bootstrap.css";

function Home() {
  return (
    <div>
      <section
        className="hero d-flex flex-column justify-content-center align-items-center mt-4"
        id="home"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto col-12">
              <div className="hero-text mt-5 text-center">
                <h6 className="text-black">
                  Start your dream through exicting films!
                </h6>

                <h1 className="text-black">
                  Discover your imagination with WikImdb
                </h1>

                <a
                  href="films"
                  className="btn custom-btn mt-3 btn-dark text-black"
                >
                  Get started
                </a>

                <a
                  href="#about"
                  className="btn custom-btn btn-danger bordered mt-3"
                >
                  learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="feature">
        <div className="container">
          <div className="row">
            <div className="d-flex flex-column justify-content-center ml-lg-auto mr-lg-5 col-lg-5 col-md-6 col-12">
              <h2 className="mb-3 text-black">New to WikImdb?</h2>

              <h6 className="mb-4 text-black">
                Your membership is up to 2 months FREE ($62.50 per month)
              </h6>

              <p>Do not hesitate because the promotion will not last long.</p>

              <a
                href="user"
                className="btn custom-btn btn-danger bordered bg-color mt-3"
              >
                Sign up now
              </a>
            </div>

            <div className="mr-lg-auto mt-3 col-lg-4 col-md-6 col-12">
              <div className="about-working-hours">
                <div>
                  <h2 className="mb-4 text-black">Hotline </h2>

                  <strong className="d-block text-dark">Sunday : Closed</strong>

                  <strong className="mt-3 d-block text-dark">
                    Monday - Friday
                  </strong>

                  <p>7:00 AM - 10:00 PM</p>

                  <strong className="mt-3 d-block text-dark">Saturday</strong>

                  <p>6:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about section" id="about">
        <div className="container">
          <div className="row">
            <div className="mt-lg-5 mb-lg-0 mb-4 col-lg-5 col-md-10 mx-auto col-12">
              <h2 className="mb-4">Hello, we are WikImdb</h2>

              <p>
                With an aim of providing a website where you can easily keep
                track of any newest films all around the world.
              </p>

              <p>
                If you have any question regarding of the website or our source
                code, please feel free to contact us through the link on your
                right. Thank you.
              </p>
            </div>

            <div className="ml-lg-auto col-lg-3 col-md-6 col-12">
              <div className="team-thumb">
                <img
                  src="data:image/jpeg;base64,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"
                  className="img-fluid"
                  alt="Trainer"
                />

                <div className="team-info d-flex flex-column">
                  <h3>Chi Thanh</h3>
                  <span>Front-end Dev</span>

                  <ul className="social-icon mt-3">
                    <li>
                      <a href="#" className="fa fa-facebook"></a>
                    </li>
                    <li>
                      <a href="#" className="fa fa-instagram"></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mr-lg-auto mt-5 mt-lg-0 mt-md-0 col-lg-3 col-md-6 col-12">
              <div className="team-thumb">
                <img
                  src="https://scontent.fhan15-1.fna.fbcdn.net/v/t1.6435-9/150051768_468305510873619_7702694452899512687_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=174925&_nc_ohc=9Lyghi01WCIAX9i8ILP&_nc_ht=scontent.fhan15-1.fna&oh=00_AT-R866cXI9scnnNkM4Vvt4wBo6MC9Ykrb0qXwGc65IQ-A&oe=62F5762A"
                  className="img-fluid"
                  alt="Trainer"
                />

                <div className="team-info d-flex flex-column">
                  <h3>Minh Dung</h3>
                  <span>Back-end Dev</span>

                  <ul className="social-icon mt-3">
                    <li>
                      <a href="#" className="fa fa-instagram"></a>
                    </li>
                    <li>
                      <a href="#" className="fa fa-facebook"></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="class section" id="class">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-12 text-center mb-5">
              <h6>We recommend</h6>

              <h2>Our mostly viewed films</h2>
            </div>

            <div class="mt-5 mt-lg-0 mt-md-0 col-lg-3 col-md-6 col-12 mb-4">
              <div class="class-thumb">
                <img
                  // Poster film, sau thay link của từng phim là được
                  src="https://imdb-api.com/posters/original/bpjRGwfYJ71bU0hNhLIz7g3t6Oy.jpg"
                  className="img-fluid"
                  id="poster"
                  alt="Class"
                />

                <div class="class-info" style={{ height: 300 }}>
                  {/* Tên phim, bấm vào ra link imdb, thêm href để dẫn link nhé */}
                  <button className="btn btn-lg active btn-danger mt-3 mb-3">
                    <a href="https://www.imdb.com/title/tt0083190/">Thief</a>
                  </button>
                  <br />
                  {/*  Tác giả */}
                  <span>
                    <strong>Directed by</strong> - Ricardo
                  </span>
                  <br />
                  {/* Imdb Rate */}
                  <span>
                    <strong>Imdb Rate:</strong> 7.4
                  </span>
                  <br />
                  <span>
                    <strong>Genre:</strong> Action, Crime, Drama, Thriller
                  </span>
                  <br />
                  <span>
                    <strong>Runtime:</strong> 123
                  </span>
                  <br />
                  <span>
                    <strong>Release Year:</strong> 1981
                  </span>
                  <span>
                    <strong> Movie ID: </strong> tt0083190
                  </span>
                  <br />
                </div>
              </div>
            </div>

            <div class="mt-5 mt-lg-0 mt-md-0 col-lg-3 col-md-6 col-12 mb-4">
              <div class="class-thumb">
                <img
                  // Poster film, sau thay link của từng phim là được
                  src="https://imdb-api.com/posters/original/bWdwEYQQEsz9HuXy5m95z95BYQM.jpg"
                  className="img-fluid"
                  id="poster"
                  alt="Class"
                />

                <div class="class-info" style={{ height: 300 }}>
                  {/* Tên phim, bấm vào ra link imdb, thêm href để dẫn link nhé */}
                  <button className="btn btn-lg active btn-danger mt-3 mb-3">
                    <a href="https://www.imdb.com/title/tt0071075/">The World at War</a>
                  </button>
                  <br />
                  {/*  Tác giả */}
                  <span>
                    <strong>Directed by</strong> - Ricardo Black
                  </span>
                  <br />
                  {/* Imdb Rate */}
                  <span>
                    <strong>Imdb Rate:</strong> 9.2
                  </span>
                  <br />
                  <span>
                    <strong>Genre:</strong> Documentary, History, War
                  </span>
                  <br />
                  <span>
                    <strong>Runtime:</strong> 52
                  </span>
                  <br />
                  <span>
                    <strong>Release Year:</strong> 1973
                  </span>
                  <span>
                    <strong> Movie ID: </strong> tt0071075
                  </span>
                  <br />
                </div>
              </div>
            </div><div class="mt-5 mt-lg-0 mt-md-0 col-lg-3 col-md-6 col-12 mb-4">
              <div class="class-thumb">
                <img
                  // Poster film, sau thay link của từng phim là được
                  src="https://imdb-api.com/posters/original/cN3ijEwsn4kBaRuHfcJpAQJbeWe.jpg"
                  className="img-fluid"
                  id="poster"
                  alt="Class"
                />

                <div class="class-info" style={{ height: 300 }}>
                  {/* Tên phim, bấm vào ra link imdb, thêm href để dẫn link nhé */}
                  <button className="btn btn-lg active btn-danger mt-3 mb-3">
                    <a href="https://www.imdb.com/title/tt0077766/">Jaws 2</a>
                  </button>
                  <br />
                  {/*  Tác giả */}
                  <span>
                    <strong>Directed by</strong> - Ricardo
                  </span>
                  <br />
                  {/* Imdb Rate */}
                  <span>
                    <strong>Imdb Rate:</strong> 8.5
                  </span>
                  <br />
                  <span>
                    <strong>Genre:</strong> Adventure, Horror, Thriller
                  </span>
                  <br />
                  <span>
                    <strong>Runtime:</strong> 116
                  </span>
                  <br />
                  <span>
                    <strong>Release Year:</strong> 1978
                  </span>
                  <span>
                    <strong> Movie ID: </strong> tt0077766
                  </span>
                  <br />
                </div>
              </div>
            </div><div class="mt-5 mt-lg-0 mt-md-0 col-lg-3 col-md-6 col-12 mb-4">
              <div class="class-thumb">
                <img
                  // Poster film, sau thay link của từng phim là được
                  src="https://imdb-api.com/posters/original/fIE3lAGcZDV1G6XM5KmuWnNsPp1.jpg"
                  className="img-fluid"
                  id="poster"
                  alt="Class"
                />

                <div class="class-info" style={{ height: 300 }}>
                  {/* Tên phim, bấm vào ra link imdb, thêm href để dẫn link nhé */}
                  <button className="btn btn-lg active btn-danger mt-3 mb-3">
                    <a href="https://www.imdb.com/title/tt0110912/">Pulp Fiction</a>
                  </button>
                  <br />
                  {/*  Tác giả */}
                  <span>
                    <strong>Directed by</strong> - Ricardo
                  </span>
                  <br />
                  {/* Imdb Rate */}
                  <span>
                    <strong>Imdb Rate:</strong> 7.4
                  </span>
                  <br />
                  <span>
                    <strong>Genre:</strong> Action, Crime, Drama, Thriller
                  </span>
                  <br />
                  <span>
                    <strong>Runtime:</strong> 123
                  </span>
                  <br />
                  <span>
                    <strong>Release Year:</strong> 1981
                  </span>
                  <span>
                    <strong> Movie ID: </strong> tt0083190
                  </span>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footers />
    </div>
  );
}

export default Home;
