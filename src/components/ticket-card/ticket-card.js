import PropTypes from 'prop-types';
import { addMinutes } from 'date-fns';
import classes from './ticket-card.module.scss';

function TicketCard({ data }) {
	const { price, carrier, segments } = data;
	const [flightTo, flightFrom] = segments;

	const stopsCount = flight => {
		if (flight.stops.length === 1) {
			return 'пересадка';
		}
		return 'пересадки';
	};

	const durationFormat = flight =>
		`${String(Math.floor(flight.duration / 60)).padStart(2, '0')}ч ${String(
			flight.duration % 60
		).padStart(2, '0')}м`;

	const priceFormat = value => `${Math.floor(value / 1000)} ${value % 1000}`;

	const dateFormat = flight => {
		const hours = String(new Date(flight.date).getHours()).padStart(2, '0');
		const minutes = String(new Date(flight.date).getMinutes()).padStart(2, '0');
		return `${hours}:${minutes}`;
	};

	const addDuration = flight => {
		const result = addMinutes(new Date(flight.date), flight.duration);
		const hours = String(result.getHours()).padStart(2, '0');
		const minutes = String(result.getMinutes()).padStart(2, '0');
		return `${hours}:${minutes}`;
	};

	return (
		<div className={classes['ticket-card']}>
			<div className={classes['ticket-card__header']}>
				<span className={classes['ticket-card__price']}>
					{priceFormat(price)} P
				</span>
				<img alt='Logo' src={`//pics.avs.io/99/36/${carrier}.png`} />
			</div>
			<div className={classes['ticket-card__flight-info']}>
				<div className={classes['flight-info__block']}>
					<span className={classes['flight-info__title']}>
						{flightTo.origin} – {flightTo.destination}
					</span>
					<span className={classes['flight-info__text']}>
						{dateFormat(flightTo)} - {addDuration(flightTo)}
					</span>
				</div>
				<div className={classes['flight-info__block']}>
					<span className={classes['flight-info__title']}>В ПУТИ</span>
					<span className={classes['flight-info__text']}>
						{durationFormat(flightTo)}
					</span>
				</div>
				<div className={classes['flight-info__block']}>
					<span className={classes['flight-info__title']}>
						{flightTo.stops.length
							? `${flightTo.stops.length} ${stopsCount(flightTo)}`
							: 'Без пересадок'}
					</span>
					<span className={classes['flight-info__text']}>
						{flightTo.stops.join(', ')}
					</span>
				</div>
			</div>
			<div className={classes['ticket-card__flight-info']}>
				<div className={classes['flight-info__block']}>
					<span className={classes['flight-info__title']}>
						{flightFrom.origin} – {flightFrom.destination}
					</span>
					<span className={classes['flight-info__text']}>
						{dateFormat(flightFrom)} - {addDuration(flightFrom)}
					</span>
				</div>
				<div className={classes['flight-info__block']}>
					<span className={classes['flight-info__title']}>В ПУТИ</span>
					<span className={classes['flight-info__text']}>
						{durationFormat(flightFrom)}
					</span>
				</div>
				<div className={classes['flight-info__block']}>
					<span className={classes['flight-info__title']}>
						{flightFrom.stops.length
							? `${flightFrom.stops.length} ${stopsCount(flightFrom)}`
							: 'Без пересадок'}
					</span>
					<span className={classes['flight-info__text']}>
						{flightFrom.stops.join(', ')}
					</span>
				</div>
			</div>
		</div>
	);
}

TicketCard.defaultProps = {
	data: {},
};

TicketCard.propTypes = {
	data: PropTypes.shape({
		price: PropTypes.number,
		carrier: PropTypes.string,
		segments: PropTypes.arrayOf(
			PropTypes.shape(
				{
					origin: PropTypes.string,
					destination: PropTypes.string,
					date: PropTypes.string,
					stops: PropTypes.arrayOf(PropTypes.string),
					duration: PropTypes.number,
				},
				{
					origin: PropTypes.string,
					destination: PropTypes.string,
					date: PropTypes.string,
					stops: PropTypes.array,
					duration: PropTypes.number,
				}
			)
		),
	}),
};
export default TicketCard;
