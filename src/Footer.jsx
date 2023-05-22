const Footer = ({ numberOfItems }) => {
	return (
		<footer>
			<p>
				You have {numberOfItems} {numberOfItems > 0 ? ' items' : ' item'} in
				your list
			</p>
		</footer>
	);
};

export default Footer;
