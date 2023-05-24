import React from 'react';

const SearchItem = ({ searchItem, setSearchItem }) => {
	return (
		<form action='' className='searchForm' onSubmit={(e) => preventDefault()}>
			<label htmlFor='search'>Search</label>
			<input
				type='text'
				id='search'
				role='searchbox'
				placeholder='Search Items'
				value={searchItem}
				onChange={(e) => setSearchItem(e.target.value)}
			/>
		</form>
	);
};

export default SearchItem;
