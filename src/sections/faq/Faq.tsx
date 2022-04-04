import { Button } from '../../components/button/Button'
import { SectionHeader } from '../../components/section_header/SectionHeader'
import { FaqItem } from './faqItem/FaqItem'
import faqDivider from '../../images/FaqDivider.svg'
import faqImg1 from '../../images/FaqImages1.svg'
import faqImg2 from '../../images/FaqImages2.svg'
import classes from './Faq.module.scss'
const FAQS = [
	{
		question: 'Is it really unlimited requests?',
		answer:
			"Yes! Once subscribed, you're able to add as many design requests to your queue as you'd like, and they will delivered one by one.",
	},
	{
		question: 'How fast will I receive my designs?',
		answer:
			'On average, most requests are completed in just two days or less. However, more complex requests can take longer.',
	},
	{
		question: 'Who are the designers?',
		answer:
			"You might be surprised to hear this, but Designjoy is actually an agency of one. This means you'll work directly with me, founder of Designjoy. However, power-ups requests such as animations or custom illustrations are provided by partner designers.",
	},
	{
		question: 'Do you offer discounted annual plans?',
		answer:
			"Absolutely. You can save a whopping 20% when you pay in full for a year. That's a savings of $1,000 per month on our base plan.",
	},
	{
		question: 'What programs do you design in?',
		answer: 'Most requests are designed using Figma.',
	},
	{
		question: 'How do I request designs?',
		answer:
			"Designjoy offers a ton of flexibility in how you request designs using Trello. Some common ways clients request designs is directly via Trello, sharing Google docs or wireframes, or even recording a brief Loom video (for those who prefer not to write their briefs out). Basically, if it can be linked to or shared in Trello, it's fair game.",
	},
	{
		question: "What if I don't like the design?",
		answer: "No worries! We'll continue to revise the design until you're 100% satisfied.",
	},
	{
		question: 'What if I only have a single request?',
		answer:
			"That's fine. You can pause your subscription when finished and return  when you have additional design needs. There's no need to let the remainder of your subscription go to waste.",
	},
	{
		question: 'Are there any contracts to use your service?',
		answer: 'There are no contracts or commitments to use our service. You can cancel at any time you wish.',
	},
]

export const Faq = () => {
	return (
		<section className={classes.faq} id='faq'>
			<div className='container'>
				<SectionHeader h1='FAQs' />
				<div className={classes.box}>
					{FAQS.map(faq => (
						<FaqItem key={faq.question} answer={faq.answer} question={faq.question} />
					))}
				</div>
				<div className={classes.btn}>
					<Button href='#questions'>View all FAQs</Button>
				</div>
			</div>
			<img src={faqImg1} alt='' className={`${classes.decoration} ${classes.d1}`} />
			<img src={faqImg2} alt='' className={`${classes.decoration} ${classes.d2}`} />
			<img src={faqDivider} alt='' className={`${classes.decoration} ${classes.d3}`} />
		</section>
	)
}
