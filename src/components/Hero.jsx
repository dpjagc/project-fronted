const Hero = () => {
  return (
    <>
      <div className="header-content">
        <div className="header-content-text">
          <h3 className="header-subtitle">Computer And Laptop</h3>
          <h1 className="header-title">Accessories</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis
            molestiae laboriosam, voluptatum eum exercitationem, deleniti
            temporibus perspiciatis aut porro maiores laborum vitae vel eos quasi
            a minima. Cum, asperiores quas.
          </p>
          <div className="header-content-btns">
            <a href="/" className="btn-primary-full">
              comprar ahora
            </a>
          </div>
        </div>

        <img
          className="header-img"
          src="/images/pct.png"
          width="696"
          height="278"
          alt=""
        />
      </div>

      <section>
        <div className="cards">
          <div className="card">
            <img
              className="menu-mobile-card"
              src="/images/thr.png"
              alt="computer"
            />
            <h5 className="card-title">
              <strong>Computer</strong>
            </h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dicta
              dignissimos dolorum repudiandae ad natus unde magni, quos
              reiciendis. Beatae iste voluptate, ratione dignissimos cupiditate
              velit quos perspiciatis! Sequi, aperiam.
            </p>
          </div>
          <div className="card">
            <img
              className="menu-mobile-card"
              src="/images/thr1.png"
              alt="laptop"
            />
            <h5 className="card-title">
              <strong>Laptop</strong>
            </h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dicta
              dignissimos dolorum repudiandae ad natus unde magni, quos
              reiciendis. Beatae iste voluptate, ratione dignissimos cupiditate
              velit quos perspiciatis! Sequi, aperiam.
            </p>
          </div>
          <div className="card">
            <img
              className="menu-mobile-card"
              src="/images/thr2.png"
              alt="table"
            />
            <h5 className="card-title">
              <strong>Table</strong>
            </h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dicta
              dignissimos dolorum repudiandae ad natus unde magni, quos
              reiciendis. Beatae iste voluptate, ratione dignissimos cupiditate
              velit quos perspiciatis! Sequi, aperiam.
            </p>
          </div>
        </div>
      </section>
    </>

  )
}

export default Hero