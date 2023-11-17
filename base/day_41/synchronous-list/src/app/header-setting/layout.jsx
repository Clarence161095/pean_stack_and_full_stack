export default function HeaderSettingLayout(props) {
  const { children } = props;
  const role = "admin"
  return (
    <>
      {role === "admin" ? children : <div>Forbidden</div>}
    </>
  )
}
