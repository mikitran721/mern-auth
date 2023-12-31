import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  signInFailure,
  signInStart,
  signInSuccess,
  setErrorState,
} from "../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import OAuth from "../components/OAuth";

export default function SignIn() {
  const [formData, setFormData] = useState({});
  /* const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false); */
  const { loading, error } = useSelector((state) => state.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // function handleChange
  const handleChange = (e) => {
    if (error !== false) {
      dispatch(setErrorState(false));
    }
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // function handleSubmit
  const handleSubmit = async (e) => {
    // su dung dc endpoint nay do da set trong vite.config
    e.preventDefault();

    try {
      /* setLoading(true);
      setError(false); */
      dispatch(signInStart());

      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      // setLoading(false);

      if (data.success === false) {
        // setError(true);
        // console.log(">> data: ", data);
        dispatch(signInFailure(data.error));
        return true;
      }
      // console.log(">> check data: ", data);
      dispatch(signInSuccess(data));

      navigate("/"); //chuyen ve homepage
    } catch (error) {
      /* setLoading(false);
      setError(true); */
      dispatch(signInFailure(error));
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h2 className="text-3xl text-center font-semibold my-7">Sign In</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 ">
        <input
          onChange={handleChange}
          type="email"
          placeholder="Email"
          id="email"
          className="bg-slate-100 p-3 rounded-lg"
        />

        <input
          onChange={handleChange}
          type="password"
          placeholder="Password"
          id="password"
          className="bg-slate-100 p-3 rounded-lg"
        />

        <button
          disabled={loading}
          className="bg-slate-700 text-white p-3 rounded-lg  uppercase hover:opacity-95 disabled:opacity-80"
        >
          {loading ? "Loading..." : "Sign in"}
        </button>
        <OAuth />
      </form>
      <div className="flex gap-2 mt-5">
        <p>Don't have an account?</p>
        <Link to="/sign-up">
          <span className="text-blue-500">Sign up</span>
        </Link>
      </div>
      <p className="text-red-700 mt-5">
        {error ? error || "Something went wrong!" : ""}
      </p>
    </div>
  );
}
