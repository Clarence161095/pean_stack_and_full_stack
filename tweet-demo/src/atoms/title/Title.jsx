export default function Title({ title = 'Hello world!' }) {
  return (
    <h1 className="text-3xl font-bold underline">
      {title}
    </h1>
  )
}
