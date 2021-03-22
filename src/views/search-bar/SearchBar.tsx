import styled from "styled-components";
import { Input } from '@material-ui/core';

const SearchBarContainer = styled.div`
    width: 80vw;
    display: flex;
`

const InputSearch = styled(Input)`
    width: 100%;
`

const SearchBar = function () {
    return (
        <SearchBarContainer>
            <InputSearch type="search" placeholder="Search manga..."/>
        </SearchBarContainer>
    );
}

export default SearchBar;