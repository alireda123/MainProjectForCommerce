import { useEffect, useState } from "react";

import { supabase } from "../utils/supabaseClient";

export default function Home() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <div className="text-center my-24">
      
      <h1>Welcome to our store</h1>
      <div className="flex items-center justify-center my-24">
        <img
          className=""
          src="https://tse1.mm.bing.net/th?id=OIP.kntu4XmWrZLy0ZqTw7YPwgHaE7&pid=Api&P=0&w=251&h=167"
        ></img>
        <p>this is our store, welcome dear friend</p>
      </div>
      <div className="flex items-center justify-center my-24">
        <img
          className=""
          src="https://tse1.mm.bing.net/th?id=OIP.kntu4XmWrZLy0ZqTw7YPwgHaE7&pid=Api&P=0&w=251&h=167"
        ></img>
        <p>this is our store, welcome dear friend</p>
      </div>
      <div className="flex items-center justify-center my-24">
        <img
          className=""
          src="https://tse1.mm.bing.net/th?id=OIP.kntu4XmWrZLy0ZqTw7YPwgHaE7&pid=Api&P=0&w=251&h=167"
        ></img>
        <p>this is our store, welcome dear friend</p>
      </div>
    </div>
  );
}
