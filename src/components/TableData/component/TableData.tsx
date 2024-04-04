import { Col, List, Row } from 'antd';
import { EditTwoTone, DeleteTwoTone } from '@ant-design/icons';
import StyledTableData from './TableData.style';
import StyledStatusBlock from '../../StatusBlock/component/StatusBlock.style';
import getListDevice from '../../../axios/getListDevice';
import { useEffect, useState } from 'react';
import { IDeviceProps } from '../../../interfaces';
import { AxiosError } from 'axios';

export interface ITableDataProps {}

export default function TableData() {
	const [deviceList, setDeviceList] = useState<IDeviceProps[]>([]);
	useEffect(() => {
		getListDevice()
			.then((res) => {
				setDeviceList(res);
			})
			.catch((err: AxiosError) => {
				throw new Error(`${err.code} Can not get list of devices`);
			});
	}, []);
	return (
		<StyledTableData>
			<div className='listdevices__wrapper'>
				<Row className='table__titles'>
					<Col className='col__title' span={8} style={{ textAlign: 'center' }}>
						ID
					</Col>
					<Col className='col__title' span={6}>
						Name
					</Col>
					<Col className='col__title' span={6}>
						Status
					</Col>
					<Col className='col__title' span={4}>
						Edit
					</Col>
				</Row>

				<List
					className=''
					itemLayout='horizontal'
					dataSource={deviceList}
					renderItem={(item) => (
						<Row justify='center' align='middle' className='row__device-item'>
              <Col span={1}></Col>
							<Col span={7} className='col__device-id'>
								<h4>{item.id}</h4>
							</Col>
							<Col span={6}>
								<h4>{item.name}</h4>
							</Col>
							<Col span={6}>
								<StyledStatusBlock>{item.status}</StyledStatusBlock>
							</Col>
							<Col className='col__item-flex' span={4}>
								<EditTwoTone style={{ marginRight: '12px' }} />
								<DeleteTwoTone />
							</Col>
						</Row>
					)}
				/>
			</div>
		</StyledTableData>
	);
}
