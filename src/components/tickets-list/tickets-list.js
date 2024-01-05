import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import uniqid from 'uniqid';

import TicketCard from '../ticket-card/ticket-card';
import { getTicketsList } from '../../redux/actions';
import classes from './tickets-list.module.scss';

function TicketsList() {
	const [currentList, setCurrentList] = useState([]);
	const [count, setCount] = useState(5);

	const dispatch = useDispatch();

	const showAllTickets = useSelector(state => {
		const { filterReducer } = state;
		return filterReducer.showAllTickets;
	});

	const transferFilter = useSelector(state => {
		const { filterReducer } = state;
		return filterReducer.transferFilter;
	});

	const tickets = useSelector(state => {
		const { ticketsListReducer } = state;
		return ticketsListReducer.ticketsList;
	});

	const tabFilter = useSelector(state => {
		const { tabReducer } = state;
		return tabReducer.tabFilter;
	});

	const showMore = () => {
		setCount(count + 5);
	};

	const onClick = () => showMore(currentList.length + 5);

	useEffect(() => {
		if ((showAllTickets || transferFilter.length) && !tickets.length) {
			dispatch(getTicketsList());
		}
	}, [showAllTickets, transferFilter]);

	useEffect(() => {
		if (!transferFilter.length) return;
		let tabList;
		let filteredList;
		if (tabFilter === 'showCheapest') {
			const oldList = tickets.slice();
			tabList = oldList.sort((prev, next) =>
				prev.price > next.price ? 1 : -1
			);
		}
		if (tabFilter === 'showFastest') {
			const oldList = tickets.slice();
			tabList = oldList.sort((prev, next) => {
				const prevSum = prev.segments[0].duration + prev.segments[1].duration;
				const nextSum = next.segments[0].duration + next.segments[1].duration;
				return prevSum > nextSum ? 1 : -1;
			});
		}
		if (tabFilter === 'showOptimal') {
			const oldList = tickets.slice();
			tabList = oldList.sort((prev, next) => {
				const prevSum = prev.segments[0].duration + prev.segments[1].duration;
				const nextSum = next.segments[0].duration + next.segments[1].duration;
				return prevSum + prev.price > nextSum + next.price ? 1 : -1;
			});
		}
		if (transferFilter.length) {
			filteredList = tabList.filter(ticket => {
				const stopsCountTo = ticket.segments[0].stops.length;
				const stopsCountFrom = ticket.segments[1].stops.length;
				return (
					transferFilter.includes(stopsCountTo.toString()) &&
					transferFilter.includes(stopsCountFrom.toString())
				);
			});
		}
		setCurrentList(filteredList);
	}, [transferFilter, tickets, tabFilter]);

	return (
		<>
			<ul className={classes.ul}>
				{!(showAllTickets || transferFilter.length) &&
					'Рейсов, подходящих под заданные фильтры, не найдено'}
				{!!(showAllTickets || transferFilter.length) &&
					currentList
						.slice(0, count)
						.map(res => <TicketCard key={uniqid()} data={res} />)}
			</ul>
			{!!currentList.length && !!(showAllTickets || transferFilter.length) && (
				<button className={classes.button} type='button' onClick={onClick}>
					ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!
				</button>
			)}
		</>
	);
}

export default TicketsList;
