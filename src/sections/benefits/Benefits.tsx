import { Button } from '../../components/button/Button'
import { SectionHeader } from '../../components/section_header/SectionHeader'
import { IoFingerPrintSharp } from 'react-icons/io5'
import { FaPaintBrush, FaMoneyBillWave } from 'react-icons/fa'
import { BiInfinite } from 'react-icons/bi'
import { AiFillThunderbolt } from 'react-icons/ai'
import { HiAdjustments } from 'react-icons/hi'
import { BenefitsBox } from './benefitsBox/BenefitsBox'
import benefits1 from '../../images/Benefits1.svg'
import benefits2 from '../../images/Benefits2.svg'
import benefitsDivider from '../../images/BenefitsDivider.svg'
import classes from './Benefits.module.scss'

export const Benefits = () => {
	return (
		<section className={classes.benefits} id='benefits'>
			<div className='container'>
				<div className={classes.img}>
					<img src={benefits1} alt='' />
				</div>
				<SectionHeader
					h1='Membership benefits'
					h2="Perks so good you'll never need to go anywhere else for your design. Seriously."
				/>
				<div className={classes.btn}>
					<Button href='#pricing'>See plans</Button>
				</div>
				<div className={classes['box-container']}>
					<BenefitsBox
						h3='Unlimited requests'
						p='Make as many design requests and revisions as you want.'
						icon={<BiInfinite />}
					/>
					<BenefitsBox
						h3='Lightning fast delivery'
						p='Get your designs in just a few days on average, Monday to Friday.'
						icon={<AiFillThunderbolt />}
					/>
					<BenefitsBox
						h3='Fixed monthly rate'
						p='No surprises here! Pay the same fixed price each month.'
						icon={<FaMoneyBillWave />}
					/>
					<BenefitsBox
						h3='Top-notch quality'
						p='Insane design quality at your fingertips whenever you need it.'
						icon={<FaPaintBrush />}
					/>
					<BenefitsBox
						h3='Flexible and scalable'
						p='Scale up or down as needed, and cancel at anytime.'
						icon={<HiAdjustments />}
					/>
					<BenefitsBox
						h3='Unique and all yours'
						p='Each of your designs is made especially for you and is 100% yours.'
						icon={<IoFingerPrintSharp />}
					/>
				</div>
			</div>
			<img src={benefits2} alt='' className={`${classes.decoration} ${classes.d1}`} />
			<img src={benefitsDivider} alt='' className={`${classes.decoration} ${classes.d2}`} />
		</section>
	)
}
