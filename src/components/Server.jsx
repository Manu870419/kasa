import React from "react";

function Server({ host }) {
    const isHostSplited = host.name.split(",");
    const [name, lastname] = isHostSplited;
    console.log(isHostSplited)

    return (
        <div className="server">
            <div className="server__name">
                <p className="server__firstname">{name}</p>
                <p className="server__lastname">{lastname}</p>
            </div>

            <img src={host.picture} alt="" className="server__picture" />
        </div>
    );
};

export default Server;