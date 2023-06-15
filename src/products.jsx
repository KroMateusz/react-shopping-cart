import IPhone from './assets/1.png';
import Macbook from './assets/2.png';
import CannonM50 from './assets/3.png';
import DenimJacket from './assets/4.png';
import LEDLight from './assets/5.png';
import SpectrumLS from './assets/6.webp';
import TShirt from './assets/7.webp';
import Hat from './assets/8.webp';

// eslint-disable-next-line react-refresh/only-export-components
export const PRODUCTS = [
	{
		id: 1,
		productName: 'IPhone',
		price: 999.0,
		productImage: IPhone,
	},
	{
		id: 2,
		productName: 'Macbook Pro 2022 (M1)',
		price: 1999.0,
		productImage: Macbook,
	},
	{
		id: 3,
		productName: 'Cannon M50 Camera',
		price: 699.0,
		productImage: CannonM50,
	},
	{
		id: 4,
		productName: 'WLS Denim Jacket',
		price: 228.0,
		productImage: DenimJacket,
	},
	{
		id: 5,
		productName: 'Led Light',
		price: 19.99,
		productImage: LEDLight,
	},
	{
		id: 6,
		productName: 'Spectrum LS Tee',
		price: 68.0,
		productImage: SpectrumLS,
	},
	{
		id: 7,
		productName: 'AUTO SERVICE SHIRT by GOLF WANG',
		price: 120.0,
		productImage: TShirt,
	},
	{
		id: 8,
		productName: `DON'T TRIP HAT`,
		price: 40.0,
		productImage: Hat,
	},
];
