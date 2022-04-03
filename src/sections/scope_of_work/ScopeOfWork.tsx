import { Button } from '../../components/button/Button'
import classes from './ScopeOfWork.module.scss'
import divider from '../../images/ScopeDivider.svg'
import scope1 from '../../images/Scope1.svg'
import scope2 from '../../images/Scope2.svg'
import img1 from '../../images/ScopeImages1.svg'
import img2 from '../../images/ScopeImages2.svg'
import img3 from '../../images/ScopeImages3.svg'
import img4 from '../../images/ScopeImages4.svg'
import img5 from '../../images/ScopeImages5.svg'
import img6 from '../../images/ScopeImages6.svg'
import { ScopeTable } from './scope_table/ScopeTable'

export const ScopeOfWork = () => {
	return (
		<section className={classes.work}>
			<div className='container'>
				<div className={classes.box}>
					<img className={classes.d3} src={scope2} alt='' />
					<h2>Funky Scribbbles</h2>
					<p>A collection of funky vectorized scribbbles to spice up your design projects.</p>
					<Button href='#scribbles'>Check it out</Button>
					<div className={classes['images-container']}>
						<img src={img1} alt='' />
						<img src={img2} alt='' />
						<img src={img3} alt='' />
						<img src={img4} alt='' />
						<img src={img5} alt='' />
						<img src={img6} alt='' />
					</div>
				</div>
				<ScopeTable />
			</div>
			<img src={divider} alt='' className={`${classes.decoration} ${classes.d1}`} />
			<img src={scope1} alt='' className={`${classes.decoration} ${classes.d2}`} />
		</section>
	)
}
