import { React } from "react";
import { Typography, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { setIncrement, setDecrement } from "./counterActions";

const CounterComponent = (props) => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <>
      <Typography variant="h4">Counter:{counter} </Typography>

      <div>
        <Button
          style={{ marginRight: "20px" }}
          variant="contained"
          color="success"
          onClick={() => {
            dispatch(setIncrement());
          }}
        >
          Increment
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={() => {
            dispatch(setDecrement());
          }}
        >
          Decrement
        </Button>
      </div>
    </>
  );
};
export default CounterComponent;
