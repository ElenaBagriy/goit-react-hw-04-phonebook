import React from "react";
import PropTypes from 'prop-types';
import { Label, Input } from "./Filter.styled";

const Filter = ({onChange, filter}) => (
    <Label>
        Find contacts by name
        <Input type="text" onChange={onChange} value={filter}></Input>
    </Label>
)

Filter.propTypes = {
    onChange: PropTypes.func.isRequired,
    filter: PropTypes.string,
}

export default Filter;