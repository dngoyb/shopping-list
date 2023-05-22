import { FaTrashAlt } from 'react-icons/fa';

const LineItem = ({ item, handleCheck, handleDelete }) => {
	return (
		<li className='item'>
			<input
				type='checkbox'
				checked={item.checked}
				onChange={() => handleCheck(item.id)}
			/>
			<label
				style={item.checked ? { textDecoration: 'line-through' } : null}
				onDoubleClick={() => handleCheck(item.id)}>
				items
			</label>
			<FaTrashAlt
				onClick={() => handleDelete(item.id)}
				role='button'
				tabIndex='0'
			/>
		</li>
	);
};

export default LineItem;
