import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import classes from './transfer-filter.module.scss';
import { setTransferFilter, showAllTickets } from '../../redux/actions';

function TransferFilter() {
	const dispatch = useDispatch();
	const [checkedAllTransfers, setCheckedAllTransfers] = useState(false);
	const [checkedWithoutTransfers, setCheckedWithoutTransfers] = useState(false);
	const [checkedOneTransfer, setCheckedOneTransfer] = useState(false);
	const [checkedTwoTransfers, setCheckedTwoTransfers] = useState(false);
	const [checkedThreeTransfers, setCheckedThreeTransfers] = useState(false);

	useEffect(() => {
		if (
			checkedWithoutTransfers &&
			checkedOneTransfer &&
			checkedTwoTransfers &&
			checkedThreeTransfers
		) {
			setCheckedAllTransfers(true);
		} else setCheckedAllTransfers(false);
	}, [
		checkedWithoutTransfers,
		checkedOneTransfer,
		checkedTwoTransfers,
		checkedThreeTransfers,
	]);

	useEffect(() => {
		dispatch(showAllTickets(checkedAllTransfers));
	}, [checkedAllTransfers]);

	const onChange = e => {
		switch (e.target.id) {
			case 'without_transfer':
				setCheckedWithoutTransfers(e.target.checked);
				break;
			case 'one_transfer':
				setCheckedOneTransfer(e.target.checked);
				break;
			case 'two_transfers':
				setCheckedTwoTransfers(e.target.checked);
				break;
			case 'three_transfers':
				setCheckedThreeTransfers(e.target.checked);
				break;
			default:
				setCheckedAllTransfers(e.target.checked);
				setCheckedWithoutTransfers(e.target.checked);
				setCheckedOneTransfer(e.target.checked);
				setCheckedTwoTransfers(e.target.checked);
				setCheckedThreeTransfers(e.target.checked);
		}
		if (e.target.value === 'all') {
			dispatch(setTransferFilter('0', !checkedWithoutTransfers));
			dispatch(setTransferFilter('1', !checkedOneTransfer));
			dispatch(setTransferFilter('2', !checkedTwoTransfers));
			dispatch(setTransferFilter('3', !checkedThreeTransfers));
		}
		dispatch(setTransferFilter(e.target.value, e.target.checked));
	};
	return (
		<div className={classes['filters-list']}>
			<h5 className={classes['filters-list__title']}>КОЛИЧЕСТВО ПЕРЕСАДОК</h5>
			<label htmlFor='all' className={classes['filters-list__item']}>
				<input
					id='all'
					type='checkbox'
					value='all'
					className={classes['filters-list__checkbox']}
					onChange={onChange}
					checked={checkedAllTransfers}
				/>
				<span className={classes['filters-list__span']}>Все</span>
			</label>
			<label
				htmlFor='without_transfer'
				className={classes['filters-list__item']}
			>
				<input
					id='without_transfer'
					value='0'
					type='checkbox'
					className={classes['filters-list__checkbox']}
					onChange={onChange}
					checked={checkedWithoutTransfers}
				/>
				<span className={classes['filters-list__span']}>Без пересадок</span>
			</label>
			<label htmlFor='one_transfer' className={classes['filters-list__item']}>
				<input
					id='one_transfer'
					type='checkbox'
					value='1'
					className={classes['filters-list__checkbox']}
					onChange={onChange}
					checked={checkedOneTransfer}
				/>
				<span className={classes['filters-list__span']}>1 пересадка</span>
			</label>
			<label htmlFor='two_transfers' className={classes['filters-list__item']}>
				<input
					id='two_transfers'
					type='checkbox'
					value='2'
					className={classes['filters-list__checkbox']}
					onChange={onChange}
					checked={checkedTwoTransfers}
				/>
				<span className={classes['filters-list__span']}>2 пересадки</span>
			</label>
			<label
				htmlFor='three_transfers'
				className={classes['filters-list__item']}
			>
				<input
					id='three_transfers'
					type='checkbox'
					value='3'
					className={classes['filters-list__checkbox']}
					onChange={onChange}
					checked={checkedThreeTransfers}
				/>
				<span className={classes['filters-list__span']}>3 пересадки</span>
			</label>
		</div>
	);
}

export default TransferFilter;
