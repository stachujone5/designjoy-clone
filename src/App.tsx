import { Header } from './components/header/Header'
import { BrandsSlider } from './sections/brands_slider/BrandsSlider'
import { NeverGoBack } from './sections/never_go_back/NeverGoBack'
import { ProjectsSlider } from './sections/projects_slider/ProjectsSlider'
import { Welcome } from './sections/welcome/Welcome'
import { WhyUs } from './sections/why_us/WhyUs'

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
			</main>
		</>
	)
}
