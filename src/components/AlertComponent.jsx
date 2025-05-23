import { useDispatch, useSelector } from "react-redux";
import { setAlertBox } from "../store";

const AlertComponent = () => {
  const { message, color, show, title } = useSelector(
    (state) => state.students.alertBox
  );
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(
      setAlertBox({
        title: "xxxxxx",
        message: "xxxxxx",
        color: "teal",
        show: false,
      })
    );
  };

  // Dynamically creating the class name
  const alertClass = show
    ? `bg-${color}-100 border-l-4 border-${color}-500 text-${color}-700 p-4 w-full h-15 text-${color}-700 px-4 py-6 rounded fixed top-0 left-0 right-0 z-50`
    : "hidden"; // Hide the alert if `show` is false

  return (
    <>
      {show && (
        <div className={alertClass} role="alert">
          <strong className="font-bold">{title}</strong>
          <span className="block sm:inline">{message}</span>
          <span
            className="absolute top-0 bottom-0 right-0 px-4 py-3"
            onClick={handleClose}
          >
            <svg
              className={`fill-current h-6 w-6 text-${color}-500`}
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <title>Close</title>
              <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
            </svg>
          </span>
        </div>
      )}
    </>
  );
};

export default AlertComponent;
