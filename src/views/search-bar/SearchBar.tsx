import styled from "styled-components";
import { Input } from '@material-ui/core';
import { FunctionComponent } from "react";

const SearchBarContainer = styled.div`
    width: 80vw;
    display: flex;
`

const InputSearch = styled(Input)`
    width: 100%;
`

interface Props {
    onChange?: (query: string) => void;
    query?: string;
}

const SearchBar: FunctionComponent<Props> = function (props) {

    const onInputChanged = (value: string) => {
        if (props.onChange) {
            props.onChange(value)
        }
    }

    return (
        <SearchBarContainer>
            <InputSearch type="search" inputProps={{ "data-testid": "searchbar-input" }} placeholder="Search manga..." value={props.query} onChange={e => onInputChanged(e.target.value)} />
        </SearchBarContainer>
    );
}

export default SearchBar;