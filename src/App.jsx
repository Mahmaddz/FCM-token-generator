import { useEffect, useState } from "react";
import "./App.css";
import { getToken, onMessage } from "firebase/messaging";
import { messaging } from "./firebase/firebaseConfig";
import { toast, ToastContainer } from "react-toastify";
import Message from "./components/Message";
import "react-toastify/dist/ReactToastify.css";
import { CopyToClipboard } from "react-copy-to-clipboard";

function App() {
  const [notifs, setNotif] = useState([]);
  const [token, setToken] = useState("Validating Permission");
  const [copied, setCopied] = useState(false);
  const { VITE_APP_VAPID_KEY } = import.meta.env;

  async function requestPermission() {
    //requesting permission using Notification API
    const permission = await Notification.requestPermission();

    if (permission === "granted") {
      console.log("vapid id: ", VITE_APP_VAPID_KEY);
      try {
        const _token = await getToken(messaging, {
          vapidKey: VITE_APP_VAPID_KEY,
        });
        setToken(_token);
        console.log("Token generated : ", _token);
      } catch (e) {
        console.log("err occured");
        setToken("Error generating token");
        console.log(e);
      }

      //We can send token to server
    } else if (permission === "denied") {
      //notifications are blocked
      setToken("Access Blocked");
      alert("You denied for the notification");
    }
  }

  useEffect(() => {
    requestPermission();
  }, []);

  onMessage(messaging, (payload) => {
    console.log("incoming msg");
    toast(<Message notification={payload.notification} />);
    setNotif((old) => [...old, payload.notification]);
  });

  function onCopied() {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 5000);
  }

  return (
    <>
      <div>
      <h1>Token</h1>
        <h5>{copied ? "Copied" :'click to copy to clipboard' }</h5>
        <CopyToClipboard text={token} onCopy={onCopied}>
          <div
            style={{
              padding: 10,
              backgroundColor: "rgba(0,0,0,0.1)",
              borderRadius: 5,
              maxWidth: 500,
              cursor: "pointer"
            }}
          >
            <p
              style={{
                width: '100%',
                overflowWrap: "break-word",
              }}
            >
              {token}
            </p>
          </div>
        </CopyToClipboard>
      </div>
      <h1>{notifs.length}- received</h1>
      <div className="card">
        {notifs.map((n) => (
          <Message notification={n} />
        ))}
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
