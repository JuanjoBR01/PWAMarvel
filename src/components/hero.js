function Hero(props) {
    console.log(props);
    console.log(props.hero.thumbnail.path);

    return (
      <div className="row">
        <div className="col-10">
          <div className="row">
            <div className="col-3 bg-secondary">
              <h3>{props.hero.name}</h3>
            </div>
            <div className="col-1"></div>
            <div className="col-8 bg-secondary">
                <img src = {props.hero.thumbnail.path + "." + props.hero.thumbnail.extension} alt={props.hero.name}></img>
              <p>{props.hero.description}</p>
            </div>
          </div>
          <br></br>
        </div> 
      </div>
    );
  }
  
  export default Hero;