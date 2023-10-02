import { useDispatch, useSelector } from "react-redux";
import {
  updateAmount,
  updateDescription,
  updateType,
  makeArray,
} from "../../Redux/Homedata/Homedataslice";
import "./Home.css";
function Home() {
  const inputdata = useSelector((state) => {
    return state.Homedataslice;
  });
  const dispatch = useDispatch();
  //   console.log(inputdata);
  const income = "income";
  const expense = "expense";
  let inc;
  let epn;
  if (inputdata.totalIncomeArray.length !== 0) {
    inc = inputdata.totalIncomeArray.reduce((pe, e) => {
      return +pe + +e;
    });
  } else {
    inc = 0;
  }
  if (inputdata.totalExpenseArray.length !== 0) {
    epn = inputdata.totalExpenseArray.reduce((pe, e) => {
      return pe + e;
    });
  } else {
    epn = 0;
  }
  //   console.log(inc, epn);
  return (
    <>
      <div className="parent">
        <h1>INCOME EXPENSE TRACKER</h1>
        <div className="inputDiv">
          <input
            type="number"
            name="amount"
            placeholder="Amount"
            onChange={(e) => {
              dispatch(updateAmount(e.target.value));
            }}
          />
          <input
            name="description"
            placeholder="Description"
            onChange={(e) => {
              dispatch(updateDescription(e.target.value));
            }}
          />
          <select
            name="type"
            onChange={(e) => {
              dispatch(updateType(e.target.value));
            }}
          >
            <option selected disabled>
              Select One
            </option>
            <option value={income}>Income</option>
            <option value={expense}>Expense</option>
          </select>
        </div>
        <button
          onClick={(e) => {
            // console.log(
            //   inputdata.amount.payload,
            //   inputdata.description.payload,
            //   inputdata.type.payload
            // );
            dispatch(
              makeArray({
                amount: inputdata.amount.payload,
                description: inputdata.description.payload,
                typeOne: inputdata.type.payload,
              })
            );
          }}
        >
          Submit
        </button>
      </div>
      <div className="messageStrip">
        {/* <h2>Total :{inc - epn} Start Saving</h2> */}
        {inc - epn < 1000 ? (
          <h2 className="red">Total :{inc - epn} Start Saving</h2>
        ) : (
          <h2 className="green">Total :{inc - epn} Looks Good </h2>
        )}
      </div>
      <div className="tableParent">
        <div className="IncomeTable">
          <div>
            <h2>Income</h2>
          </div>
          <table border={1}>
            <thead>
              <tr key={0}>
                <td>
                  <h2>SR No.</h2>
                </td>
                <td>
                  <h2>Description</h2>
                </td>
                <td>
                  <h2>Amount</h2>
                </td>
              </tr>
            </thead>
            <tbody>
              {inputdata.incomeArray.map((e, i) => {
                return (
                  <>
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td>{e.description}</td>
                      <td>{e.amount}</td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
          <div>
            <h2>Total :{inc}</h2>
          </div>
        </div>
        <div className="ExpenseTable">
          <div>
            <h2>Expense</h2>
          </div>
          <table border={1}>
            <thead>
              <tr key={0}>
                <td>
                  <h2>SR No.</h2>
                </td>
                <td>
                  <h2>Description</h2>
                </td>
                <td>
                  <h2>Amount</h2>
                </td>
              </tr>
            </thead>
            <tbody>
              {inputdata.expenseArray.map((e, i) => {
                return (
                  <>
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td>{e.description}</td>
                      <td>{e.amount}</td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
          <div>
            <h2>Total :{epn}</h2>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
