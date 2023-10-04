import Image from "next/image";

export default function Home() {
  return (
    <>
      <nav>
        <Image
          className="logo"
          src="./payeasylogo.png"
          alt="logo"
          height="100"
          width="100"
        />

        <ul className="headerLinks">
          <li>Home</li>
          <li>About us</li>
          <li>Our Features</li>
          <li>Reviews</li>
          <li className="download-btn">Download App</li>
        </ul>
      </nav>
      <main>
        <section className="hero">
          <div>
            <h1>All your credit cards, in one place.</h1>
            <p>join 9M+ members who win rewards and cashbacks everyday</p>
            <button className="download-btn">Download payeasy</button>
          </div>
          <div className="circleParent">
            <div className="circle"></div>
          </div>
        </section>
        <section className="section2">
          <h1>
            We want to make credit card payment, as easy as a few simple taps.
          </h1>
          <div className="process">
            <Image
              src="./assets/faded_circle.png"
              alt="logo"
              height="50"
              width="50"
            />

            <hr />
            <Image
              src="./assets/lock_closed.png"
              alt="logo"
              height="50"
              width="50"
            />
            {/* <Image
              src="./assets/line.png"
              alt="logo"
              height="50"
              width="50"
            /> */}
            <hr />
            <Image
              src="./assets/checkmark-circle.png"
              alt="logo"
              height="50"
              width="50"
            />
          </div>
          <button className="download-btn">Get Started</button>
        </section>

        <section className="feature">
          <div className="feature-data">
            <div className="feature-content">
              <h1>Kakao Wallet</h1>
              <p>
                Use Kakao Wallet, the safe and easy digital wallet offered by
                KakaoTalk.Easily access certificates to issue documents from
                major public websites.
              </p>
            </div>

            <div className="feature-content">
              <h1>Kakao Shopping</h1>
              <p>
                Shop today through KakaoTalkQuickly and easily look through
                products offered on KakaoTalk's fourth tab, Kakao Shopping.
              </p>
            </div>

            <div className="feature-content">
              <h1>Theme</h1>
              <p>
                There are ways to spruce up your KakaoTalk, which you use
                daily.Include your favorite photo and characters to create a
                customized theme and share it with friends
              </p>
            </div>
          </div>

          <div className="feature-visual">
            <div className="mobile-sticky">
              <div className="mobile-screen"></div>
            </div>
          </div>
        </section>

        <section className="section2 section2-2">
          <h1>
            Get interesting information, that your bank doesn’t otherwise give.
          </h1>

          <button className="download-btn">Get Started</button>
        </section>
        <section className="about-us">
          <h1>People, Love Us</h1>
          <div className="stores">
            <div className="app-store">
              <h1 id="rating-value">4.8</h1>
              <h1>app store</h1>
              <Image
                src={"./assets/rating.png"}
                alt="rating"
                className="rating-value-image"
                height={300}
                width={300}
              />
              <button className="download-btn logo-btn">
                {" "}
                <Image
                  src={"./assets/apple.png"}
                  alt="rating"
                  height={40}
                  width={40}
                />
                Download the app
              </button>
            </div>
            <div className="app-store">
              <h1 id="rating-value">4.9</h1>
              <h1>play store</h1>
              <Image
                src={"./assets/rating.png"}
                className="rating-value-image"
                alt="rating"
                height={300}
                width={300}
              />
              <button className="download-btn logo-btn">
                {" "}
                <Image
                  src={"./assets/playstore.png"}
                  alt="rating"
                  height={40}
                  width={40}
                />
                Download the app
              </button>
            </div>
          </div>
          <div className="Testamonials">
            <p>
              "i would say one of the best platforms to manage your credit card
              payments with lot of advantages and rewards. you can even pay rent
              to your owner using credit card. that's really cool. thanks for
              all the awesomeness. keep inventing !!"
            </p>
            <p>-sanjeev kataria</p>
            <Image src={"./assets/switch-tiles.png"} height={100} width={100} />
          </div>
        </section>
      </main>
      <footer>Made with ❤️ by bundlebuild_</footer>
    </>
  );
}
