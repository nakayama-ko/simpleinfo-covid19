import React from "react";
import PropTypes from "prop-types";
import { Bar, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, ComposedChart } from "recharts";
import "../App.css";

class Charts extends React.Component {
  render() {
    // グラフのTooltipに表示する内容をカスタマイズする関数
    function CustomTooltip({ payload, label, active }) {
      if (active) {
        return (
          <div className="custom-tooltip">
            <p className="label">
              <b>{label.split("-").join("/")}</b>
            </p>
            <center>
              <p className="intro">
                <b>{payload[0].value}</b> 人
              </p>
            </center>
          </div>
        );
      }
      return null;
    }

    const renderLineChart = (
      <div style={{ height: "50vmin", width: "95%", margin: "1vh 0 1vh 0" }}>
        <ResponsiveContainer>
          <ComposedChart data={this.props.adpatients}>
            <Bar type="monotone" dataKey="adpatients" fill="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip content={<CustomTooltip />} />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    );
    return renderLineChart;
  }
}

// propsのタイプを検証
Charts.propTypes = {
  adpatients: PropTypes.array,
};

export default Charts;
