export default function InputControl({ type = 'text', id, placeholder = '', className, ...props }) {
  return (
    <div className={`flex flex-col gap-2 ` + className}>
      <label htmlFor={id} className="text-lg font-semibold">
        {props.label}
      </label>
      {type === 'textarea' ? (
        <textarea
          id={id}
          placeholder={placeholder}
          rows={4}
          className="border border-gray-300 rounded-md p-2"
          {...props}
        />
      ) : (
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          className="border border-gray-300 rounded-md p-2"
          {...props}
        />
      )}
      {props.error && <p className="text-red-500">{props.error} </p>}
    </div>
  );
}
