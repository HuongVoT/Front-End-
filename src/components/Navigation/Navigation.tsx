import { Col, Row, Button } from 'antd';
import StyledNavigation from './Navigation.style';
export interface INavigationProps {}

export default function Navigation() {
	return (
		<StyledNavigation>
			<Row>
				<Col span={1}></Col>
				<Col span={3} className='navigation__item'>
					Home
				</Col>
				<Col span={15}></Col>
				<Col span={4} className='navigation__create-btn'>
					<Button type='primary' style={{ fontWeight: '700' }}>
						Create Device
					</Button>
				</Col>
			</Row>
		</StyledNavigation>
	);
}
