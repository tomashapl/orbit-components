// @flow

import * as React from "react";

import Typography from "../Typography";
import Icon from "./Icon";

type Props<Data> = {
  label: string,
  checked?: boolean,
  onChange: (SyntheticInputEvent<HTMLInputElement>, Data) => void,
  data?: Data,
};

class Checkbox extends React.PureComponent<Props<*>> {
  handleChange = (event: SyntheticInputEvent<HTMLInputElement>) => {
    this.props.onChange(event, this.props.data);
  };

  render() {
    return (
      <div>
        <label className="label">
          <div className="checkbox">
            {this.props.checked && (
              <div className="checked">
                <Icon.Checked />
              </div>
            )}
          </div>
          <Typography variant={this.props.checked ? "bold" : "normal"}>
            {this.props.label}
          </Typography>
          <input
            className="checkboxInput"
            type="checkbox"
            checked={this.props.checked}
            onChange={this.handleChange}
          />
        </label>
        <style jsx>{`
          .label {
            display: flex;
            align-items: center;
          }
          .checkbox {
            width: 20px;
            height: 20px;
            margin-right: 8px;
            border-radius: 3px;
            background-color: white;
            box-shadow: inset 0 1px 3px 0 rgba(0, 0, 0, 0.16);
            border: solid 1px #bac7d5;
          }
          .checked {
            margin-left: 5px;
          }
          .checkboxInput {
            display: none;
          }
        `}</style>
      </div>
    );
  }
}

export default Checkbox;
