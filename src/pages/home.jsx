import { Space, Table, Tag, Divider, Spin } from 'antd';
import React, { useState, useEffect } from "react";
import * as TableService from "../services/table";

import { ACTION_ICON_CLASS, ICON_SIZE } from '../AppConstant/AppConfig';
import Pencil from '../SVG/Pencil';


const Home = () => {
    const dataSource = [
        {
            key: '1',
            name: 'Mike',
            age: 32,
            address: '10 Downing Street',
        },
        {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        },
    ];

    const columns = [
        {
            title: 'Home District',
            dataIndex: 'homeDistrict',
            width: '200px',
            key: 'homeDistrict',
        },
        {
            title: 'Mobile',
            dataIndex: 'mobile',
            key: 'mobile',
        },
        {
            title: 'Mallika',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <div className="flex justify-center">
                    <img
                        onClick={() => { }}
                        alt="icon"
                        //src={DELETE}
                        //src={Pencil()}
                        src={Pencil(10)}
                        width={ICON_SIZE}
                        height={ICON_SIZE}
                        className={`cursor-pointer  ${ACTION_ICON_CLASS}`}
                    />
                </div>
                // <span>

                //     <a>Invite {record.userId}</a>
                //     <Divider type="vertical" />
                //     <a>Delete</a>
                // </span>
            ),
        },
    ];

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState("");

    const fetchData = async () => {
        try {
            const response = await TableService.getHealthData();
            const dataWithKeys = response.data.data.map(item => ({
                ...item,
                key: item.id.toString(),
            }));
            setData(dataWithKeys);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {
        setLoading(true);
        fetchData();
    }, [])

    return (
        <>
            <div className='text-5xl flex items-center justify-center h-34 pt-2'>WelCome to HIghlevel Table</div>
            <div className="p-3 pb-11  border flex items-center justify-center">
                <Table
                    loading={loading}
                    columns={columns}
                    dataSource={data}
                    className=" mt-2"
                />
            </div>
            <div>

                <h1>Theelo</h1>
                <p>sdfdsf dsfdsf sdffsdf sdfsd dsfsdf sdfsdf sdfsdf sdfsdf sd fsd fsdfsd fsdf</p>
            </div>
        </>
    )
}

export default Home;