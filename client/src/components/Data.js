import { useParams } from 'react-router-dom';

export default function Data() {
  let params = useParams();
  return (
    <>
      <h2>{console.log(params.data)}</h2>
      {/* <h2>{params.data.pwdUser}</h2> */}
    </>
  );
}
