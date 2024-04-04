import styled from 'styled-components';

const StyledTableData = styled.div`
	width: 100vw;
	position: fixed;
	top: 64px;
	.listdevice__wrapper {
	}
	.table__titles {
		height: 52px;
		line-height: 52px;
	}
	.row__device-item {
		border-bottom: 1px solid #ccc;
	}

	.col__title--align-right {
		text-align: center;
	}

	.col__title {
		font-size: 18px;
		font-weight: 600;
		color: #ddd;
		background-color: #004772;
	}

	.col__device-id {
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.col__item-flex {
		display: flex;
		cursor: pointer;
		font-size: 18px;
	}
`;

export default StyledTableData;
