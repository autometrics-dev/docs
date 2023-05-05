import Image from 'next/image';
import AutometricsLogo from '../../../public/AutometricsLogo.webp';

const Logo = () => {
	return <Image src={AutometricsLogo} alt="Autometrics Logo" width={168} height={28} />
}

export default Logo;
