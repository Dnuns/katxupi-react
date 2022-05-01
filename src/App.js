import './App.css';
import { Component } from 'react';
import Katxupi from './assets/katxupi.png';

/*-------------- data mock --------------*/

const data = [
  {
    author: "PP",
    text: "Ide em paz!"
  },
  {
    author: "Samuel",
    text: "Programason e sabi moh!"
  },
  {
    author: "Fábio",
    text: "Mind blowing!"
  },
  {
    author: "#44_kotxiposix",
    text: "A Chapa Tá Quente!"
  },
  {
    author: "#44_kotxiposix",
    text: "Som na cache, mão na master!"
  },
  {
    author: "#44_kotxiposix",
    text: "Foca na Baleia!"
  },
  {
    author: "#44_kotxiposix",
    text: "Git Gud!"
  },
  {
    author: "#44_kotxiposix",
    text: "É feio mas é um ser humano!"
  },
  {
    author: "#44_kotxiposix",
    text: "Essas opções são opcionais!"
  },
  {
    author: "King Nox",
    text: "Palminhas! Palminhas!"
  },
  {
    author: "#44_kotxiposix",
    text: "Dança, Ulisses!"
  },
  {
    author: "#44_kotxiposix",
    text: "Em redes está tudo ligado!"
  },
  {
    author: "#44_kotxiposix",
    text: "Six Six Six."
  },
  {
    author: "#44_kotxiposix",
    text: "Kapa, Kapa, Kapa."
  },
  {
    author: "#44_kotxiposix",
    text: "O mais Malandro do Mercado."
  },
  {
    author: "#44_kotxiposix",
    text: "Dja kai!"
  },
  {
    author: "R. Maia",
    text: "Podia ser batata."
  },
  {
    author: "TCV",
    text: "Rita Martins."
  },
  {
    author: "TCV",
    text: "Fredamson Dias."
  },
  {
    author: "#44_kotxiposix",
    text: "Dja funka."
  },
  {
    author: "Fábio",
    text: "Awesome!"
  },
  {
    author: "#44_kotxiposix",
    text: "Katxupi."
  },
  {
    author: "PP",
    text: "Katxupinóquio do diabo."
  }
];

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
      <div class="face unselectable">
        <img src={Katxupi} alt="Katxupinóquio"></img>
      </div>
      <section className="text">
          <Text text={data[random].text} />
          <Author author={data[random].author} />
          <QuoteButton handleNewQuote={this.handleNewQuote} />
        </section>
      </>
    );}
}

export default App;

const Text = ({ text }) => {
  return (
    <h1 id="glitch unselectable">
      <blockquote >
        <q>{text}</q>
      </blockquote>
    </h1>
  );
};

const Author = ({ author }) => {
  return (
    <p id="author">
      <em>{author}</em>
    </p>
  );
};

const QuoteButton = ({ handleNewQuote }) => {
  return (
    <button id="myButton" className="button glitch" onClick={handleNewQuote}>
      Revela-te!
    </button>
  );
};