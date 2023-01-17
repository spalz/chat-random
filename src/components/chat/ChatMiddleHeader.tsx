import React from "react";

export const ChatMiddleHeader = () => {
    return (
        <div className="MiddleHeader">
            <div className="Transition slide-fade">
                <div className="Transition__slide--active">
                    <div className="chat-info-wrapper">
                        <div className="ChatInfo">
                            <div className="Avatar size-medium color-bg-7 interactive">
                                <img
                                    src="blob:https://web.telegram.org/c04c243d-a4a3-4552-855b-5789e8494064"
                                    className="Avatar__media avatar-media opacity-transition slow open shown"
                                    alt="Арслан Марков"
                                    decoding="async"
                                />
                            </div>
                            <div className="info">
                                <div className="title ysHMmXALnn0fgFRc7Bn7">
                                    <h3 dir="auto" className="fullName">
                                        Арслан Марков
                                    </h3>
                                </div>
                                <span className="status">
                                    <span className="user-status" dir="auto">
                                        last seen recently
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-tools">
                <div className="HeaderActions">
                    <button
                        type="button"
                        className="Button smaller translucent round"
                        aria-label="Search in this chat"
                        title="Search in this chat"
                    >
                        <i className="icon-search"></i>
                    </button>
                    <button
                        type="button"
                        className="Button smaller translucent round"
                        aria-label="Call"
                        title="Call"
                    >
                        <i className="icon-phone"></i>
                    </button>
                    <button
                        type="button"
                        className="Button smaller translucent round has-ripple"
                        aria-label="More actions"
                        title="More actions"
                    >
                        <i className="icon-more"></i>
                        <div className="ripple-container"></div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ChatMiddleHeader;
