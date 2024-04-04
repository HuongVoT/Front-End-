import * as React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import TableData from '../../components/TableData/component/TableData';
import getListDevice from '../../axios/getListDevice';

export interface IHomePageProps {}

export default function HomePage() {
  const listDevice = getListDevice();
  return (
    <>
      <Navigation />
      <TableData />
    </>
  );
}
