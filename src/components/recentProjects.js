import Card from './card/card';
'use strict';

const e = React.createElement;

class RecentProjects extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    return(
        <div>
            <Card imageUrl="" imageAlt="" title="Project 1" description="none"/>
            <Card imageUrl="" imageAlt="" title="Project 1" description="none"/>
            <Card imageUrl="" imageAlt="" title="Project 1" description="none"/>
            <Card imageUrl="" imageAlt="" title="Project 1" description="none"/>
        </div>
    );
  }
}

let domContainer = document.querySelector('#recentProjects');
ReactDOM.render(<RecentProjects/>, domContainer);