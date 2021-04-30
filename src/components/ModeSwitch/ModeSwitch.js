import React from "react";
import { classBlock } from "../../utils/styleMethods";
import { PropTypes } from "prop-types";

const types = {
    onToggle: PropTypes.func.isRequired,
    label: PropTypes.string,
    icon: PropTypes.string,
    classBlock: PropTypes.string,
};

function ModeSwitch({ onToggle, label, icon, classBlock: block }) {
    const classElement = classBlock(block);

    return (
        <div className={block} onClick={onToggle}>
            <i className={`${icon} ${classElement("icon")}`} />
            <p className={classElement("label")}>{label}</p>
        </div>
    );
}

ModeSwitch.propTypes = types;

export default ModeSwitch;