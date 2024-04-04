import { IDeviceStatus } from './DeviceStatus';

export interface IDeviceProps {
	id: string;
	name: string;
	status: IDeviceStatus;
}
