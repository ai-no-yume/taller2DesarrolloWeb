import picture from './assets/watermelon.jpg'

function HighlightedProducts () {

    return (
        <div className="card">
        <img className="card-image" src={picture} alt="Watermelon Picture" />
        <h2 className="card-title">Watermelon</h2>
        <p className="card-text">The second most requested and highlighted product of the store</p>
      </div>
    )
}

export default HighlightedProducts