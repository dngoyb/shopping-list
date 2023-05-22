import { FaTrashAlt } from 'react-icons/fa';

const Content = ({ items, handleCheck, handleDelete }) => {
	// const handleCheck = (id) => {
	// 	const listItems = items.map((item) =>
	// 		item.id === id ? { ...item, checked: !item.checked } : item
	// 	);
	// 	setItems(listItems);
	// 	localStorage.setItem('shoppinglist', JSON.stringify(listItems));
	// };
	// const handleDelete = (id) => {
	// 	const listItems = items.filter((item) => item.id !== id);
	// 	setItems(listItems);
	// 	localStorage.setItem('shoppinglist', JSON.stringify(listItems));
	// };
	return (
		<main>
			{items.length ? (
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
							<FaTrashAlt
								onClick={() => handleDelete(id)}
								role='button'
								tabIndex='0'
							/>
						</li>
					))}
				</ul>
			) : (
				<p style={{ marginTop: '2rem' }}>List is empty</p>
			)}
		</main>
	);
};

export default Content;
