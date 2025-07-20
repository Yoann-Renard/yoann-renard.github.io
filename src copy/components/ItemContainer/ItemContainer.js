import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import './ItemContainer.css'

const ItemContainer = ({ item }) => (
  <div className='item'>
    <h3>{item.name}</h3>
    {item.company && <p className='item__company'>{item.company}</p>}
    {item.institution && <p className='item__institution'>{item.institution}</p>}
    {item.period && <p className='item__period'>{item.period}</p>}
    <p className='item__description'>{item.description}</p>
    {item.stack && (
      <ul className='item__stack'>
        {item.stack.map((stackItem) => (
          <li key={uniqid()} className='item__stack-item'>
            {stackItem}
          </li>
        ))}
      </ul>
    )}

    {item.sourceCode && (
      <a
        href={item.sourceCode}
        target='_blank'
        rel="noreferrer"
        aria-label='source code'
        className='link link--icon'
      >
        <GitHubIcon />
      </a>
    )}

    {item.livePreview && (
      <a
        href={item.livePreview}
        target='_blank'
        rel="noreferrer"
        aria-label='live preview'
        className='link link--icon'
      >
        <LaunchIcon />
      </a>
    )}
  </div>
)

export default ItemContainer
