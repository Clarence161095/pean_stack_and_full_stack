import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";

export default function Announcement() {
  return (
    <section className="w-full">
      <div >
        <h1 className="text-xl font-bold">Announcement</h1>
        <Button title="+ Add" onClick={() => { console.log('+ Add'); }}/>
      </div>
      <div>
        <Input label="Announcement" />
      </div>
    </section>
  )
}

