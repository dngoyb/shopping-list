import { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const Content = () => {
	const [items, setItems] = useState([
		{
			id: 1,
			checked: false,
			item: 'Item 1',
		},
		{
			id: 2,
			checked: false,
			item: 'Item 2',
		},
		{
			id: 3,
			checked: false,
			item: 'Item 3',
		},
	]);

	const handleCheck = (id) => {
		const listItems = items.map((item) =>
			item.id === id ? { ...item, checked: !item.checked } : item
		);
		setItems(listItems);
		localStorage.setItem('shoppinglist', JSON.stringify(listItems));
	};
	return (
		<main>
			<ul>
				{items.map(({ id, checked, items }) => (
					<li className='item' key={id}>
						<input
							type='checkbox'
							checked={checked}
							onChange={() => handleCheck(id)}
						/>
						<label
							style={checked ? { textDecoration: 'line-through' } : null}
							onDoubleClick={() => handleCheck(id)}>
							items
						</label>
						<FaTrashAlt role='button' tabIndex='0' />
					</li>
				))}
			</ul>
		</main>
	);
};

export default Content;
