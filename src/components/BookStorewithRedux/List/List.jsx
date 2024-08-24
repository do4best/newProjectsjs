import { ListItem } from "../ListItem/ListItem";
import PropTypes from "prop-types";

export function List({ items }) {
  return (
    <div style={{ overflowY: "scroll", height: "40%" }}>
      <table className="table table-hover table-borderless">
        <tbody>
        {items.map((item,index)=>(<ListItem key={item+index} item={item} />))}


        </tbody>
      </table>
    </div>
  );
}

List.propTypes={
    items:PropTypes.any,
}