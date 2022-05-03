import { Component } from 'react';
import { Main} from './components/Main';
import { FaceContainer } from './components/FaceContainer';
import { Katxupi } from './components/Katxupi';
import { QuoteContainer } from './components/QuoteContainer';
import { Text } from './components/Text';
import { Author } from './components/Author';
import { QuoteButton } from './components/QuoteButton';


import data from './data/data'
import katxupi from './assets/katxupi.png';


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
      <Main>
        <FaceContainer>
          <Katxupi src={katxupi} alt='katxupinóquio' />                 
        </FaceContainer>
        <QuoteContainer>
          <Text>
            <q>{data[random].text}</q>
          </Text>
          <Author>
            {data[random].author}
          </Author>
          <QuoteButton onClick={this.handleNewQuote}>
            Revela-te!
          </QuoteButton> 
        </QuoteContainer>
      </Main>
    );
  }
}

export default App;

/*
 <section className='text'>
          <Text text={data[random].text} />
          <Author author={data[random].author} />
          <QuoteButton handleNewQuote={this.handleNewQuote} />
        </section>
*/