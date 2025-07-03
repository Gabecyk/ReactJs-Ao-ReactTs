type GreetingProps = {
    name: string;
}

function Greeting({ name }: GreetingProps) {
  return (
    <div>
        <h3>Olá {name}!</h3>
    </div>
  )
}

export default Greeting