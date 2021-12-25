import { createContext, useContext, useState, useCallback } from "react";

export const NotificationContext = createContext();

export const types = {
  error: "danger",
  warn: "warning",
  info: "info",
  success: "success",
};

export const NotificationProvider = ({ children }) => {
  /*
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");
  const [type, setType] = useState("error");
  */

  const [notification, setNotification] = useState({
    show: false,
    message: "",
    type: types.error,
  });

  const addNotification = useCallback((message, type = types.error) => {
    setNotification({ show: true, message: message, type });

    setTimeout(() => {
      setNotification({
        show: false,
        message: "",
        type: types.error,
      });
    }, 5000);
  }, []);

  const hideNotification = useCallback(() => {
    setNotification({
      show: false,
      message: "",
      type: types.error,
    });
  });

  return (
    <NotificationContext.Provider
      value={{ notification, addNotification, hideNotification }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotificationContext = () => {
  const state = useContext(NotificationContext);

  return state;
};
