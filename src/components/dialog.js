export default function Dialog({type, msg}) {
  return (
    <div className={'dialog ' + type}>
      <p className='msg'>{msg}</p>
    </div>
  );
}
