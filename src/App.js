import { Component } from 'react';
import data from './data/data'
import Text from './components/Text';
import Author from './components/Author';
import QuoteButton from './components/QuoteButton';

import Katxupi from './assets/katxupi.png';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data,
      random: 0
    };

    this.handleNewQuote = this.handleNewQuote.bind(this);
  }

  handleNewQuote() {
    this.setState({
      random: Math.floor(Math.random() * data.length)
    });
  }

  render() {
    const { data, random } = this.state;
    return (
      <>      
      <div class='face unselectable'>
        <img src={Katxupi} alt='Katxupinóquio'></img>
      </div>
      <section className='text'>
          <Text text={data[random].text} />
          <Author author={data[random].author} />
          <QuoteButton handleNewQuote={this.handleNewQuote} />
        </section>
      </>
    );}
}

export default App;