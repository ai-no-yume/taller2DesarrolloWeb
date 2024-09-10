import picture from './assets/banana.jpg'

function HighlightedProducts () {

    return (
        <div className="card">
        <img className="card-image" src={picture} alt="Banana Picture" />
        <h2 className="card-title">Banana</h2>
        <p className="card-text">The most highlighted product of the store</p>
      </div>
    )
}

export default HighlightedProducts