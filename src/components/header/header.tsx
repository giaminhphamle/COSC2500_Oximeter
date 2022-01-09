import { FC } from "react";
import { Link } from "react-router-dom";
import HeaderProps from "./dto";
import Styles from './header.module.css';

const Header: FC<HeaderProps> = ({ items }: HeaderProps): JSX.Element => {
	return (
		<nav className={`py-4 px-5 ${Styles.navbar}`}>
            <div className={Styles.space} />
			<ul className={`${Styles.menu}`}>
				{items.map((value, key) => {
					return (
						<li className={`mx-4`} key={value.text + key}>
							<Link className={`${Styles.menuItem}`} to={value.link}>{value.text}</Link>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};

export default Header;
