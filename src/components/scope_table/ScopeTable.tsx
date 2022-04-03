import { SectionHeader } from '../section_header/SectionHeader'
import scope3 from '../../images/Scope3.svg'
import classes from './ScopeTable.module.scss'

const items = [
	'Websites',
	'Slide decks',
	'Trade show banners',
	'Mobile apps',
	'Direct mail',
	'Email graphics',
	'Logos & branding',
	'Infographics',
	'Resumes',
	'Design systems',
	'Brochures',
	'Business cards',
	'SAAS',
	'Signage',
	'Packaging',
	'Wireframes',
	'Brand guides',
	'Blog graphics',
	'Stationery',
	'Social media graphics',
	'Digital ads',
	'Pitch decks',
	'Billboards',
	'Icons',
]

export const ScopeTable = () => {
	return (
		<>
			<SectionHeader h1='Apps, websites, logos & more.' />
			<div className={classes.box}>
				{items.map(item => {
					return (
						<div key={item} className={classes.item}>
							<p>{item}</p>
						</div>
					)
				})}
				<img src={scope3} alt='' />
			</div>
		</>
	)
}
