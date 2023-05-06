import React from 'react'
import { Table, Tag, Tooltip, Button } from 'antd'
import { EditOutlined, DeleteOutlined, SyncOutlined } from '@ant-design/icons';


const columns=[
    {
        title: "ID",
        dataIndex: "id",
        key: "id",

    },
    {
        title: "PRODUCT",
        dataIndex: "product",
        key: "product",
        render: text => <a>{text}</a>,
    },
    {
        title: "COUNT",
        dataIndex: "count",
        key: "count",
    },
    {
        title: "STATE",
        dataIndex: "state",
        key: "state",
        render: tags => (
            <span>
              {tags.map(tag => {
                let color = tag.length > 5 ? 'black' : 'pink';
                if (tag === 'Old') {
                  color = 'blue';
                }
                return (
                  <Tag color={color} key={tag}>
                    {tag.toUpperCase()}
                  </Tag>
                );
              })}
            </span>
          ),
    }, 
    {
        title: "ACTION",
        dataIndex: "action",
        key: "action",
        render: () => (
            <>
              <Tooltip title="Editar">
                <EditOutlined style={{ marginRight: '8px' }} />
              </Tooltip>
              <Tooltip title="Borrar">
                <DeleteOutlined style={{ marginRight: '8px' }} />
              </Tooltip>
              <Tooltip title="Actualizar">
                <SyncOutlined />
              </Tooltip>
            </>
          ),
    },
]

const data = [
    {
       key: '1',
       id: "001",
       product: "Sombrilla",
       count: "27",
       state: ["New"],
       action: "Deleter",
    },
    {
        key: '2',
        id: "002",
        product: "Balon",
        count: "12",
        state:[ "New"],
        action: "Deleter",
     },
     {
        key: '3',
        id: "003",
        product: "Impresora",
        count: "1",
        state: ["New"],
        action: "Deleter",
     },
     {
        key: '4',
        id: "004",
        product: "Lapicero",
        count: "20",
        state:[ "New"],
        action: "Deleter",
     },
     {
        key: '5',
        id: "005",
        product: "Libro",
        count: "50",
        state: ["New"],
        action: "Deleter",
     },
     {
        key: '6',
        id: "006",
        product: "Camára",
        count: "18",
        state: ["New"],
        action: "Deleter",
     },
     {
        key: '7',
        id: "007",
        product: "Celular",
        count: "10",
        state: ["New"],
        action: "Deleter",
     },
     {
        key: '8',
        id: "008",
        product: "Lámpara",
        count: "20",
        state:[ "New"],
        action: "Deleter",
     },
     {
        key: '9',
        id: "009",
        product: "Escoba",
        count: "32",
        state: ["New"],
        action: "Deleter",
     },
     
]

export const Services = () => {
    return (
      <>
        <Button style={{float: 'right', margin: '0 20px 10px 0'}}>Nuevo</Button>
        <Table dataSource={data} columns={columns} pagination={{ pageSize: 5 }}></Table>
      </>
    )
  }