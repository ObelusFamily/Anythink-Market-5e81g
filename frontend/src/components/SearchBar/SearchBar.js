import { connect } from "react-redux";
// import agent from "../../../src/agent"
import { APPLY_TITLE_FILTER } from "../../constants/actionTypes";

const mapStateToProps = (state) => ({
    ...state.itemList,
    title: '',
  });
  
const mapDispatchToProps = (dispatch) => ({
    onChange: (pager, payload) =>
        dispatch({ type: APPLY_TITLE_FILTER, pager, payload }),
});


const SearchBar = (props) => {
    const handleChange = (ev) => {
        ev.preventDefault();
    //   props.onChange("search", agent.Items.byTitle, agent.Items.byTitle());
    // props.title: ev.target.value
    console.log(`SearchBar value: ${ev.target.value}, props: ${props.items}`)
    };

    return (
        <input
        placeholder="What is it that you truly desire?"
        id="search-box"
        onChange={handleChange}
        />
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);