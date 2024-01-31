import { createComponent } from "./CreateComponent";

export const Button = createComponent(({ title, bgColor, addClass, ...props }) => {
  return (
    <button className={`bg-${bgColor}-500 hover:bg-${bgColor}-700 text-white font-bold py-1 px-2 rounded ${addClass}`} {...props}>
      {title}
    </button>
  )
});
