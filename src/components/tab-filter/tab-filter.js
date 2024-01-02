import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setTabFilter } from '../../redux/actions';
import classes from './tab-filter.module.scss';

function TabFilter() {
	const dispatch = useDispatch();
	const [activeButton, setActiveButton] = useState('showCheapest');

	const onClick = e => {
		setActiveButton(e.target.name);
		dispatch(setTabFilter(e.target.name));
	};

	return (
		<div className={classes['tab-filter__content']}>
			<button
				className={[
					classes['tab-filter__button'],
					classes['tab-filter__button--left'],
					activeButton === 'showCheapest'
						? classes['tab-filter__button--active']
						: '',
				].join(' ')}
				type='button'
				onClick={onClick}
				name='showCheapest'
			>
				САМЫЙ ДЕШЕВЫЙ
			</button>
			<button
				className={[
					classes['tab-filter__button'],
					activeButton === 'showFastest'
						? classes['tab-filter__button--active']
						: '',
				].join(' ')}
				type='button'
				onClick={onClick}
				name='showFastest'
			>
				САМЫЙ БЫСТРЫЙ
			</button>
			<button
				className={[
					classes['tab-filter__button'],
					classes['tab-filter__button--right'],
					activeButton === 'showOptimal'
						? classes['tab-filter__button--active']
						: '',
				].join(' ')}
				type='button'
				onClick={onClick}
				name='showOptimal'
			>
				ОПТИМАЛЬНЫЙ
			</button>
		</div>
	);
}

export default TabFilter;
