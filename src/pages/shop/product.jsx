export const Product = (props) => {
	const { id, productName, price, productImage } = props.data;
	return (
		<div className='product'>
			<img src={productImage} />
			<div className='description'>
				<p>
					<b>{productName}</b>
				</p>
				<p>${price}</p>
			</div>
			<button className='add-to-cart-btn'>Add To Cart</button>
		</div>
	);
};
