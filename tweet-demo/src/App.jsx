import './App.scss';
import Button from './atoms/buttons/Button';
import Title from './atoms/title/Title';
import { AntButton } from './configs/ant';
import { MuiButton } from './configs/mui';
import Layout from './layouts/TailwindLayout';

function App() {
  return (
    <>
      <Layout >
        <Title />
        <Button name='My Button' />
        <MuiButton variant='outlined'>MUI</MuiButton>
        <AntButton type='default'>Ant</AntButton>
      </Layout>
    </>
  )
}

export default App
