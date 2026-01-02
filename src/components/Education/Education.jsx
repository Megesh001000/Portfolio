import "./Education.css"

const educationData=[
   
    {
        category:"SSLC",
        course:"Grade-10",
        year:"2020",

        place_name:"Bharathiyar Matriculation Higher Secondary School",
        location:"Chengalpattu"
    },
    {
        category:"Higher Secondary",
        course:"Grade-10",
        year:"2020-2022",

        place_name:"Bharathiyar Matriculation Higher Secondary School",
        location:"Chengalpattu"
    },
    {
        category:"Bachelor Degree",
        course:"B Tech CSE Specialization in Cyber Security",
        place_name:"Bharath institute of science and technology",
        year:"2022-2026",
        location:"Chennai"
    },
]

function Education() {
  return (
    <section id="education" className="education-section">
        <h2 className="education-title">Education</h2>
        <div className="education-grid">
            {educationData.map((details,index)=>
                <div className="education-card" key={index}>
                    <h3 className="education-category ">{details.category}</h3>
                    <p className="education-course">{details.course}</p>
                    <p className="esucation-place">{details.place_name}, {details.location}</p>
                    {/* <p className="education-location"><small>{details.location}</small></p> */}
                    <p>{details.year}</p>
                    
                   
                </div>
            )}



        </div>
    </section>
  )
}

export default Education