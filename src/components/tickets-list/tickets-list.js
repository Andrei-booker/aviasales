import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import uniqid from 'uniqid';

import TicketCard from '../ticket-card/ticket-card';
import { getTicketsList } from '../../redux/actions';
import classes from './tickets-list.module.scss';

function TicketsList() {
	const [currentList, setCurrentList] = useState([]);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getTicketsList());
	}, []);

	const filter = useSelector(state => {
		const { filterReducer } = state;
		return filterReducer.showAllTickets;
	});

	const tickets = useSelector(state => {
		const { ticketsListReducer } = state;
		return ticketsListReducer.ticketsList;
	});

	const showMore = (idx = 5) => {
		const newList = tickets.slice(0, idx);
		setCurrentList(newList);
	};

	useEffect(() => showMore(), [filter]);

	const onClick = () => showMore(currentList.length + 5);

	return (
		<>
			<ul className={classes.ul}>
				{!filter && 'No results'}
				{filter &&
					currentList.map(res => <TicketCard key={uniqid()} data={res} />)}
			</ul>
			<button className={classes.button} type='button' onClick={onClick}>
				ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!
			</button>
		</>
	);
}

export default TicketsList;
