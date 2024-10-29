import React from "react";

import { Tree, Space } from "antd";
import type { DataNode, DirectoryTreeProps } from "antd/es/tree";
import {
    AppstoreOutlined,
    MailOutlined,
    SettingOutlined,
    PictureOutlined,
    SunOutlined,
    UpOutlined,
    DownOutlined,
    DeleteOutlined,
} from "@ant-design/icons";
const { DirectoryTree } = Tree;

const treeData: DataNode[] = [
    {
        title: "Screan 1",
        key: "0-0",
        children: [
            { title: "Text 1", key: "0-0-0", isLeaf: true },
            { title: "Bar Spectrum 1", key: "0-0-1", isLeaf: true },
            { title: "Image 1", key: "0-0-2", isLeaf: true },
        ],
    },
    {
        title: "Screan 2",
        key: "0-1",
        children: [
            { title: "Text 2", key: "0-1-0", isLeaf: true },
            { title: "Bar Spectrum 2", key: "0-1-1", isLeaf: true },
            { title: "Image 2", key: "0-1-2", isLeaf: true },
        ],
    },
];

const Layers: React.FC = () => {
    const onSelect: DirectoryTreeProps["onSelect"] = (keys, info) => {
        console.log("Trigger Select", keys, info);
    };

    const onExpand: DirectoryTreeProps["onExpand"] = (keys, info) => {
        console.log("Trigger Expand", keys, info);
    };

    return (
        <div>
            <div className="layers-header">LAYERS</div>
            <DirectoryTree
                multiple
                defaultExpandAll
                onSelect={onSelect}
                onExpand={onExpand}
                treeData={treeData}
                style={{ height: 200, borderBottom: "1px solid #3a3a3a" }}
            />
            <div className="layers-footer">
                <Space>
                    <PictureOutlined />
                    <SunOutlined />
                    <UpOutlined />
                    <DownOutlined />
                    <DeleteOutlined />
                </Space>
            </div>
        </div>
    );
};

export default Layers;
