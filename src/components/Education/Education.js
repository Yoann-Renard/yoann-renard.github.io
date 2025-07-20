import uniqid from 'uniqid'
import { education } from '../../portfolio'
import ItemContainer from '../ItemContainer/ItemContainer'
import './Education.css'

const Education = () => {
  if (!education.length) return null

  return (
    <section id='education' className='section education'>
      <h2 className='section__title'>Education</h2>

      <div className='education__grid'>
        {education.map((edu) => (
          <ItemContainer key={uniqid()} item={edu} />
        ))}
      </div>
    </section>
  )
}

export default Education
