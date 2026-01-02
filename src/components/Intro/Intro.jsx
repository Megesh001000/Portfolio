import "./Intro.css"
function Intro({exit}) {
  return (
    <div className={`intro-container ${exit?"fade-out":""}`}>
        <h1 className="intro-name">Megeshwaran M</h1>
        <p className="intro-role">Full Stack Developer</p>
    </div>
  )
}

export default Intro