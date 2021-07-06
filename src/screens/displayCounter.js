import React from "react";
import { connect } from "react-redux"
import { mapStateToProps } from "../redux/reducers/reducer.js"

class DisplayCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
    }

    render() {
        return (
            <div style={{
                background: "yellow",
                display: "flex",
                flex: 1,
                height: "100vh",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column"
            }}>
                <h1>{this.props.count}</h1>
                <h1>{this.props.name}</h1>
            </div>
        )
    }
}

export default connect(mapStateToProps)(DisplayCounter);