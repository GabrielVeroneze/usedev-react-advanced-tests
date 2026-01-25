import { Outlet } from 'react-router';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Section from '../assets/section.png';

const Layout = () => {
	return (
		<div className='flex flex-col min-h-screen bg-white'>
			<Header />
			<div className='flex flex-col items-start h-40'>
				<img
					src={Section}
					alt='section image'
					className='w-full h-full object-cover'
					style={{ objectFit: 'cover' }}
				/>
			</div>
			<Outlet />
			<Footer />
		</div>
	);
};

export default Layout
