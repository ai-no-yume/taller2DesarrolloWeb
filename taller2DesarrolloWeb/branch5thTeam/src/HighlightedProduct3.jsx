import picture from './assets/coffee.jpg'

function HighlightedProducts () {

    return (
        <div className="card">
        <img className="card-image" src={picture} alt="Product Picture" />
        <h2 className="card-title">Coffee</h2>
        <p className="card-text">The third most highlighted product of the store</p>
      </div>
    )
}

export default HighlightedProducts