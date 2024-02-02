export default function List({ list }) {
  return (
    <>
      {list.map((data) => (
        <div
          key={data.id}
          className="flex flex-col gap-2 p-2 border border-gray-300 rounded-md shadow-md w-full max-w-[100vw] hover:shadow-lg transition duration-300 ease-in-out cursor-pointer hover:border-blue-500 hover:scale-105 transform-gpu"
        >
          <h1 className="text-lg font-bold">{data.title}</h1>
          <p>{data.content}</p>
          <div className="flex justify-between items-center">
            <p>{data.author}</p>
            <p>{data.date}</p>
          </div>
        </div>
      ))}
    </>
  );
}
