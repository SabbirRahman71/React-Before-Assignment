const Card = () => {
  console.log();
  return (
    <div>
      <div className="card">
        <img
          className="card-img"
          src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          alt=""
        />
        <h1>Test Test</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, id
          eligendi minus beatae rerum dolorem.
        </p>
        <div className="card-footer">
          <h1>520 $</h1>
          <button>Add to cart</button>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Card;
