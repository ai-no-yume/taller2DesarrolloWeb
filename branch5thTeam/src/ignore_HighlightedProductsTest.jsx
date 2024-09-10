function HighlightedProducts ({picture}) {

    return (
        <div className="card">
        <img className="card-image" src={picture} alt="Product Picture" />
        <h2 className="card-title">Banana</h2>
        <p className="card-text">The top 1</p>
      </div>
    );
}

export default HighlightedProducts