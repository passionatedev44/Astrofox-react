import React from "react";
import Layers from "./Layers.tsx";
import Controls from "./Controls.tsx";

const Sidebar: React.FC = () => {
    return (
        <div className="sider-content">
            <div className="sider-content-layers">
                <Layers />
            </div>
            <div className="sider-content-controls">
                <Controls />
            </div>
        </div>
    );
};

export default Sidebar;
