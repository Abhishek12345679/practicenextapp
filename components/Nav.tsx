import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'


export default function Nav() {
    return (
        <nav className={navStyles.nav}>
            <ul className={navStyles.nav}>
                <li>
                    <Link href="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        Shop
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        About
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
