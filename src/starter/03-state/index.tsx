import { useState } from 'react';

type Link = {
  id: number;
  url: string;
  text: string;
};

const navLinks: Link[] = [
  {
    id: 1,
    url: 'some url',
    text: 'some text',
  },
  {
    id: 2,
    url: 'some url',
    text: 'some text',
  },
  {
    id: 3,
    url: 'some url',
    text: 'some text',
  },
];

function Component() {
  const [text, setText] = useState('shake and back');
  const [number, setNumber] = useState(12);
  const [list, setList] = useState<(string | number)[]>([]);

  const [object, setObject] = useState<Link[]>(navLinks);
  return (
    <div>
      <h2 className="mb-1">React & Typescript</h2>
      <button
        className="btn btn-center"
        onClick={() =>
          //setText('string')
          // setNumber(23)
          // setList(['hello', 'world', 2, 3])
          setObject([...object, { id: 4, url: 'hello', text: 'hello' }])
        }
      >
        click me
      </button>
      <h1>{text}</h1>
      <h1>{number}</h1>
      <h1>{list}</h1>
    </div>
  );
}
export default Component;
