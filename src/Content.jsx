import { useState } from 'react';

const Content = () => {
	const [name, setName] = useState('John');
	const [count, setCount] = useState(0);

	const handleClick = () => {
		const names = ['Ngoy', 'Banza', 'Malkia'];
		const int = Math.floor(Math.random() * names.length);
		setName(names[int]);
	};

	const handleCount = () => {
		setCount(count + 1);
	};
	return (
		<main>
			<p>
				hello {name} {count}
			</p>
			<button onClick={handleClick}>Click it!</button>
			<button onClick={handleCount}>Click Count!</button>
		</main>
	);
};

export default Content;
