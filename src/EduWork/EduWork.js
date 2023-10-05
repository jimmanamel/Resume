import './EduWork.css'

const EduWork = () => {
  return (
    <div className='eduContainer'>
      <div className='education'>
        <p>Education</p>
        <table cellSpacing={10}cellPadding={10}>
          <tr>
            <td>Bachelor of Technology</td>
            <td>College of engineering Chengannur</td>
            <td>2016 - 2020</td>
          </tr>
          <tr>
            <td>12th</td>
            <td>St. John the baptist Higher Secondary School, Nedumkunnam</td>
            <td>2014 - 2016</td>
          </tr>
          <tr>
            <td>10th</td>
            <td>St. John the baptist Higher Secondary School, Nedumkunnam</td>
            <td>2014</td>
          </tr>
        </table>
        </div>
      <div>
      <div className='work'>
        <p>Professional career</p>
        <table cellSpacing={10}cellPadding={10}>
          <tr>
            <td>Project Engineer</td>
            <td>Wipro Technologies Ltd</td>
            <td>2020 - Present</td>
          </tr>
        </table></div>
      <div className='skill'>
        <p>Skills</p>
        <ul>
          <li>HTML 5</li>
          <li>CSS</li>
          <li>Javascript(ES6)</li>
          <li>React JS</li>
          <li>Next JS</li>
          <li>Git/GitHub</li>
          <li>MERN Full Stack</li>
          <li>SQL</li>
        </ul>
        </div>
      </div>
    </div>
  );
};

export default EduWork;
