import uniqid from 'uniqid'
import { workExperiences } from '../../portfolio'
import ItemContainer from '../ItemContainer/ItemContainer'
import './WorkExperience.css'

const WorkExperience = () => {
  if (!workExperiences.length) return null

  return (
    <section id='work-experience' className='section work-experience'>
      <h2 className='section__title'>Work Experience</h2>

      <div className='work-experience__grid'>
        {workExperiences.map((experience) => (
          <ItemContainer key={uniqid()} item={experience} />
        ))}
      </div>
    </section>
  )
}

export default WorkExperience
