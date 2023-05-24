import { useState } from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import AddItem from './AddItem';
import SearchItem from './SearchItem';
import { useEffect } from 'react';

function App() {
	const API_URL = 'http://localhost:3500/items';

	const [items, setItems] = useState([]);
	const [newItem, setNewItem] = useState('');
	const [searchItem, setSearchItem] = useState('');
	const [fetchError, setFetchError] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchItems = async () => {
			try {
				const response = await fetch(API_URL);
				if (!response.ok) throw Error('Did not receive expected error');
				const listItems = await response.json();
				setItems(listItems);
				setFetchError(null);
			} catch (error) {
				setFetchError(error.message);
			} finally {
				setIsLoading(false);
			}
		};

		setTimeout(() => {
			fetchItems();
		}, 2000);
	}, []);

	const setAndSaveItems = (newItems) => {
		setItems(newItems);
	};

	const handleCheck = (id) => {
		const listItems = items.map((item) =>
			item.id === id ? { ...item, checked: !item.checked } : item
		);
		setAndSaveItems(listItems);
	};
	const handleDelete = (id) => {
		const listItems = items.filter((item) => item.id !== id);
		setAndSaveItems(listItems);
	};

	const addItem = (item) => {
		const id = items.length ? items[items.length - 1].id + 1 : 1;
		const myNewItem = { id, checked: false, item };
		const listItems = [...items, myNewItem];
		setAndSaveItems(listItems);
	};
	const handleSubmit = (e) => {
		e.preventDefault();

		if (!newItem) return;
		addItem(newItem);
		setNewItem('');
	};

	return (
		<div className='App'>
			<Header title='Grocery List' />
			<SearchItem searchItem={searchItem} setSearchItem={setSearchItem} />
			<AddItem
				newItem={newItem}
				setNewItem={setNewItem}
				handleSubmit={handleSubmit}
			/>
			<main>
				{isLoading && <p>Loading Items...</p>}
				{fetchError && <p style={{ color: 'red' }}>{`Error: ${fetchError}`}</p>}
				{!fetchError && !isLoading && (
					<Content
						items={items.filter((item) =>
							item.item.toLowerCase().includes(searchItem.toLowerCase())
						)}
						handleCheck={handleCheck}
						handleDelete={handleDelete}
					/>
				)}
			</main>

			<Footer numberOfItems={items.length} />
		</div>
	);
}

Header.defaultProps = {
	title: 'Grocery list',
};

export default App;
