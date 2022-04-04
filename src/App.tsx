import { Header } from './components/header/Header'
import { Benefits } from './sections/benefits/Benefits'
import { BrandsSlider } from './sections/brands_slider/BrandsSlider'
import { Latest } from './sections/latest/Latest'
import { NeverGoBack } from './sections/never_go_back/NeverGoBack'
import { Pricing } from './sections/pricing/Pricing'
import { ProjectsSlider } from './sections/projects_slider/ProjectsSlider'
import { ScopeOfWork } from './sections/scope_of_work/ScopeOfWork'
import { Welcome } from './sections/welcome/Welcome'
import { WhyUs } from './sections/why_us/WhyUs'
import { Faq } from './sections/faq/Faq'
import { Footer } from './components/footer/Footer'

export const App = () => {
	return (
		<>
			<Header />
			<main>
				<Welcome />
				<ProjectsSlider />
				<BrandsSlider />
				<WhyUs />
				<NeverGoBack />
				<Benefits />
				<Latest />
				<ScopeOfWork />
				<Pricing />
				<Faq />
			</main>
			<Footer />
		</>
	)
}
