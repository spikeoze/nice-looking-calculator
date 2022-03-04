const reducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD-DIGIT":
      if (payload.digit === "0" && state.current === 0) {
        return state;
      }

      if (state.current === "" && payload.digit === ".") {
        return state;
      }

      if(payload.digit === '.' && state.current === 0){
        return{
          ...state,
          current: `0${payload.digit}`
        }
      }

      if (payload.digit === "." && state.current.includes(".")) {
        return {
          ...state,
        };
      }

     

      if (state.current.length > 11) {
        return {
          ...state,
        };
      }

      if (state.overwrite === true) {
        return {
          ...state,
          current: payload.digit,
          overwrite: false,
        };
      }

      return {
        ...state,
        current: `${state.current || ""}${payload.digit}`,
      };


      
    case "CHOOSE-OPERATOR":
      if (state.current === "" && state.previous === null) {
        return state;
      }

      if (state.current === 0) {
        return {
          ...state,
          operator: payload.operator,
        };
      }

      if (state.previous === null) {
        return {
          ...state,
          previous: state.current,
          operator: payload.operator,
          current: 0,
        };
      }

      return {
        ...state,
        previous: calculate(state),
        current: 0,
        operator: payload.operator,
      };

    case "ALL-CLEAR":
      return {
        ...state,
        current: 0,
        previous: null,
        operator: null,
      };

    case "CLEAR":
      if (state.overwrite === true) {
        return {
          ...state,
          previous: null,
          current: 0,
          operator: null,
        };
      }

      if(state.current === 0) return state

      if(state.current.length === 1){
        return{
          ...state,
          current: 0
        }
      }

      return {
        ...state,
        current: state.current.slice(0, -1),
      };

    case "TOTAL":
      if (
        state.current === null ||
        state.previous === null ||
        state.operator === null
      )
        return state;

      return {
        ...state,
        previous: null,
        current: calculate(state),
        operator: null,
        overwrite: true,
      };
  }
};

const calculate = ({ current, previous, operator }) => {
  const previousNum = parseFloat(previous);
  const currentNum = parseFloat(current);
  if (isNaN(previous) && isNaN(current)) return "";
  let total = "";
  switch (operator) {
    case "÷":
      total = previousNum / currentNum;
      break;

    case "*":
      total = previousNum * currentNum;
      break;

    case "+":
      total = previousNum + currentNum;
      break;

    case "-":
      total = previousNum - currentNum;
      break;
  }
  return total.toString();
};

export default reducer;
