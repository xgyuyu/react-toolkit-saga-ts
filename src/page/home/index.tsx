import React, { useEffect, useState } from 'react';
// import { homeActions } from './homeSlice';
import { Button, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { useDataApi } from '../../common/getListData';

interface DataType {
  id: Number;
  city: string;
  street: number;
  country: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'country',
    key: 'country',
  },
  {
    title: 'City',
    dataIndex: 'city',
    key: 'city',
  },
  {
    title: 'Street',
    dataIndex: 'street',
    key: 'street',
  },
];

// 纯hooks的版本
// const Home: React.FC = () => {
//   const { data, isLoading, isError, doFetch, doSetconfig } = useDataApi(
//     'https://fakerapi.it/api/v1/addresses?_quantity=10', // 放的url
//     [],
//     { method: 'get' }
//   );
//
//   return (
//     <>
//       <Button
//         onClick={(event) => {
//           doFetch(`https://fakerapi.it/api/v1/addresses?_quantity=20`); // 放的url
//           doSetconfig({});
//           event.preventDefault();
//         }}
//       >
//         Search
//       </Button>
//
//       <Table
//         rowKey="id"
//         loading={isLoading}
//         columns={columns}
//         dataSource={data}
//       />
//       {isError && <div>出现错误ERROR</div>}
//     </>
//   );
// };
const Home: React.FC = () => {
  return <div>1111</div>;
};
export default Home;
