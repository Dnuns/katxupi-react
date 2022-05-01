const QuoteButton = ({ handleNewQuote }) => {
    return (
        <button id='myButton' className='button glitch' onClick={handleNewQuote}>
            Revela-te!
        </button>
    );
};


export default QuoteButton;