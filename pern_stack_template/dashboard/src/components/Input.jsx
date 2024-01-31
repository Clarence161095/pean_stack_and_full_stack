import { classNameStrategy, createComponent } from "./CreateComponent";

export const Input = createComponent(({ label, id = label, addClass, ...props }) => {
  return (
    <p className="mb-2">
      <label htmlFor={id} className='mr-2'>{label}:</label>
      <input id={id} type="text" className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${addClass}`} {...props} />
    </p>
  )
}, [classNameStrategy]);
