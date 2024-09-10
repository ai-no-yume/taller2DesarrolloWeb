import cardPic from './assets/'

function HighlightedProducts () {
    return (
        <div className="card">
        <img className="card-image" src={cardPic} alt="Profile Picture" />
        <h2 className="card-title">Banana</h2>
        <p className="card-text"></p>
      </div>
    )
}

export default HighlightedProducts