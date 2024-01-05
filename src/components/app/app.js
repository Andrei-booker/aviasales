import { LoadingOutlined } from '@ant-design/icons';
import { Spin, Alert, Space } from 'antd';
import { useSelector } from 'react-redux';
import classes from './app.module.scss';
import Header from '../header/header';
import TransferFilter from '../transfer-filter/transfer-filter';
import TabFilter from '../tab-filter/tab-filter';
import TicketsList from '../tickets-list/tickets-list';

function App() {
	const spinner = useSelector(state => state.appReducer.loading);
	const error = useSelector(state => state.appReducer.error);

	return (
		<div className={classes.app}>
			<Header />
			<div className={classes['main-content']}>
				<div className={classes['transfer-filter']}>
					<TransferFilter />
				</div>
				<div className={classes['central-content']}>
					<TabFilter />
					{spinner && (
						<Spin
							style={{
								display: 'block',
								position: 'sticky',
								top: '30px',
							}}
							indicator={
								<LoadingOutlined
									style={{
										fontSize: 24,
										marginBottom: '15px',
									}}
									spin
								/>
							}
							spinning={spinner}
						/>
					)}
					{error && (
						<Space
							direction='vertical'
							style={{
								width: '100%',
							}}
						>
							<Alert
								message='Произошла ошибка на сервере, мы уже ее решаем'
								type='error'
							/>
						</Space>
					)}
					<TicketsList />
				</div>
			</div>
		</div>
	);
}

export default App;
