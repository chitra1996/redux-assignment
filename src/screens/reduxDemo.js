import React from "react";
import { connect } from "react-redux"
import { mapStateToProps } from "../redux/reducers/reducer.js"

class ReduxDemo extends React.Component {
    constructor(props) {
        super(props);
    }

    incrementCounter = () => {
        this.props.dispatch({
            type: "INCREMENT"
        })
    }

    decrementCounter = () => {
        this.props.dispatch({
            type: "DECREMENT"
        })
    }

    render() {
        return (
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                background: "teal"
            }}>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <button onClick={() => this.decrementCounter()}>-</button>
                    <button>{this.props.count}</button>
                    <button onClick={() => this.incrementCounter()}>+</button>
                </div>

                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <input placeholder="Input some random text here..." onChange={(e) => {
                        this.props.dispatch({
                            type: "CHANGENAME",
                            name: e.target.value
                        })
                    }}></input>
                </div>

            </div>
        )
    }
}

export default connect(mapStateToProps)(ReduxDemo);