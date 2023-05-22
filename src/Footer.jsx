const Footer = ({ numberOfItems }) => {
	return (
		<footer>
			<p>
				You have {numberOfItems} {numberOfItems !== 1 ? ' items' : ' item'}
			</p>
		</footer>
	);
};

export default Footer;
