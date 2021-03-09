import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { Table } from 'src/components';
import 'src/types';

export default {
  title: 'Table',
  component: Table,
  parameters: {
    jest: ['Table.test.tsx'],
  },
} as Meta;

/**
 * TODO:
 *  - Selectable Rows
 *  - MultiSelect Actions
 *  - Pagination
 *  - Resize Column
 *  - Customize columns
 *  - Virtualized Table
 *  - Responsive: Collapse columns into 1 column
 *  - Responsive: Action content should be full screen
 *  - Row heights: Condensed: 40px, Regular: 48px, Relaxed: 56px
 *  - Fixed Header: Maintain context while scrolling
 *  - 
 */

export const SimpleTable: React.FunctionComponent = () => null;

{/* <Table>
  <Table.Header>
    <Table.Name>Simple Table</Table.Name>
    <Table.Actions>
      <Table.Action></Table.Action>
      <Table.Action></Table.Action>
      <Table.Action></Table.Action>
    </Table.Actions>
    <Table.Controls>
      <Table.Control></Table.Control>
      <Table.Control></Table.Control>
      <Table.Control></Table.Control>
    </Table.Controls>
  </Table.Header>
  <Table.Body>
    <Table.Row>
      <Table.Cell>John</Table.Cell>
      <Table.Cell>21</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>Alice</Table.Cell>
      <Table.Cell>23</Table.Cell>
    </Table.Row>
    <Table.Row>
      <Table.Cell>Bob</Table.Cell>
      <Table.Cell>33</Table.Cell>
    </Table.Row>
  </Table.Body>
  <Table.Footer>
    <Table.Pagination />
  </Table.Footer>
</Table> */}
