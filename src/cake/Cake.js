const Cake = ({cake}) => {

  return (
    <>
        <h2>{cake.cakeName}</h2>
        <p>Ingredients:</p>
        <ul>
          {cake.ingredients.map((ingredient) => (
            <li>{ingredient}</li>))}
        </ul>
        <p>Price: {cake.price}</p>
        <p>Rating: {cake.rating}</p>

    </>
  )
}

export default Cake;