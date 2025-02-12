import FullScreen from './nav/full-screen';
import MobileScreen from './nav/mobile-screen';

/**
 * user header
 * @returns
 */
export default function Header() {
    return (
        <header>
            this is my header
            <FullScreen />
            <MobileScreen />
        </header>
    );
}
