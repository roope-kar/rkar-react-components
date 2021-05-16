import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { DataGrid } from 'src/components';
import 'src/types';

export default {
    title: 'DataGrid',
    component: DataGrid,
    parameters: {
        jest: ['DataGrid.test.tsx'],
    },
} as Meta;

export const SimpleCode: React.FunctionComponent = () => {
    const data: { name: string, test: string, lol: boolean }[] = [
        { name: 'a', test: '123', lol: false },
        { name: 'b', test: '123', lol: true },
        { name: 'c', test: '123', lol: false },
        { name: 'd', test: '123', lol: false },
    ];
    return (<DataGrid name={'My Table'} description={'My Table Description'}>
        <DataGrid.RowGroup>
            <DataGrid.Row>
                <DataGrid.SortCell onClick={() => null} direction={'ascending'}>Name</DataGrid.SortCell>
                <DataGrid.Cell>Test</DataGrid.Cell>
                <DataGrid.SearchCell onChange={() => null} />
            </DataGrid.Row>
        </DataGrid.RowGroup>
        <DataGrid.RowGroup>
            {data.map((dot, index) => (
                <DataGrid.Row index={index}>
                    <DataGrid.Cell>{dot.name}</DataGrid.Cell>
                    <DataGrid.Cell>{dot.test}</DataGrid.Cell>
                    <DataGrid.Cell>{dot.lol}</DataGrid.Cell>
                </DataGrid.Row>
            ))}
        </DataGrid.RowGroup>
    </DataGrid>
    )
};
