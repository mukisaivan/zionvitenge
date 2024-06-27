export default function Custombutton({ action }) {
  return (
    <button
      className=" block mt-5 rounded-lg bg-red-700 p-6 ml-4"
      onClick={action}
    >
      custom button
    </button>
  );
}