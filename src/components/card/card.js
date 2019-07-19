'use strict';

const e = React.createElement;

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    return(
        <div className="col-md-12 col-lg-3 col-xl-2 mb-2">
        <div className="card border-0 shadow-lg bg-c-dark text-light js-tilt js-tilt-glare wow fadeInUp" data-tilt>
            <img className="card-img-top"
                src={`${this.props.imageUrl}`}
                alt={`${this.props.imageAlt}`}></img>
            <div className="card-body">
                <h4 className="card-title display-5 text-uppercase effra"><i
                        className="fas fa-camera fa-md text-dark"></i> {this.props.title}</h4>
                <p className="card-text text-light">{this.props.description}
                    <a type="button" href={`${this.props.url}`} className="btn btn-dark ml-5 float-right">See
                        More</a></p>

            </div>
        </div>
    </div>
    );
  }
}

export default Card;
// let domContainer = document.querySelector('#recentProjects');
// ReactDOM.render(<Card imageUrl="" imageAlt="" title="Project 1" description="none"/>, domContainer);