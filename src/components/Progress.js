function Progress({ index, numQuestion, points, maxPosiblePoints, answer }) {
  return (
    <header className='progress'>
      <progress max={numQuestion} value={index + Number(answer !== null)} />
      <p>
        Question <strong>{index + 1}</strong>/{numQuestion}
      </p>
      <p>
        <strong>{points}</strong>/{maxPosiblePoints}
      </p>
    </header>
  );
}

export default Progress;
