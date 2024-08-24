import s from "./style.module.css";
import PropTypes from "prop-types";

export function ListItem({ item }) {
  return (
    <tr>
      <th>{item.name}</th>
      <td className={s.price}>{item.price}</td>
    </tr>
  );
}

ListItem.propTypes={
    item:PropTypes.any,
}