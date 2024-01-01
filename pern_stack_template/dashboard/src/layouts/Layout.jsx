import Menu from "./Menu";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col h-screen">
      <header className="flex items-center h-[50px]">
        Header
      </header>
      <section className="flex h-full">
        <nav className="flex flex-col w-fit min-w-[250px] max-w-[300px]">
          <Menu />
        </nav>
        <main className="h-full w-full">
          {children}
        </main>
      </section>
    </div>
  )
}
