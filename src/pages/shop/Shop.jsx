import { PRODUCTS } from '../../products.jsx';
import { Product } from './product.jsx';
import './shop.css';

export const Shop = () => {
	return (
		<div className='shop'>
			<div className='shop-title'>
				<h1>Mateusz Krochmal Shop</h1>
			</div>
			<div className='products'>
				{PRODUCTS.map((product) => (
					<Product key={product.id} data={product} />
				))}
			</div>
		</div>
	);
};
