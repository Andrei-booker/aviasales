import { useState } from 'react';
import { useDispatch } from 'react-redux';
import classes from './tab-filter.module.scss';
import {
	showCheapestTickets,
	showFastestTickets,
	showOptimalTickets,
} from '../../redux/actions';

function TabFilter() {
	const dispatch = useDispatch();
	const [activeButton, setActiveButton] = useState('showCheapest');

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
				onClick={e => {
					setActiveButton(e.target.name);
					dispatch(showCheapestTickets(e.target.name));
				}}
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
				onClick={e => {
					setActiveButton(e.target.name);
					dispatch(showFastestTickets(e.target.name));
				}}
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
				onClick={e => {
					setActiveButton(e.target.name);
					dispatch(showOptimalTickets(e.target.name));
				}}
				name='showOptimal'
			>
				ОПТИМАЛЬНЫЙ
			</button>
		</div>
	);
}

export default TabFilter;
