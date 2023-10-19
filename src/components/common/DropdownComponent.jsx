import React from 'react';
import { Dropdown } from 'antd';

export default function DropdownComponent({ menu }) {
    return (
        <div>
            <Dropdown menu={menu} trigger={['click']} className="w-28">
                <div className="bg-gray-500 text-gray rounded-lg p-2 pl-6 flex items-center cursor-pointer select-none dropdown">
                    Action
                    <img src="/svg/arrow-simple.svg" alt="arrow-icon" className="rotate-90 ml-1 mt-0.5" />
                </div>
            </Dropdown>
        </div>
    );
}
